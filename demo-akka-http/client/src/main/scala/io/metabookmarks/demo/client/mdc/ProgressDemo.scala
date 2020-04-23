package io.metabookmarks.demo.client.mdc

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.web.html._
import slinky.web.svg
import slinky.core.CustomAttribute
@react class ProgressDemo extends StatelessComponent {

  val xmlns = CustomAttribute[String]("xmlns")

  type Props = Unit

  def render(): ReactElement =
    div(
      className := "mdc-circular-progress mdc-circular-progress--large",
      role := "progressbar",
      aria - "label" := "Example Progress Bar",
      aria - "valuemin" := "0",
      aria - "valuemax" := "1"
    )(
      div(className := "mdc-circular-progress__determinate-container")(
        svg.svg(svg.className := "mdc-circular-progress__determinate-circle-graphic",
                svg.viewBox := "0 0 48 48",
                xmlns := "http://www.w3.org/2000/svg")(
          svg.circle(
            svg.className := "mdc-circular-progress__determinate-circle",
            svg.cx := 24,
            svg.cy := 24,
            svg.r := 18,
            svg.strokeDasharray := "113.097",
            svg.strokeDashoffset := "113.097"
          )
        ),
        div(className := "mdc-circular-progress__indeterminate-container")(
          div(className := "mdc-circular-progress__spinner-layer")(
            div(className := "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left")(
              svg.svg(svg.className := "mdc-circular-progress__indeterminate-circle-graphic",
                      svg.viewBox := "0 0 48 48",
                      xmlns := "http://www.w3.org/2000/svg")(
                svg.circle(svg.cx := 24,
                           svg.cy := 24,
                           svg.r := 18,
                           svg.strokeDasharray := "113.097",
                           svg.strokeDashoffset := "56.549")
              ),
              div(className := "mdc-circular-progress__gap-patch")(
                svg.svg(svg.className := "mdc-circular-progress__indeterminate-circle-graphic",
                        svg.viewBox := "0 0 48 48",
                        xmlns := "http://www.w3.org/2000/svg")(
                  svg.circle(svg.cx := 24,
                             svg.cy := 24,
                             svg.r := 18,
                             svg.strokeDasharray := "113.097",
                             svg.strokeDashoffset := "56.549")
                ),
                div(className := "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right")(
                  svg.svg(svg.className := "mdc-circular-progress__indeterminate-circle-graphic",
                          svg.viewBox := "0 0 48 48",
                          xmlns := "http://www.w3.org/2000/svg")(
                    svg.circle(svg.cx := 24,
                               svg.cy := 24,
                               svg.r := 18,
                               svg.strokeDasharray := "113.097",
                               svg.strokeDashoffset := "56.549")
                  )
                )
              )
            )
          )
        )
      )
    )

}
