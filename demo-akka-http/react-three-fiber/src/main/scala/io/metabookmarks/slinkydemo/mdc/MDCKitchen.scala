package io.metabookmarks.demo

import com.example.akkahttpscalajs.shared.SharedMessages
import org.scalajs.dom
import org.scalajs.dom.html
import scalajs.js
import slinky.core.annotations.react
import slinky.core.StatelessComponent

import slinky.web.ReactDOM
import slinky.web.html._
import slinky.core.Component
import slinky.core.facade.ReactElement
import slinky.core.SyntheticEvent
import slinky.core.ReactComponentClass._
import org.scalajs.dom.raw.Event

import org.scalajs.dom.raw.DataTransfer
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.annotation.JSGlobal
import scala.scalajs.js.annotation.JSGlobalScope
import slinky.web.svg.format
import slinky.core.facade.React
import slinky.core.facade.Hooks._
import slinky.core.FunctionalComponent
import slinky.threefiber.threeFiber.Canvas


@react object ThreeFiber {
  case class Props(i: Int)

  val component = FunctionalComponent[Props]{ props =>

    Canvas()

  }
}


object MDCKitchen {

  def main(args: Array[String]): Unit =
    Option(dom.document.getElementById("here")).foreach{
      container => 
        ReactDOM.render(ThreeFiber(1), container)
    }
}
