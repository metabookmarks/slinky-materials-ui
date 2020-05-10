package slinky.generator

import org.slf4j.LoggerFactory
import java.io.File
import java.io.PrintWriter
import scala.util.Using
import java.nio.file.Files

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

trait Utils {
  val logger = LoggerFactory.getLogger(getClass())

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

  def begin(str: String)(f: IndentWriter => Unit)(implicit printer: IndentWriter) =
    Using.resource(printer.begin(str))(indentWriter => f(indentWriter))
  def out(str: String)(implicit printer: IndentWriter) = printer.out(str)
  def outln(str: String = "")(implicit printer: IndentWriter) = printer.outln(str)
  def end()(implicit printer: IndentWriter) = printer.end()

}
