package io.metabookmarks.slinky.mdc

import slinky.core.annotations.react

import slinky.core.facade.ReactElement
import slinky.core.Component
import org.scalajs.dom.html
import slinky.web.html._
import slinky.core.StatelessComponent
import org.scalajs.dom.raw.Event
import slinky.core.SyntheticEvent
import org.scalajs.dom.raw.DragEvent
import slinky.web.SyntheticMouseEvent
import org.scalajs.dom.raw.DataTransfer

trait EventManager {
  def onClick(key: String): Unit = ()
  def onStart(dataTransfer: DataTransfer, key: String): Unit = ()
  def onDrop(dataTransfer: DataTransfer, key: String): Unit = ()
}

@react class Chip extends StatelessComponent {
  case class Props(key: String, eventManager: EventManager)

  def render(): ReactElement =
    div(className := "mdc-chip", role := "row", key := props.key)(
      div(className := "mdc-chip__ripple"),
      span(role := "gridcell")(
        span(role := "button", tabIndex := 0, className := "mdc-chip__primary-action")(
          span(
            onClick := (e => props.eventManager.onClick(props.key)),
            draggable := "true",
            onDragStart := { e =>
              props.eventManager.onStart(e.nativeEvent.asInstanceOf[DragEvent].dataTransfer, props.key)
            },
            onDragOver := { e => e.preventDefault() },
            onDrop := { e =>
              props.eventManager.onDrop(e.nativeEvent.asInstanceOf[DragEvent].dataTransfer, props.key)
              e.preventDefault()
            },
            className := "mdc-chip__text"
          )(props.key)
        )
      )
    )
}

@react class Chips extends Component {
  case class Props(labels: List[String], eventManager: EventManager)
  case class State(paths: List[ReactElement])

  def initialState: State = State(props.labels.map(label => Chip(label, props.eventManager)))

  def render(): ReactElement =
    span(className := "mdc-chip-set", role := "grid")(
      span(
        state.paths: _*
      ),
      span(role := "grid", className := "material-icons")("add")
    )
}
