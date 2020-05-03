package slinky.generator.mdc

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
import slinky.generator.model.CustomAttribute

import slinky.generator.Config
import slinky.generator.Utils

object MDCGenerator extends App with Utils {

  parser.parse(args, Config()) match {
    case None =>
      logger.error(parser.usage)
    case Some(config) =>
      logger.info(s"output: ${config.output}")
      config.modules.foreach { module =>
        logger.info(s"\t* $module")

        decodeFile[Module](module) match {
          case Left(e) => logger.error(s"Could not parser Module info ${e.getMessage()}", e.getMessage())
          case Right(module) =>
          // processModule(module, new File(config.output, module.name))
        }
      }
  }

}
