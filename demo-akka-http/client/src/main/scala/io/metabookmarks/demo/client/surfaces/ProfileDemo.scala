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

import js.Dynamic.{literal => CSS}

/**
object ReactTestEvent {
  @js.native
  @JSImport("@material-ui/core", JSImport.Default)
  object Module extends js.Any {
    @js.native
    object makeStyles extends js.Object
  }
  def makeStyles[A] = Module.makeStyles.asInstanceOf[js.Function1[js.Object, js.Function0[A]]]

  def mk[A](css: js.Dynamic) =
    makeStyles[A]((theme: js.Object) => css)

  def mk[A](t1: (String, js.Dynamic)) =
    makeStyles[A]((theme: js.Object) => js.Dynamic.literal(t1._1 -> t1._2))
  def mk[A](t1: (String, js.Dynamic), t2: (String, js.Dynamic)) =
    makeStyles[A]((theme: js.Object) => js.Dynamic.literal(t1._1 -> t1._2, t2._1 -> t2._2))

}
**/

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
