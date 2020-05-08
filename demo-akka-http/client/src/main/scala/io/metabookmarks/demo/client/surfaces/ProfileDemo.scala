package io.metabookmarks.demo.client.surfaces

import slinky.core.annotations.react
import slinky.core.StatelessComponent
import slinky.core.facade.ReactElement
import slinky.core.facade.ReactElement

import slinky.web.html._
import slinky.materialui.core._
import scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.metabookmarks.demo.shared.User
import slinky.core.FunctionalComponent

object ReactTestEvent {
  @js.native
  @JSImport("@material-ui/core", JSImport.Default)
  object Module extends js.Any {
    @js.native
    object makeStyles extends js.Object
  }
  def makeStyles[A] = Module.makeStyles.asInstanceOf[js.Function1[js.Object, js.Function0[A]]]
}

@js.native
trait Styles extends js.Object {
  val root: String = js.native
}

@react object ProfileDemo {
  case class Props(user: User)

  val useStyles = ReactTestEvent.makeStyles[Styles]((theme: js.Object) =>
    js.Dynamic.literal("root" -> js.Dynamic.literal("flexGrow" -> 1))
  )

  val component = FunctionalComponent[Props] { props =>
    val styles: Styles = useStyles()

    println(styles.root)

    div(className := styles.root)(
      Grid(container = true, wrap = Wrap.wrap, alignItems = Align.stretch, alignContent = Align.stretch)(
        Grid(key = s"photo", item = true)(
          Paper(img(src := props.user.avatarURL))
        ),
        Grid(key = s"gen", item = true)(
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
