lazy val root = project.in(file(".")).
enablePlugins(ScalaJSPlugin)

name := "Scala.js Slinky Material UI"

crossScalaVersions in ThisBuild :=  Seq("2.12.10", "2.11.12", "2.13.1")

scalaVersion in ThisBuild := crossScalaVersions.value.head

val commonSettings = Seq(
  version := "0.0.1-SNAPSHOT",
  organization := "io.metabookmarks",
  scalacOptions ++= Seq("-deprecation", "-feature", "-Xfatal-warnings")
)

normalizedName := "slinky-material-ui"
