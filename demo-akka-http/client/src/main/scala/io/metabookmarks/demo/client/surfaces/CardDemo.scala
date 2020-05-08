package io.metabookmarks.demo.client.surfaces

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.core.facade.ReactElement

import slinky.web.html._
import slinky.materialui.core._
import scalajs.js
import scala.scalajs.js.annotation.JSImport
@react class CardDemo extends StatelessComponent {
  type Props = Unit

  def render(): ReactElement =
    Grid(container = true, wrap = Wrap.wrap, spacing = 2)(
      (1 to 12).map(i =>
        Grid(key = s"k$i", item = true, sm = Size.`2`)(
          Card(
            CardContent(
              Typography("iiz zizi zi ziz i ziziz izi ")
            )
          )
        )
      )
    )
}
