package io.metabookmarks.demo.client

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import io.metabookmarks.slinky.mdc._

import slinky.web.html._
@react class DialogDemo extends StatelessComponent {
  case class Props(name: String)

  def render =
    h1(
      s"Hello ${props.name}",
      button(
        onClick := (_ => Dialog.open(title = "Who are you")(FormDemo(name = "Identity")))
      )("Open dialog")
    )
}
