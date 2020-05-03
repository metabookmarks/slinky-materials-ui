package io.metabookmarks.demo.client.surfaces

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.core.facade.ReactElement

import slinky.web.html._
import slinky.materialui.core._
@react class CardDemo extends StatelessComponent {
  type Props = Unit

  def render(): ReactElement =
    Grid(container = true, wrap = Wrap.wrap)(
      (1 to 3).map(i =>
        Grid(key = s"k$i", item = true, sm = Size.`2`)(
          Card(
            CardActionArea(
              CardMedia(
                src = "/assets/img/burgers.jpg",
                title = "Click me"
              )
            ),
            CardContent(span("Coucou"))
          )
        )
      )
    )

}
