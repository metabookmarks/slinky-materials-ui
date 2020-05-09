package io.metabookmarks.demo.client

import scalajs.js

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.web.html._
import slinky.core.FunctionalComponent

import slinky.core.facade.Hooks._
import slinky.materialui.pickers._
import slinky.materialui.date._
import slinky.materialui.core._
@react object DatePickerDemo {
  case class Props(date: js.Date)

  val component = FunctionalComponent[Props] { props =>
    val (date, setDate) = useState(props.date)

    MuiPickersUtilsProvider(utils = DateFnsUtils)(
      Grid(container = true, alignContent = Align.`space-between`)(
        Grid(xs = Size.`12`)(
          KeyboardDatePicker(value = date, format = "MM/dd/yyyy", label = "day", onChange = setDate)
        )
      )
    )
  }
}
