package slinky.materialui

import scalajs.js
import slinky.readwrite.Writer

trait EnumWriter {
  implicit val writer: Writer[this.type] = { name => name.toString.asInstanceOf[js.Object] }
}
