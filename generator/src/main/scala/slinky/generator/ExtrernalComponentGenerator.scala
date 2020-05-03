package slinky.generator

import java.io.PrintWriter
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
object ExtrernalComponentGenerator extends App with Utils {

  parser.parse(args, Config()) match {
    case None =>
      logger.error(parser.usage)
    case Some(config) =>
      logger.info(s"output: ${config.output}")
      config.modules.foreach { moduleFile =>
        logger.debug(s"\t* ${moduleFile.getName()}")

        decodeFile[Module](moduleFile) match {

          case Left(e) =>
            e match {
              case ParsingFailure(message, underlying) =>
                logger.error(s"Could not parse Module info $message", underlying.getMessage())
              case DecodingFailure(message, _) =>
                logger.error(s"Could not parse Module info $message")

            }
          case Right(module) =>
            val generator = new ExtrernalComponentGenerator(config.target)
            generator.processModule(moduleFile, module, new File(config.output, module.name))
        }
      }
  }
}

class ExtrernalComponentGenerator(target: File) extends Utils {

  def digestFile(module: Module, file: File): File = new File(target, s"${module.name}-${file.getName()}.sha256")

  def needProcessing(module: Module, file: File): Boolean =
    if (digestFile(module, file).exists) {
      val old = Source.fromFile(digestFile(module, file)).getLines().mkString

      if (DigestUtils
            .sha256Hex(new FileInputStream(file))
            .contentEquals(old)) {
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
    if (!outputFolder.mkdirs())
      logger.debug("sys.exit(0)")

    if (needProcessing(module, moduleFile)) {
      writeModule(module, outputFolder)
      module.elements.foreach(element => processElement(module, element, outputFolder))
      writeDigest(module, moduleFile)
    }

    val moduleFolder = moduleFile.toPath().resolveSibling(module.name)
    if (Files.exists(moduleFolder)) {
      Files
        .list(moduleFolder)
        .toScala(LazyList)
        .filter(file => needProcessing(module, file.toFile()))
        .foreach { elementsFile =>
          val elements = decodeFile[List[Element]](elementsFile.toFile())
          elements.foreach(elements =>
            elements.foreach { element =>
              processElement(module, element, outputFolder)
              writeDigest(module, elementsFile.toFile())
            }
          )

        }
    }

  }

  def ouputEnum(enum_ : Enum)(implicit printer: PrintWriter): Unit =
    enum_.values.foreach {
      case value @ ("true" | "false") =>
        outln(s"    case object `$value` extends ${enum_.name}")
      case value if value.contains("-") =>
        outln(s"    case object `$value` extends ${enum_.name}")
      case value if value.matches(raw"^\d.*") =>
        outln(s"    case object `$value` extends ${enum_.name}")
      case value =>
        outln(s"    case object $value extends ${enum_.name}")
    }

  def writeModule(module: Module, outputFolder: File): Unit = {
    implicit val output = new PrintWriter(outputFolder.toPath.resolve("package.scala").toFile())

    outln(s"package ${module.parent}")

    outln("""|import scalajs.js
             |import scala.scalajs.js.{UndefOr, |}
             |import scala.scalajs.js.annotation.JSImport
             |import slinky.core.annotations.react
             |import slinky.core.ExternalComponent
             |import slinky.readwrite.Writer""")
    module.customAttributes.foreach(_ => outln("import slinky.core.CustomAttribute"))

    outln(s"package object ${module.name} {")

    module.enums.foreach { enums =>
      enums.foreach { enum_ =>
        enum_.typeAlias match {
          case Some(typeAlias) =>
            outln(s"  object ${enum_.name} {")
            enum_.escapedValues.foreach(value => outln(s"    case object $value"))
            typeAlias.foreach { alias =>
              outln(
                s"    type ${alias.name} = ${alias.escapedValues
                  .getOrElse(enum_.escapedValues)
                  .map {
                    case "Boolean" => "Boolean"
                    case v => s"$v.type"
                  }
                  .mkString(" | ")}"
              )
              out(s"    implicit val ${alias.name}Writer: Writer[${alias.name}] = ")
              outln(alias.writer.getOrElse("_.toString.asInstanceOf[js.Object]"))
            }
            outln("  }")
          case None =>
            outln(s"  sealed trait ${enum_.name}")
            outln(s"  object ${enum_.name} {")
            enum_.escapedValues.foreach(value => outln(s"    case object $value extends ${enum_.name}"))
            outln(s"    implicit val a${enum_.name}Writer: Writer[${enum_.name}] = _.toString.asInstanceOf[js.Object]")
            outln("  }")
        }

      }
    }

    module.objects.foreach(objects =>
      objects.foreach { obj =>
        outln("@js.native")
        outln(s"""@JSImport("${module.npm}", JSImport.Default)""")
        outln(s"  object $obj extends js.Object")
      }
    )
    module.customAttributes.foreach { attributes =>
      attributes.foreach {
        case CustomAttribute(name, maybeSymbol, _type) =>
          val symbol = maybeSymbol.getOrElse(name)
          outln(s"""  val ${symbol} = CustomAttribute[${_type}]("$name")""")
      }
    }

    outln("}")

    output.close()
  }

  def processElement(module: Module, element: Element, outputFolder: File): Unit = {

    implicit val output = new PrintWriter(outputFolder.toPath.resolve(s"${element.name}.scala").toFile())

    outln("//GENERATED DO NO EDIT")

    outln(s"package ${module.pkg}")
    outln("""|import scalajs.js
|import scala.scalajs.js.{UndefOr, |}
|import scala.scalajs.js.annotation.JSImport
|import slinky.core.annotations.react
|import slinky.core.ExternalComponent""")
    module.customAttributes.foreach(_ => outln("import slinky.core.CustomAttribute"))
    outln("""import org.scalajs.dom.raw._
import slinky.web.SyntheticMouseEvent
""")
    module.imports.foreach(imports => imports.foreach(imp => outln(s"import $imp")))
    element.imports.foreach(imports => imports.foreach(imp => outln(s"import $imp")))

    outln()
    outln(s"""@JSImport("${module.npm}", JSImport.Default)""")
    outln("@js.native")

    outln(s"""private object ${element.dom} extends js.Object {
             |  val ${element.name}: js.Object = js.native
             |}""")

    if (element.props.isEmpty) {
      out(s"object ${element.name} extends ${element.baseClass}")
      outln(" {")
    } else {
      out(s"@react object ${element.name} extends ${element.baseClass}")
      outln(" {")
      element.props.foreach { props =>
        out("  case class Props(")
        out(props.mkString(", "))
        outln(")")
      }
    }
    outln(s"  override val component = ${element.dom}.${element.name}")
    outln("}")

    output.close()
  }

}
