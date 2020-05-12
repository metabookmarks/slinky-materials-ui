package slinky.generator

import java.io.File
import java.nio.file.Files
import java.nio.file.Paths
import java.net.URI

import slinky.generator.model.{Element, Enum, Module}
import scala.io.Source
import scopt._
import org.slf4j.LoggerFactory
import slinky.generator.model.CustomAttribute
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
import com.typesafe.scalalogging.LazyLogging

case class Config(target: File = new File("target/"),
                  srcManaged: File = new File("target/"),
                  modulesPath: File = new File("src/main/npm")
) {
  def modules: List[File] = {
    val finder = new ModuleFinder()
    Files.walkFileTree(modulesPath.toPath(), finder)
    finder.modules
  }
}
object ExtrernalComponent extends App with LazyLogging {

  val parser = new scopt.OptionParser[Config]("scopt") {
    head("scopt", "3.x")
    opt[File]("target")
      .action((target, config) =>
        config
          .copy(target = target)
      )
      .required()
    opt[File]("src-managed")
      .action((srcManaged, config) =>
        config
          .copy(srcManaged = srcManaged)
      )
      .required()
    opt[File]("modulesPath")
      .action((modulesPath, config) =>
        config
          .copy(modulesPath = modulesPath)
      )
      .required()
    help("help")
  }

  parser.parse(args, Config()) match {
    case None =>
      logger.error(parser.usage)
    case Some(config) =>
      config.modules.foreach { moduleFile =>
        logger.debug(s"\t* ${moduleFile.getName()}")

        confFile(config, moduleFile)

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

  def processModule(config: Config, moduleFile: File, module: Module): Unit = {
    val generator = new externalcomponent.ExtrernalComponentGenerator(config.target)
    generator.processModule(moduleFile, module, new File(config.srcManaged, module.name))
  }

}
