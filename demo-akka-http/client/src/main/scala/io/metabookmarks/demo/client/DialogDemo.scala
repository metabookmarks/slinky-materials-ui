package io.metabookmarks.demo.client

import slinky.core.annotations.react
import slinky.core._
import slinky.core.facade.Hooks._

import slinky.web.html._
import slinky.materialui.core._
import slinky.core.FunctionalComponent
import scalajs.js
import org.scalajs.dom.html
import org.scalajs.dom.raw.Event
@react class DialogDemo extends Component {

  type Props = Unit

  case class State(open: Boolean, snackOpen: Boolean)

  @react object SimpleDialog {
    case class Props(name: String, ok1: Boolean = false, ok2: Boolean = false, folder: String = "")

    val component = FunctionalComponent[Props] { props =>
      val (open, setOpen) = useState(true)

      val (clicked1, setClicked1) = useState(props.ok1)
      val (clicked2, setClicked2) = useState(props.ok2)
      val (folder, setFolder) = useState(props.folder)
      val (description, setDescription) = useState("")

      def post(event: SyntheticEvent[html.Input, Event]): Unit = {
        println(s"$clicked1, $folder, $description")
        setState(st => st.copy(open = false))
      }

      Dialog(open = open)(
        DialogTitle(id = "mydiag")(span(s"Hello $folder")),
        DialogContent(
          FormControl(
            GridContainer(spacing = 3)(
              // Grid(sm = Size.`12`, item = true)(
              //   div(s"${clicked1} && ${clicked2}"),
              //   div(description)
              // ),
              GridItem(sm = Size.`2`)(
                Button(onClick = e => post(e))(span("Create"))
              ),
              GridItem(sm = Size.`2`)(
                FormGroup(
                  FormControlLabel(label = "Public",
                                   control = Switch(name = "public",
                                                    checked = clicked1,
                                                    onChange = e => setClicked1(e.target.checked)
                                   )
                  )
                )
              ),
              GridItem(sm = Size.`8`)(
                TextField(id = "folder", fullWidth = true, onChange = e => setFolder(e.target.value))
              ),
              GridItem(sm = Size.`12`)(
                TextField(id = "description",
                          fullWidth = true,
                          multiline = true,
                          onChange = e => setDescription(e.target.value)
                )
              )
            )
          )
        )
      )
    }
  }

  def render() =
    div(
      if (state.open) Some(SimpleDialog(name = "zozo")) else None,
      div(Button(onClick = e => setState(st => st.copy(open = true)))(span("Helo"))),
      if (state.snackOpen)
        Some(
          Snackbar(open = state.snackOpen,
                   message = "yo",
                   autoHideDuration = 5000,
                   onClose = () => setState(st => st.copy(snackOpen = false))
          )
        )
      else None,
      div(Button(onClick = e => setState(st => st.copy(snackOpen = true)))(span("snack")))
    )
  def initialState: State = State(false, false)
}
