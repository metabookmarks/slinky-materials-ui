package io.metabookmarks.slinky.mdc

import org.scalajs.dom
import org.scalajs.dom.document

import slinky.core.annotations.react
import slinky.core.Component
import slinky.web.html._
import slinky.core.facade.ReactElement
import org.scalajs.dom.raw.Event
import slinky.core.StatelessComponent
import slinky.web.ReactDOM
import java.{util => ju}

import org.scalajs.dom.raw.Element
import slinky.core.WithAttrs

import scala.collection.mutable.Set
import slinky.core.SyntheticEvent
import org.scalajs.dom.raw.HTMLFormElement
import io.metabookmarks.slinly.mdc.FormIntrospector
import scala.scalajs.js.JSON

@react class Dialog extends StatelessComponent {

  case class Props(title: String, content: () => ReactElement, parent: Element)

  /**
   * Unmount component and remove container from body.
   */
  def onDismiss(): Unit = {
    ReactDOM.unmountComponentAtNode(props.parent)
    document.body.removeChild(props.parent)
  }

  def onAccept(): Unit = {
    ReactDOM.unmountComponentAtNode(props.parent)
    document.body.removeChild(props.parent)
  }

  private def openClassName = " mdc-dialog--open"
  def render(): ReactElement =
    div(className := s"mdc-dialog $openClassName")(
      div(className := "mdc-dialog__container")(
        div(
          className := "mdc-dialog__surface",
          role := "alertdialog",
          aria - "modal" := "true",
          aria - "labelledby" := "my-dialog-title",
          aria - "describedby" := "my-dialog-content"
        )(
          // <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
          h2(className := "mdc-dialog__title", id := "my-dialog-title")(props.title.trim()), //Rendering title
          div(className := "mdc-dialog__content", id := "my-dialog-content")(
            props.content()
          ), //Rendering content
          footer(className := "mdc-dialog__actions")(
            button(className := "mdc-button mdc-dialog__button",
                   data - "mdc-dialog-action" := "no",
                   onClick := (_ => onDismiss()))(
              div(className := "mdc-button__ripple"),
              span(className := "mdc-button__label")("No")
            ),
            button(className := "mdc-button mdc-dialog__button",
                   data - "mdc-dialog-action" := "yes",
                   onClick := (_ => onAccept()))(
              div(className := "mdc-button__ripple"),
              span(className := "mdc-button__label")("Yes")
            )
          )
        )
      ),
      div(className := "mdc-dialog__scrim")
    )

}

object Dialog {
  def open(
      title: String
  )(content: => ReactElement): Unit = {
    val container = document.createElement("div")
    document.body.appendChild(container)
    ReactDOM.render(Dialog(title = title, content = () => content, parent = container), container)
  }
}
