package io.metabookmarks.slinky

import slinky.core.facade.ReactElement
import org.scalajs.dom.document
import slinky.web.ReactDOM
import org.scalajs.dom.raw.Element

object RenderElement {
  def temporary(content: Element => ReactElement): Unit = {
    val container = document.createElement("div")
    document.body.appendChild(container)
    ReactDOM.render(content(container), container)
  }
}
