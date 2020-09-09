package io.metabookmarks.demo.client.mdc

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.web.html._
import slinky.materialui.core._

@react class ButtonsDemo extends StatelessComponent {

  type Props = Unit

  def render(): ReactElement =
    ButtonGroup(disabled = false)(
      Button(onClick = e => println("one"))("One"),
      Button(onClick = e => println("two"))("Two")
    )
}
