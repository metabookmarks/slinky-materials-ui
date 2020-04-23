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
import slinky.core.ReactComponentClass._
import org.scalajs.dom.raw.Event
import io.metabookmarks.demo.client.DialogDemo
import io.metabookmarks.demo.client.FormDemo

import org.scalajs.dom.raw.DataTransfer
import io.metabookmarks.demo.client.ChipsDemo
import slinky.materialui.core._
import slinky.materialui.date._
import slinky.materialui.pickers._
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.annotation.JSGlobal
import scala.scalajs.js.annotation.JSGlobalScope
import slinky.web.svg.format
import slinky.core.facade.React
import slinky.core.facade.Hooks._
import slinky.core.FunctionalComponent
import io.metabookmarks.demo.client.BreadcrumbsDemo
import slinky.materialui.icons.DeleteIcon
import io.metabookmarks.demo.client.mdc.ButtonsDemo
import io.metabookmarks.demo.client.mdc.ProgressDemo
import io.metabookmarks.demo.client.DatePickerDemo
import io.metabookmarks.demo.client.SwitchDemo

object MDCKitchen {

  import js.JSConverters._
  def main(args: Array[String]): Unit =
    Option(dom.document.getElementById("here")).foreach { container =>
      import Drawer._
      ReactDOM.render(
        Drawer(
          title = "MyApp",
          items = List(
            "Home" icon "home" href "/",
            "Buttons" icon "widgets" content ButtonsDemo(),
            "Dialog" icon "dashboard" content DialogDemo(),
            //          "Chips" icon "widgets" content ChipsDemo(),
            "Breadcrumb" icon "widgets" content BreadcrumbsDemo(),
            "Progress" icon "refresh" content ProgressDemo(),
            "Dialog" icon "widgets" content DialogDemo(),
            "Date Picker" icon "widgets" content DatePickerDemo(date = new js.Date(1971, 3, 22))
          ),
          Some(
            //SwitchDemo(ok1 = true, ok2 = false)
            DialogDemo()
          )
        ),
        container
      )

    }
}
