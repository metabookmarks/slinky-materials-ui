package io.metabookmarks.slinky.mdc.progress

import slinky.core.annotations.react
import slinky.core.Component
import slinky.core.facade.ReactElement
import slinky.web.html._
import slinky.web.svg.{className => classNameSVG, role => roleSVG, aria => ariaSVG, _}
@react class CircurlarProgress extends Component {

  type Props = Unit

  case class State(running: Boolean)

  def initialState: State = State(true)

  def render(): ReactElement =
    div(
      span("----"),
      div(
        className := "mdc-circular-progress mdc-circular-progress--small",
        role := "progressbar",
        aria - "label" := "Example Progress Bar",
        aria - "valuemin" := "0",
        aria - "valuemax" := "1"
      )(
        div(className := "mdc-circular-progress__determinate-container")(
          svg(classNameSVG := "mdc-circular-progress__determinate-circle-graphic", viewBox := "0 0 24 24")(
            circle(classNameSVG := "mdc-circular-progress__determinate-circle",
                   cx := 12,
                   cy := 12,
                   r := 8.75,
                   strokeDasharray := "54.978",
                   strokeDashoffset := "54.978")
          )
        ),
        div(className := "mdc-circular-progress__indeterminate-container")(
          div(className := "mdc-circular-progress__spinner-layer")(
            div(className := "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left")(
              svg(classNameSVG := "mdc-circular-progress__indeterminate-circle-graphic", viewBox := "0 0 24 24")(
                circle(cx := 12, cy := 12, r := 8.75, strokeDasharray := "54.978", strokeDashoffset := "27.489")
              )
            ),
            div(className := "mdc-circular-progress__gap-patch")(
              svg(classNameSVG := "mdc-circular-progress__indeterminate-circle-graphic", viewBox := "0 0 24 24")(
                circle(cx := 12, cy := 12, r := 8.75, strokeDasharray := "54.978", strokeDashoffset := "27.489")
              )
            ),
            div(className := "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right")(
              svg(classNameSVG := "mdc-circular-progress__indeterminate-circle-graphic", viewBox := "0 0 24 24")(
                circle(cx := 12, cy := 12, r := 8.75, strokeDasharray := "54.978", strokeDashoffset := "27.489")
              )
            )
          )
        )
      ),
      span("++++")
    )

}
