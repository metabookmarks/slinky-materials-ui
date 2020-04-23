package slinky.generator.model

case class Module(name: String,
                  parent: String,
                  npm: String,
                  enums: Option[List[Enum]],
                  elements: List[Element],
                  objects: Option[List[String]],
                  imports: Option[List[String]],
                  customAttributes: Option[List[CustomAttribute]]) {
  def pkg = s"$parent.$name"
}
case class CustomAttribute(name: String, symbol: Option[String], `type`: String)
case class Element(name: String, imports: Option[List[String]], inherits: Option[String], props: Option[List[String]]) {
  private def ucFirst(str: String) = str.take(1).toUpperCase().appendedAll(str.drop(1))
  def dom = s"${name}DOM"
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
case class Enum(name: String, values: List[String], typeAlias: Option[List[TypeAlias]]) extends EscapedValues {
  def escapedValues = escapeValues(values)
}
