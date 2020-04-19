package io.metabookmarks.demo

import com.example.akkahttpscalajs.shared.SharedMessages
import org.scalajs.dom
import org.scalajs.dom.html
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

object MDCKitchen {

  def main(args: Array[String]): Unit =
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
            "Dialog" icon "widgets" content DialogDemo(name = "zozo")
          ),
          Some(
            Button(color = "secondary", disabled = true)("Default button")
            //          KeyboardDatePicker(value = "03/22/1971")
          )
        ),
        container
      )

    }
}
