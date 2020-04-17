package io.metabookmarks.slinky.mdc

import slinky.core.annotations.react
import slinky.core.Component
import slinky.core.facade.ReactElement
import slinky.web.html._
import org.scalajs.dom.document
import slinky.core.StatelessComponent
import slinky.core.facade.Fragment
import slinky.core.BuildingComponent

import slinky.web.ReactDOM
import org.scalajs.dom.raw.Element

@react class Drawer extends Component {

  case class Props(title: String, items: List[MenuItem], welcome: ReactElement = None)

  case class State(open: Boolean, section: String, content: ReactElement)

  private def toogleDrawer(): Unit =
    setState(st => st.copy(open = !st.open))

  private def openClassName = if (state.open) " mdc-drawer--open" else ""

  private def menuItem(item: MenuItem) = item match {
    case MenuURLItem(label, icon, url) =>
      a(className := "mdc-list-item", href := url, key := label)(
        i(className := "material-icons mdc-list-item__start-detail", aria - "hidden" := "true")(icon),
        label
      )
    case MenuContentItem(label, icon, element) =>
      a(className := "mdc-list-item", onClick := (_ => {
          setState(_.copy(section = label, content = element()))
        }))(
        i(className := "material-icons mdc-list-item__start-detail", aria - "hidden" := "true")(icon),
        label
      )
  }

  def render(): ReactElement =
    div(className := "drawer-frame-root")(
      aside(className := s"mdc-drawer mdc-drawer--dismissible $openClassName")(
        div(className := "mdc-drawer__header")(
          h3(className := "mdc-drawer__title")(props.title),
          h6(className := "mdc-drawer__subtitle")("user.email")
        ),
        div(className := "mdc-drawer__content")(
          div(className := "mdc-list-group")(
            nav(className := "mdc-list")(
              props.items.map(i => menuItem(i)): _*
            ),
            hr(className := "mdc-list-divider")
          )
        )
      ),
      div(className := "mdc-drawer-app-content", id := "main-content")(
        header(className := "mdc-top-app-bar drawer-top-app-bar", id := "app-bar")(
          div(className := "mdc-top-app-bar__row")(
            section(className := "mdc-top-app-bar__section mdc-top-app-bar__section--align-start")(
              button(className := "demo-menu material-icons mdc-toolbar__menu-icon", onClick := (_ => toogleDrawer()))(
                "menu"
              ),
              span(className := "mdc-top-app-bar__title catalog-title")(state.section)
            )
          )
        ),
        main(className := "main-content")(
          div(className := "mdc-top-app-bar--fixed-adjust", id := "drawer-content")(state.content)
        )
      )
    )

  def initialState: State = State(false, props.title, props.welcome)
}

object Drawer {

  implicit class ItemHelper(label: String) {
    def icon(icon: String) = (label, icon)
  }

  implicit class ItemWithIconHelper(labelAndIcon: (String, String)) {
    def content(render: => ReactElement): MenuContentItem =
      MenuContentItem(labelAndIcon._1, labelAndIcon._2, () => render)
    def href(url: String): MenuURLItem = MenuURLItem(labelAndIcon._1, labelAndIcon._2, url)
  }

}

sealed trait MenuItem
case class MenuURLItem(label: String, icon: String, url: String) extends MenuItem
case class MenuContentItem(label: String, icon: String, render: () => ReactElement) extends MenuItem
