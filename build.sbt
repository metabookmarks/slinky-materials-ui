enablePlugins(ScalaJSPlugin)


name := "Scala.js Slinky Material UI"
inThisBuild(
  List(
    scalaVersion := "2.13.1",
    scalafmtOnCompile := true,
    organization := "io.metabookmarks",
    scalacOptions ++= Seq("-deprecation", "-feature", "-Xfatal-warnings", "-Ymacro-annotations")
  )
)


lazy val slinkyMaterial = project
  .in(file("."))
  .aggregate(
    core,
    server,
    client,
    sharedJs,
    sharedJvm
  )
  .settings(
    publish := {},
    publishLocal := {}
  )

val slinkyVersion = "0.6.5"

lazy val core = project
  .enablePlugins(ScalaJSPlugin)
  .in(file("core"))
  .settings(
    libraryDependencies ++= Seq(
        "org.scala-js" %%% "scalajs-dom" % "1.0.0",
        "me.shadaj" %%% "slinky-core" % slinkyVersion, // core React functionality, no React DOM
        "me.shadaj" %%% "slinky-web" % slinkyVersion
      ),
    normalizedName := "slinky-material-ui"
  )

lazy val server = project
  .in(file("demo-akka-http/server"))
  .enablePlugins(SbtWeb, SbtTwirl, JavaAppPackaging, WebScalaJSBundlerPlugin)
  .settings(commonSettings)
  .settings(
    scalaJSProjects := Seq(client),
    pipelineStages in Assets := Seq(scalaJSPipeline),
    npmAssets ++= NpmAssets
        .ofProject(`client`)(modules => (modules / "material-components-web" ).allPaths)
        .value,
    // triggers scalaJSPipeline when using compile or continuous compilation
    compile in Compile := ((compile in Compile) dependsOn scalaJSPipeline).value,
    libraryDependencies ++= Seq(
        "com.typesafe.akka" %% "akka-http" % "10.1.11",
        "com.typesafe.akka" %% "akka-stream" % "2.6.3",
        "com.vmunier" %% "scalajs-scripts" % "1.1.4"
      ),
    WebKeys.packagePrefix in Assets := "public/",
    managedClasspath in Runtime += (packageBin in Assets).value,
    // Compile the project before generating Eclipse files, so that generated .scala or .class files for Twirl templates are present
    EclipseKeys.preTasks := Seq(compile in Compile)
  )
  .dependsOn(sharedJvm, client)
  .settings(
    publish := {},
    publishLocal := {}
  )

lazy val client = project
  .in(file("demo-akka-http/client"))
  .settings(commonSettings)
  .settings(
    scalaJSUseMainModuleInitializer := true,
    libraryDependencies ++= Seq(
        "org.scala-js" %%% "scalajs-dom" % "1.0.0"
      ),
    Compile / npmDependencies += "material-components-web" -> "6.0.0-canary.4b04cdb0f.0",
    Compile / npmDependencies += "react" -> "16.12.0",
    Compile / npmDependencies += "react-dom" -> "16.12.0"
  )
  .enablePlugins(ScalaJSPlugin, ScalaJSWeb, ScalaJSBundlerPlugin)
  .settings(scalacOptions := Seq("-deprecation", "-feature", "-Xfatal-warnings", "-Ymacro-annotations"))
  .dependsOn(sharedJs, core)
  .settings(
    publish := {},
    publishLocal := {}
  )

lazy val shared = crossProject(JSPlatform, JVMPlatform)
  .crossType(CrossType.Pure)
  .in(file("demo-akka-http/shared"))
  .settings(commonSettings)
  .settings(
    publish := {},
    publishLocal := {}
  )
lazy val sharedJvm = shared.jvm
lazy val sharedJs = shared.js

lazy val commonSettings = Seq(
  scalaVersion := "2.13.1",
  organization := "com.example"
)

Global / cancelable := true
fork in Global := true
// loads the server project at sbt startup
//onLoad in Global := (onLoad in Global).value.andThen(state => "project server" :: state)
