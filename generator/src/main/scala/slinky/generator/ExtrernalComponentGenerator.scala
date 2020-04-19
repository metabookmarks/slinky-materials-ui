package slinky.generator

import java.io.PrintWriter
import java.io.File
import java.nio.file.Files
import java.nio.file.Paths
import java.net.URI

import io.circe.generic.auto._
import io.circe.parser._
import io.circe.jawn._

import slinky.generator.model.Element
import scala.io.Source

object ExtrernalComponentGenerator extends App {

  val zozo = new PrintWriter(new File("/tmp/zozogen.txt"))

  def zb(str: String): Unit = {
    zozo.append(s"$str\n")
    zozo.flush()

  }

  zb("PWD: " + System.getProperty("user.dir"))

  val npmModule :: components :: out :: pkg :: Nil = args.toList

  val componentsFile = Paths.get(URI.create(s"file:$components"))
  val outputFolder = Paths.get(URI.create(s"file:$out"))

  zb(components)
  zb(out)
  zb(pkg)

  decodeFile[List[Element]](componentsFile.toFile()) match {
    case Left(e) => zb(e.getMessage())
    case Right(elements) =>
      processElements(elements)
  }

  def processElements(elements: List[Element]): Unit = {
    val outFolder = new File(out)
    if (outFolder.mkdirs())
      zb("sys.exit(0)")

    val output = new PrintWriter(outputFolder.resolve("core.scala").toFile())

    output.println(s"""package $pkg
import scalajs.js
import scala.scalajs.js.annotation.JSImport
import slinky.core.annotations.react
import slinky.core.ExternalComponent
import org.scalajs.dom.raw.HTMLSpanElement
import slinky.web.SyntheticMouseEvent

@JSImport("$npmModule", JSImport.Default)
@js.native
object CoreDOM extends js.Object {""")
    elements.foreach(element => output.println(s"  val ${element.name}: js.Object = js.native"))
    output.println("}")

    output.println("package object core {")

    elements.foreach { element =>
      output.println(s"  @react object ${element.name} extends ExternalComponent {")
      if (element.props.isEmpty)
        output.println("    type Props = Unit")
      else {
        output.print("    case class Props(")
        output.print(element.props.mkString(", "))
        output.println(")")
      }
      output.println(s"    override val component = CoreDOM.${element.name}")
      output.println("  }")
    }
    output.println("}")
    output.close();

    def baseName() = "s"

  }
}
