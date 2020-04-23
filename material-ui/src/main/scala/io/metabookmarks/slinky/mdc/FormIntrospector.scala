package io.metabookmarks.slinly.mdc

import org.scalajs.dom.document
import org.scalajs.dom.html
import slinky.web.ReactDOM
import org.scalajs.dom.ext.Ajax.InputData

object FormIntrospector {
  def toJson(formId: String): Unit =
    Option(document.getElementById(formId))
      .foreach { form =>
        val inputs = form.getElementsByTagName("input")
        for (i <- 0 until inputs.length) {
          val field = inputs.item(i)
          print(field.getAttribute("name"))
          print(": ")
          Option(field.getAttribute("type")) match {
            case None | Some("text") =>
              println("==>" + field.asInstanceOf[html.Input].value)
            case Some("checkbox") =>
              println("==>" + field.asInstanceOf[html.Input].checked)
            case _ =>
          }
        }
      }
}
