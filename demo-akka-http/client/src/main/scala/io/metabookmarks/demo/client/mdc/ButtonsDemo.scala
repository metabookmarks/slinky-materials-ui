package io.metabookmarks.demo.client.mdc

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.web.html._

@react class ButtonsDemo extends StatelessComponent {

  type Props = Unit

  def render(): ReactElement =
    div(
      div(className := "mdc-touch-target-wrapper")(
        button(className := "mdc-button mdc-button--touch")(
          div(className := "mdc-button__ripple"),
          span(className := "mdc-button__label")("My Accessible Button"),
          div(className := "mdc-button__touch")
        )
      ),
      button(className := "mdc-button")(
        div(className := "mdc-button__ripple"),
        i(className := "material-icons mdc-button__icon", aria - "hidden" := "true")("bookmark"),
        span(className := "mdc-button__label")("Text Button plus icon")
      )
    )

}
