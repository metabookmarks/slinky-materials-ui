package io.metabookmarks.demo.client.surfaces

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.core.facade.ReactElement

import slinky.web.html._
import slinky.materialui.core._
import scalajs.js
import scala.scalajs.js.annotation.JSImport

object ReactTestEvent {
  @js.native
  @JSImport("@material-ui/core", JSImport.Default)
  object Module extends js.Any {
    @js.native
    object makeStyles extends js.Object
  }
  val makeStyles = Module.makeStyles.asInstanceOf[js.Function1[js.Object, js.Object]]
}

@react class CardDemo extends StatelessComponent {
  type Props = Unit

  def render(): ReactElement = {
    println(ReactTestEvent.Module.makeStyles)
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
}
