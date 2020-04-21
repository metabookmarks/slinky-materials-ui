package slinky.generator.model

case class Module(name: String, pkg: String, npm: String, elements: List[Element], imports: Option[List[String]]) {
  def dom = s"${name}DOM"
}
case class Element(name: String, `type`: Option[String], props: Option[List[String]])
