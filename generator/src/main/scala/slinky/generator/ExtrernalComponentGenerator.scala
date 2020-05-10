package slinky.generator

import java.io.File
import java.nio.file.Files
import java.nio.file.Paths
import java.net.URI

import io.circe.generic.auto._
import io.circe.parser._
import io.circe.jawn._

import slinky.generator.model.{Element, Enum, Module}
import scala.io.Source
import scopt._
import org.slf4j.LoggerFactory
import slinky.generator.model.CustomAttribute
import io.circe.ParsingFailure
import io.circe.DecodingFailure
import scala.jdk.StreamConverters._
import org.apache.commons.codec.cli.Digest
import org.apache.commons.codec.digest.DigestUtils
import java.io.FileInputStream
import java.nio.file.Path
import scala.util.Using
import java.io.PrintWriter

import pureconfig._
import pureconfig.generic.auto._
import slinky.generator.model.Elements

object ExtrernalComponentGenerator extends App with Utils {

  parser.parse(args, Config()) match {
    case None =>
      logger.error(parser.usage)
    case Some(config) =>
      config.modules.foreach { moduleFile =>
        logger.debug(s"\t* ${moduleFile.getName()}")

        moduleFile match {
          case json if json.getName().endsWith(".json") =>
            jsonFile(config, moduleFile)
          case conf if conf.getName().endsWith(".conf") =>
            confFile(config, moduleFile)
        }

      }
  }

  def confFile(config: Config, moduleFile: File): Unit =
    ConfigSource.file(moduleFile).withFallback(ConfigSource.resources("module.conf")).load[Module] match {
      case Left(e) =>
        e.toList.foreach { er =>
          logger.error(er.description)
        }
      case Right(module) =>
        processModule(config, moduleFile, module)
    }
  def jsonFile(config: Config, moduleFile: File): Unit =
    decodeFile[Module](moduleFile) match {

      case Left(e) =>
        e match {
          case ParsingFailure(message, underlying) =>
            logger.error(s"Could not parse Module info $message", underlying.getMessage())
          case DecodingFailure(message, _) =>
            logger.error(s"Could not parse Module info $message")

        }
      case Right(module) =>
        processModule(config, moduleFile, module)
    }

  def processModule(config: Config, moduleFile: File, module: Module): Unit = {
    val generator = new ExtrernalComponentGenerator(config.target)
    generator.processModule(moduleFile, module, new File(config.srcManaged, module.name))
  }

}

class ExtrernalComponentGenerator(target: File) extends Utils {

  def digestFile(module: Module, file: File): File = new File(target, s"${module.name}-${file.getName()}.sha256")

  def needProcessing(module: Module, file: File): Boolean =
    if (digestFile(module, file).exists) {
      val old = Source.fromFile(digestFile(module, file)).getLines().mkString

      if (
        DigestUtils
          .sha256Hex(new FileInputStream(file))
          .contentEquals(old)
      ) {
        logger.debug(s"${file.getName()} unchanged")
        false
      } else {
        logger.info(s" 🎉 ${file.getName()}")
        true
      }
    } else {
      logger.info(s" ✨ ${file.getName()}")
      true
    }

  def writeDigest(module: Module, file: File): Unit =
    Using.resource(new PrintWriter(digestFile(module, file))) { printer =>
      printer.write(
        DigestUtils
          .sha256Hex(new FileInputStream(file))
      )
    }

  def processModule(moduleFile: File, module: Module, outputFolder: File): Unit = {
    if (outputFolder.mkdirs())
      logger.debug("Output [{}] module created.", outputFolder.getAbsolutePath())

    if (needProcessing(module, moduleFile)) {
      writeModule(module, outputFolder)
      module.elements.foreach(element => processElement(module, element, outputFolder))
      writeDigest(module, moduleFile)
    }

    val moduleFolder = moduleFile.toPath().resolveSibling(module.name)
    if (Files.exists(moduleFolder))
      Files
        .list(moduleFolder)
        .toScala(LazyList)
        .filter(file => needProcessing(module, file.toFile()))
        .foreach { elementsFile =>
          val elements = ConfigSource.file(elementsFile).load[Elements]
          elements match {
            case Left(e) =>
              e.toList.foreach { er =>
                logger.error(er.description)
              }
            case Right(elements) =>
              elements.elements.foreach { element =>
                processElement(module, element, outputFolder)
                writeDigest(module, elementsFile.toFile())
              }

          }
        }

  }

  def writeModule(module: Module, outputFolder: File): Unit =
    Using.resource(IndentWriter(new PrintWriter(outputFolder.toPath.resolve("package.scala").toFile()))) {
      implicit output =>
        outln(s"package ${module.parent}")

        processModuleImports(module)

        begin(s"package object ${module.name}") { implicit output =>
          module.enums.foreach(processEnum)

          module.objects.foreach(processObjects(module))

          module.functions.foreach(processFunctions(module))

          module.customAttributes.foreach(processAttribute)

        }
    }

  def processFunctions(module: Module)(functions: List[model.Function])(implicit output: IndentWriter) = {
    outln("@js.native")
    outln(s"""@JSImport("${module.npm}", JSImport.Default)""")
    begin(s"object ${module.mod} extends js.Any") { implicit output =>
      functions.foreach { function =>
        outln(s"@js.native")
        outln(s"object ${function.name} extends js.Object")
      }

    }

    functions.foreach { function =>
      outln(s"${function.scala(module.mod)}")
      function.partials.foreach { partials =>
        outln(s"// Partial application $partials")
        outln(
          s"def ${function.name}[A](param: js.Dynamic): js.Function0[A] = ${function.name}[A]((param: js.Object) => param)"
        )
        for (n <- 2 to partials) {
          val params = expand(n)(i => s"p$i: (String, js.Dynamic)")
          val jsParams = expand(n)(i => s"p$i._1 -> p$i._2")
          outln(s"def ${function.name}[A]( ${params}  ): js.Function0[A] =")
          outln(s"${function.name}[A]((param: js.Object) => js.Dynamic.literal(${jsParams}))")
        }

      }

    }
  }

  def processModuleImports(module: Module)(implicit output: IndentWriter) = {
    outln("import scalajs.js")
    outln("import scala.scalajs.js.{UndefOr, |}")
    outln("import scala.scalajs.js.annotation.JSImport")
    outln("import slinky.core.annotations.react")
    outln("import slinky.core.ExternalComponent")
    outln("import slinky.readwrite.Writer")
    module.customAttributes.foreach(_ => outln("import slinky.core.CustomAttribute"))
    outln()
  }

  def processObjects(module: Module)(objects: List[String])(implicit output: IndentWriter) =
    objects.foreach { obj =>
      outln("@js.native")
      outln(s"""@JSImport("${module.npm}", JSImport.Default)""")
      outln(s"object $obj extends js.Object")
    }
  def processAttribute(attributes: List[CustomAttribute])(implicit output: IndentWriter) =
    attributes.foreach {
      case CustomAttribute(name, maybeSymbol, _type) =>
        val symbol = maybeSymbol.getOrElse(name)
        outln(s"""  val ${symbol} = CustomAttribute[${_type}]("$name")""")
    }

  def processEnum(enums: List[Enum])(implicit output: IndentWriter) =
    enums.foreach { enum_ =>
      if (enum_.typeAlias.isEmpty) {
        outln(s"sealed trait ${enum_.name}")
        begin(s"object ${enum_.name}") { implicit output =>
          enum_.escapedValues.foreach(value => outln(s"case object $value extends ${enum_.name}"))
          outln(
            s"implicit val a${enum_.name}Writer: Writer[${enum_.name}] = _.toString.asInstanceOf[js.Object]"
          )
        }
      } else
        begin(s"object ${enum_.name}") { implicit output =>
          enum_.escapedValues.foreach(value => outln(s"case object $value"))
          enum_.typeAlias.foreach { alias =>
            outln(
              s"type ${alias.name} = ${alias.escapedValues
                .getOrElse(enum_.escapedValues)
                .map {
                  case "Boolean" => "Boolean"
                  case v => s"$v.type"
                }
                .mkString(" | ")}"
            )
            out(s"implicit val ${alias.name}Writer: Writer[${alias.name}] = ")
            outln(alias.writer.getOrElse("_.toString.asInstanceOf[js.Object]"))
          }
        }

    }

  def expand(n: Int)(f: Int => String) = (1 to n).map(i => f(i)).mkString(", ")

  def processElement(module: Module, element: Element, outputFolder: File): Unit =
    Using.resource(IndentWriter(new PrintWriter(outputFolder.toPath.resolve(s"${element.name}.scala").toFile()))) {
      implicit output =>
        outln("//GENERATED DO NO EDIT")

        outln(s"package ${module.pkg}")

        processElementImports(module, element)

        outln(s"""@JSImport("${module.npm}", JSImport.Default)""")
        outln("@js.native")

        begin(s"""private object ${element.dom} extends js.Object""") { implicit output =>
          outln(s"val ${element.name}: js.Object = js.native")
        }

        def processNoPropsElement(element: Element): Unit =
          begin(s"object ${element.name} extends ${element.baseClass}") { implicit output =>
            outln(s"override val component = ${element.dom}.${element.name}")
          }

        element.components.foreach { component =>
          if (component.props.isEmpty)
            processNoPropsElement(component)
          else
            begin(s"@react object ${component.name} extends ${component.baseClass}") { implicit output =>
              component.props.foreach { props =>
                out("case class Props(")
                props.dropRight(1).foreach(prop => outln(s"  $prop,"))
                outln(s"  ${props.last}")
                outln(")")
              }
              outln(s"override val component = ${element.dom}.${element.name}")
            }

        }

    }

  def processElementImports(module: Module, element: Element)(implicit output: IndentWriter) = {
    outln("import java.{util => ju}")
    outln("import scalajs.js")
    outln("import scala.scalajs.js.{UndefOr, |}")
    outln("import scala.scalajs.js.annotation.JSImport")
    outln("import slinky.core.annotations.react")
    outln("import slinky.core.ExternalComponent")
    module.customAttributes.foreach(_ => outln("import slinky.core.CustomAttribute"))
    outln("import org.scalajs.dom.raw._")
    outln("import slinky.web.SyntheticMouseEvent")

    module.imports.foreach(imports => imports.foreach(imp => outln(s"import $imp")))
    element.imports.foreach(imports => imports.foreach(imp => outln(s"import $imp")))

    outln()
  }

}
