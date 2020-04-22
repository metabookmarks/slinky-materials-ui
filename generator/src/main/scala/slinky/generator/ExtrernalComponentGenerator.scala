package slinky.generator

import java.io.PrintWriter
import java.io.File
import java.nio.file.Files
import java.nio.file.Paths
import java.net.URI

import io.circe.generic.auto._
import io.circe.parser._
import io.circe.jawn._

import slinky.generator.model.{Element, Module}
import scala.io.Source
import scopt._
import org.slf4j.LoggerFactory

case class Config(output: File = new File("target/"), modules: List[File] = List.empty)

object ExtrernalComponentGenerator extends App {

  val logger = LoggerFactory.getLogger(getClass())

  val parser = new scopt.OptionParser[Config]("scopt") {
    head("scopt", "3.x")
    opt[File]("output")
      .action((output, config) =>
        config
          .copy(output = output)
      )
      .required()
    help("help")
    arg[File]("modules")
      .unbounded()
      .action((module, config) =>
        config
          .copy(modules = config.modules :+ module)
      )
  }

  parser.parse(args, Config()) match {
    case None =>
      logger.error(parser.usage)
    case Some(config) =>
      logger.info(s"output: ${config.output}")
      config.modules.foreach { module =>
        logger.info(s"\t* $module")

        decodeFile[Module](module) match {
          case Left(e) => logger.error("TODO Module info", e.getMessage())
          case Right(module) =>
            processElements(module, config.output)
        }
      }
  }

  def processElements(module: Module, outputFolder: File): Unit = {
    if (!outputFolder.mkdirs())
      logger.warn("sys.exit(0)")

    val output = new PrintWriter(outputFolder.toPath.resolve(s"${module.name}.scala").toFile())

    output.println(s"""package ${module.pkg}
import scalajs.js
import scala.scalajs.js.annotation.JSImport
import slinky.core.annotations.react
import slinky.core.ExternalComponent
import org.scalajs.dom.raw.HTMLSpanElement
import slinky.web.SyntheticMouseEvent
""")
    module.imports.foreach(imports => imports.foreach(imp => output.println(s"import $imp")))
    output.println(s"""@JSImport("${module.npm}", JSImport.Default)
@js.native
object ${module.dom} extends js.Object {""")
    val elements = module.elements
    elements.foreach { element =>
      element.`type` match {
        case Some("class") =>
          output.println("@js.native")
          output.println(s"object ${element.name} extends js.Object")
        case _ =>
          val jsType = element.`type`.getOrElse("js.Object")
          output.println(s"  val ${element.name}: $jsType = js.native")

      }
    }
    output.println("}")

    output.println(s"package object ${module.name} {")

    elements.foreach { element =>
      element.`type` match {
        case Some("js.Object") | None =>
          output.println(s"  @react object ${element.name} extends ExternalComponent {")
          if (element.props.isEmpty)
            output.println("    type Props = Unit")
          else {
            element.props.foreach { props =>
              output.print("    case class Props(")
              output.print(props.mkString(", "))
              output.println(")")
            }
          }
          output.println(s"    override val component = ${module.dom}.${element.name}")
          output.println("  }")
        case Some("js.Function") =>
          output.println(s"""@js.native 
          val ${element.name}: js.Function = ${module.dom}.${element.name}""")
        case Some("class") =>
          output.println(s"val ${element.name} = ${module.dom}.${element.name}")
        case Some(wtf) => logger.warn(s"WTF:$wtf")
      }
    }
    output.println("}")
    output.close();

  }
}
