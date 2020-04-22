package io.metabookmarks.demo.client

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import io.metabookmarks.slinky.mdc._

import slinky.web.html._
import org.scalajs.dom.raw.DataTransfer
import slinky.materialui.core._
@react class BreadcrumbsDemo extends StatelessComponent {
  type Props = Unit

  def render =
    Breadcrumbs(separator = " 🍎 ")(
      CircularProgress(),
      Link(href = "/", onClick = e => println("One"))("aa"),
      Link(href = "/", onClick = e => ())("bb"),
      Link(href = "/", onClick = e => ())("cc")
    )
}
