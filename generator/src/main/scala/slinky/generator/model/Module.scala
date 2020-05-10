package slinky.generator.model

case class Module(name: String,
                  parent: String,
                  npm: String,
                  enums: Option[List[Enum]],
                  objects: Option[List[String]],
                  functions: Option[List[Function]],
                  imports: Option[List[String]],
                  customAttributes: Option[List[CustomAttribute]],
                  elements: List[Element]
) {

  def pkg = s"$parent.$name"

  def mod = s"${name}Module"

}

case class Elements(
    enums: Option[List[Enum]],
    objects: Option[List[String]],
    functions: Option[List[Function]],
    imports: Option[List[String]],
    customAttributes: Option[List[CustomAttribute]],
    elements: List[Element]
)

case class Function(name: String, args: List[String], partials: Option[Int]) {

  def scala(mod: String) =
    s"def $name[A] = $mod.$name.asInstanceOf[js.Function${args.size}[${args.map(_ => "js.Object").mkString(", ")}, js.Function0[A]]]"

}
case class CustomAttribute(name: String, symbol: Option[String], `type`: String)

case class Element(name: String,
                   splitted: Option[List[Element]],
                   wrap: Option[String],
                   imports: Option[List[String]],
                   props: Option[List[String]]
) {

  private def ucFirst(str: String) = str.take(1).toUpperCase().appendedAll(str.drop(1))

  def merge(orig: Element, split: Element): Element =
    split.copy(
      name = split.name,
      imports = Option(List(orig.imports.getOrElse(Seq.empty), split.imports.getOrElse(Seq.empty)).flatten),
      wrap = split.wrap.orElse(orig.wrap),
      props = Option(List(orig.props.getOrElse(Seq.empty), split.props.getOrElse(Seq.empty)).flatten)
    )

  def components =
    splitted match {
      case None => Seq(this)
      case Some(splits) => splits.map(split => merge(this, split))
    }

  def dom = s"${name}DOM"

  def baseClass: String = {
    val noProps = if (props.isEmpty) "NoProps" else ""
    val withAttrs = wrap
      .map {
        case "" => ""
        case a => s"[$a.tag.type]"
      }
      .map(a => s"WithAttributes$a")
      .getOrElse("")
    s"ExternalComponent$noProps$withAttrs"
  }
}

trait EscapedValues {

  def escapeValues(values: List[String]) =
    values.map {
      case value @ ("true" | "false") =>
        s"`$value`"
      case value if value.contains("-") =>
        s"`$value`"
      case value if value.matches(raw"^\d.*") =>
        s"`$value`"
      case value =>
        value
    }
}

case class TypeAlias(name: String, values: Option[List[String]], writer: Option[String]) extends EscapedValues {
  def escapedValues = values.map(escapeValues)
}
case class Enum(name: String, values: List[String], typeAlias: List[TypeAlias]) extends EscapedValues {
  def escapedValues = escapeValues(values)
}
