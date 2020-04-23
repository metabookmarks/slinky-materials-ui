package slinky.generator

import org.slf4j.LoggerFactory
import java.io.File
import java.io.PrintWriter

case class Config(output: File = new File("target/"), modules: List[File] = List.empty)

trait Utils {
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

  def out(str: String)(implicit printer: PrintWriter) = printer.print(str.stripMargin)
  def outln(str: String = "")(implicit printer: PrintWriter) = printer.println(str.stripMargin)

}
