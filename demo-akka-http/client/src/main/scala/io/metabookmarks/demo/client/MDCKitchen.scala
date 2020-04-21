package io.metabookmarks.demo

import com.example.akkahttpscalajs.shared.SharedMessages
import org.scalajs.dom
import org.scalajs.dom.html
import scalajs.js
import slinky.core.annotations.react
import slinky.core.StatelessComponent
import io.metabookmarks.slinky.mdc._

import slinky.web.ReactDOM
import slinky.web.html._
import slinky.core.Component
import slinky.core.facade.ReactElement
import slinky.core.SyntheticEvent
import org.scalajs.dom.raw.Event
import io.metabookmarks.demo.client.DialogDemo
import io.metabookmarks.demo.client.FormDemo

import org.scalajs.dom.raw.DataTransfer
import io.metabookmarks.demo.client.ChipsDemo
import slinky.materialui.core._
//import slinky.materialui.date._
import slinky.materialui.pickers._
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.annotation.JSGlobal
import scala.scalajs.js.annotation.JSGlobalScope
import slinky.web.svg.format

object MDCKitchen {

  @js.native
  @JSImport("@date-io/date-fns", JSImport.Default)
  object DateFnsUtils extends js.Object

  def main(args: Array[String]): Unit =
//    println(s"=========> ${Globals.DateFnsUtils}")
    Option(dom.document.getElementById("here")).foreach { container =>
      import Drawer._
      ReactDOM.render(
        Drawer(
          title = "MyApp",
          items = List(
            "Home" icon "home" href "/",
            "Dashboard" icon "dashboard" href "/",
            "Chips" icon "widgets" content ChipsDemo(),
            "Progress" icon "refresh" content CircularProgress(),
            "Dialog" icon "widgets" content DialogDemo(name = "zozo"),
            "Date Picker" icon "widgets" content MuiPickersUtilsProvider(DateFnsUtils)(
              KeyboardDatePicker(value = "03/22/1971",
                                 format = "MM/dd/yyyy",
                                 label = "day",
                                 onChange = str => println(str))
            )
          ),
          Some(
            //  Button(color = "secondary", disabled = true)("Default button")
            CircularProgress()
          )
        ),
        container
      )

    }
}
