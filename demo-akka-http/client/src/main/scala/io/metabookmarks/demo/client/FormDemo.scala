package io.metabookmarks.demo.client

import slinky.core.annotations.react

import slinky.core.SyntheticEvent
import org.scalajs.dom.html
import org.scalajs.dom.raw.Event
import slinky.web.html._
import slinky.core.facade.ReactElement
import slinky.core.Component

@react class FormDemo extends Component {
  case class Props(name: String)
  case class State(title: String, firstname: String, lastname: String)

  def handleSelect(e: SyntheticEvent[html.Select, Event]): Unit = {
    val selectedValue = e.target.value
    setState(_.copy(title = selectedValue))
  }

  def handleChange(e: SyntheticEvent[html.Input, Event]): Unit = {
    val eventValue = e.target.value
    e.target.name match {
      case "firstname" =>
        setState(_.copy(firstname = eventValue))
      case "lastname" =>
        setState(_.copy(lastname = eventValue))

    }
  }

  def handleSubmit(e: SyntheticEvent[html.Form, Event]): Unit = {
    e.preventDefault()

    println(state)

  }

  def render(): ReactElement =
    div(
      h1(props.name),
      form(onSubmit := (handleSubmit(_)))(
        select(name := "title", onChange := (handleSelect(_)))(
          option(value := "Mme")("Mme"),
          option(value := "M")("M")
        ),
        input(name := "firstname", onChange := (handleChange(_)), value := state.firstname),
        input(name := "lastname", onChange := (handleChange(_)), value := state.lastname),
        input(`type` := "submit")
      )
    )

  def initialState: State = State(title = "Mme", firstname = "Agnès", lastname = "MERESSE")
}
