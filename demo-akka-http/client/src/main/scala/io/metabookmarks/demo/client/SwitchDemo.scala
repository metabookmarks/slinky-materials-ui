package io.metabookmarks.demo.client

import scalajs.js

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.core.FunctionalComponent

import slinky.core.facade.Hooks._
import slinky.materialui.pickers._
import slinky.materialui.date._
import slinky.materialui.core._
import org.scalajs.dom.raw.Event
import slinky.core.SyntheticEvent
import org.scalajs.dom.html
import slinky.web.html._
@react object SwitchDemo {

  type CheckedEvent = SyntheticEvent[html.Input, Event]

  case class Props(ok1: Boolean, ok2: Boolean)

  val component = FunctionalComponent[Props] { props =>
    val (clicked1, setClicked1) = useState(props.ok1)
    val (clicked2, setClicked2) = useState(props.ok2)

    GridList(
      GridListTile(key = "zero", cols = 2)(div(s"${clicked1} && ${clicked2}")),
      GridListTile("one")(
        FormControl(
          FormGroup(
            FormControlLabel(
              control = Switch(name = "coco", checked = clicked1, onChange = e => setClicked1(e.target.checked))
            ),
            FormControlLabel(
              control = Switch(name = "cocos", checked = clicked2, onChange = e => setClicked2(e.target.checked))(
                aria - "label" := "primary checkbox"
              )
            )
          )
        )
      )
    )
  }
}
