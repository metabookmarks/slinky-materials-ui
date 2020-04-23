package io.metabookmarks.demo

import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.materialui.core._

import slinky.core.annotations.react
import slinky.web.html._
@react class GridListDemo extends StatelessComponent {

  type Props = Unit

  def render(): ReactElement = GridList(
    GridListTile("a")(id := "111")(
      img(id := "oo", src := "/assets/img/burgers.jpg"),
      GridListTileBar(
        title = "test",
        subtitle = "subtest"
      )
    ),
    GridListTile(key = "112")("Test"),
    GridListTile(key = "113")("Test"),
    GridListTile(key = "114")("Test")
  )

}
