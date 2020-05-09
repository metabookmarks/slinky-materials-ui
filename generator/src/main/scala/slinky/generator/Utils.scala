package slinky.generator

import org.slf4j.LoggerFactory
import java.io.File
import java.io.PrintWriter
import scala.util.Using

case class Config(target: File = new File("target/"),
                  output: File = new File("target/"),
                  modules: List[File] = List.empty)

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

  def begin(str: String)(f: IndentWriter => Unit)(implicit printer: IndentWriter) =
    Using.resource(printer.begin(str))(indentWriter => f(indentWriter))
  def out(str: String)(implicit printer: IndentWriter) = printer.out(str)
  def outln(str: String = "")(implicit printer: IndentWriter) = printer.outln(str)
  def end()(implicit printer: IndentWriter) = printer.end()

}
