package slinky.generator

import org.slf4j.LoggerFactory
import java.io.File
import java.io.PrintWriter
import scala.util.Using
import java.nio.file.Files

trait Utils {
  val logger = LoggerFactory.getLogger(getClass())

  def begin(str: String)(f: IndentWriter => Unit)(implicit printer: IndentWriter) =
    Using.resource(printer.begin(str))(indentWriter => f(indentWriter))
  def out(str: String)(implicit printer: IndentWriter) = printer.out(str)
  def outln(str: String = "")(implicit printer: IndentWriter) = printer.outln(str)
  def end()(implicit printer: IndentWriter) = printer.end()

}
