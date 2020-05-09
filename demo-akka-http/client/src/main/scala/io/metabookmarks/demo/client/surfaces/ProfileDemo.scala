package io.metabookmarks.demo.client.surfaces

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement

import slinky.web.html._
import slinky.materialui.core._
import scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.metabookmarks.demo.shared.User
import slinky.core.FunctionalComponent

import js.Dynamic.{literal => CSS}

@js.native
trait Styles extends js.Object {
  val root: String = js.native
}

@react object ProfileDemo {
  case class Props(user: User)
  val useStyles = makeStyles[Styles](
    "root" -> CSS(
      "flexGrow" -> 1,
      "toto" -> 2
    ),
    "test" -> CSS("tata" -> "ooo")
  )

  val component = FunctionalComponent[Props] { props =>
    val styles: Styles = useStyles()

    div(className := styles.root)(
      GridContainer(wrap = Wrap.wrap, alignItems = Align.stretch, alignContent = Align.stretch)(
        GridItem(key = s"photo")(
          Paper(img(src := props.user.avatarURL))
        ),
        GridItem(key = s"gen")(
          Paper(
            CardContent(
              Typography(props.user.email),
              Typography(props.user.firstName),
              Typography(props.user.lastName)
            )
          )
        )
      )
    )
  }
}
