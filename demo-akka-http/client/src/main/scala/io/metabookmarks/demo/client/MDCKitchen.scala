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
import slinky.core.facade.React
import slinky.core.facade.Hooks._
import slinky.core.FunctionalComponent
import io.metabookmarks.demo.client.BreadcrumbsDemo

object MDCKitchen {

  @js.native
  @JSImport("@date-io/date-fns", JSImport.Default)
  object DateFnsUtils extends js.Object

  @react class Test extends Component {
    type Props = Unit
    case class State(date: js.Date)

    def render(): ReactElement = MuiPickersUtilsProvider(utils = DateFnsUtils)(
      div(span(s"${state.date}"),
          Grid(
            KeyboardDatePicker(value = state.date,
                               format = "MM/dd/yyyy",
                               label = "day",
                               onChange = d => setState(State(d)))
          ))
    )

    def initialState: State = State(new js.Date(1971, 3, 22))
  }

  @react object MyComponent {
    case class Props(date: js.Date)

    val component = FunctionalComponent[Props] { props =>
      val (date, setDate) = useState(props.date)

      MuiPickersUtilsProvider(utils = DateFnsUtils)(
        Grid(
          KeyboardDatePicker(value = date, format = "MM/dd/yyyy", label = "day", onChange = setDate)
        )
      )
    }
  }

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
            "Breadcrumb" icon "widgets" content BreadcrumbsDemo(),
            "Progress" icon "refresh" content CircularProgress(),
            "Dialog" icon "widgets" content DialogDemo(name = "zozo"),
            "Date Picker" icon "widgets" content MyComponent(date = new js.Date(1971, 3, 22))
          ),
          Some(
            Test()
          )
        ),
        container
      )

    }
}
