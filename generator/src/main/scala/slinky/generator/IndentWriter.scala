package slinky.generator

import java.io.PrintWriter
import java.io.Closeable

case class IndentWriter(writer: PrintWriter, depth: Int = 0) extends Closeable {

  def indent(str: String) = {
    writer.print("  " * depth)
    writer.append(str.stripMargin)
    this
  }

  def begin(str: String): IndentWriter = {
    indent(str)
    writer.println(" {")
    copy(depth = depth + 1)
  }

  def out(str: String) =
    indent(str)

  def outln(str: String = "") = {
    indent(str)
    writer.println()
    this
  }

  def end(): IndentWriter =
    copy(depth = depth - 1)
      .outln("}")
  def close() =
    if (depth == 0)
      writer.close()
    else
      end()

}
