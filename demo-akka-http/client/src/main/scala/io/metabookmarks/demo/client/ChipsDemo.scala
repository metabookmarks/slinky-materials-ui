package io.metabookmarks.demo.client

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import io.metabookmarks.slinky.mdc._

import slinky.web.html._
import org.scalajs.dom.raw.DataTransfer
@react class ChipsDemo extends StatelessComponent {
  type Props = Unit

  def render() =
    Chips(
      List("one", "two", "three", "four"),
      new EventManager {

        override def onClick(key: String): Unit = println(s"$key clicked")

        override def onStart(dataTransfer: DataTransfer, key: String): Unit = {
          println(s"start on $key")
          dataTransfer.setData("from", key)
        }

        override def onDrop(dataTransfer: DataTransfer, key: String): Unit = {
          val from = dataTransfer.getData("from")
          println(s"drop $from on $key")
        }

      }
    )
}
