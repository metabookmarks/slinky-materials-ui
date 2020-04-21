enablePlugins(ScalaJSPlugin)

val scala212 = "2.12.10"
val scala213 = "2.13.1"

name := "Scala.js Slinky Material UI"
inThisBuild(
  List(
    scalaVersion := scala213,
    scalafmtOnCompile := true,
    organization := "io.metabookmarks",
    scalacOptions ++= Seq("-deprecation", "-feature", "-Xfatal-warnings", "-Ymacro-annotations")
  )
)

lazy val slinkyMaterial = project
  .in(file("."))
  .aggregate(
    generator,
    `material-ui`,
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

lazy val librarySettings = Seq(
  scalacOptions ++= {
    val origVersion = version.value
    val githubVersion = if (origVersion.contains("-")) {
      origVersion.split('-').last
    } else {
      s"v$origVersion"
    }
    Seq(
      {
        val a = "file:/Users/oliviernouguier/projects/shadaj/slinky"
        val g = "https://raw.githubusercontent.com/shadaj/slinky"
        s"-P:scalajs:mapSourceURI:$a->$g/v0.6.5/slinky/"
      }, {
        val a = baseDirectory.value.toURI
        val g = "https://raw.githubusercontent.com/metabookmarks/slinky-materials-ui"
        s"-P:scalajs:mapSourceURI:$a->$g/$githubVersion/${baseDirectory.value.getName}/"
      }
    )
  },
  scalacOptions --= Seq(
      "-Ywarn-unused:params",
      "-Ywarn-unused:patvars",
      "-Ywarn-dead-code",
      "-Xcheckinit",
      "-Wunused:params",
      "-Wunused:patvars",
      "-Wdead-code"
    )
)

lazy val crossScalaSettings = Seq(
  crossScalaVersions := Seq(scala212, scala213),
  Compile / unmanagedSourceDirectories += {
    val sourceDir = (Compile / sourceDirectory).value
    CrossVersion.partialVersion(scalaVersion.value) match {
      case Some((2, n)) if n >= 13 => sourceDir / "scala-2.13+"
      case _ => sourceDir / "scala-2.13-"
    }
  },
  Test / unmanagedSourceDirectories += {
    val sourceDir = (Test / sourceDirectory).value
    CrossVersion.partialVersion(scalaVersion.value) match {
      case Some((2, n)) if n >= 13 => sourceDir / "scala-2.13+"
      case _ => sourceDir / "scala-2.13-"
    }
  }
)

lazy val generator = project

lazy val `material-ui` = project
  .in(file("material-ui"))
  .enablePlugins(ScalaJSBundlerPlugin)
  .settings(
    Compile / sourceGenerators += Def
        .taskDyn[Seq[File]] {
          val baseDir = baseDirectory.value
          val rootFolder = (Compile / sourceManaged).value / "slinky/material-ui"
          rootFolder.mkdirs()

          val core = (generator / Compile / runMain)
            .toTask {
              Seq("slinky.generator.ExtrernalComponentGenerator",
                  (baseDir / "core.json").getAbsolutePath,
                  (rootFolder.getAbsolutePath))
                .mkString(" ", " ", "")
            }
            .map(_ => (rootFolder ** "*.scala").get)

          val pickers = (generator / Compile / runMain)
            .toTask {
              Seq("slinky.generator.ExtrernalComponentGenerator",
                  (baseDir / "pickers.json").getAbsolutePath,
                  (rootFolder.getAbsolutePath))
                .mkString(" ", " ", "")
            }
            .map(_ => (rootFolder ** "*.scala").get)

          val date = (generator / Compile / runMain)
            .toTask {
              Seq("slinky.generator.ExtrernalComponentGenerator",
                  (baseDir / "date.json").getAbsolutePath,
                  (rootFolder.getAbsolutePath))
                .mkString(" ", " ", "")
            }
            .map(_ => (rootFolder ** "*.scala").get)

          core
            .zip(pickers.zip(date))
            .flatMap {
              case (coreTask, (pickersTask, dateTask)) =>
                coreTask.flatMap { coreFiles =>
                  pickersTask.flatMap(pickersFiles => dateTask.map(files => files ++ pickersFiles ++ coreFiles))
                }
            }
        }
        .taskValue,
    Compile / packageSrc / mappings ++= {
      val base = (Compile / sourceManaged).value
      val files = (Compile / managedSources).value
      files.map(f => (f, f.relativeTo(base).get.getPath))
    },
    librarySettings,
    crossScalaSettings
  )
  .settings(
    libraryDependencies ++= Seq(
        "org.scala-js" %%% "scalajs-dom" % "1.0.0"
      ),
    Compile / npmDependencies += "material-components-web" -> "6.0.0-canary.4b04cdb0f.0",
    Compile / npmDependencies += "react" -> "16.13.1",
    Compile / npmDependencies += "react-dom" -> "16.13.1",
    Compile / npmDependencies += "@material-ui/core" -> "4.9.11",
    Compile / npmDependencies += "@material-ui/pickers" -> "3.2.10",
    Compile / npmDependencies += "@date-io/core" -> "1.3.6",
    Compile / npmDependencies += "@date-io/date-fns" -> "1.3.13",
    Compile / npmDependencies += "@date-io/dayjs" -> "1.3.13",
    Compile / npmDependencies += "dayjs" -> "1.8.24",
    Compile / npmDependencies += "date-fns" -> "2.12.0"
    /*    Compile / npmDevDependencies  += "html-webpack-plugin" -> "3.0.6",
    Compile / npmDevDependencies  += "webpack-merge" -> "4.1.2",
    Compile / npmDevDependencies  += "style-loader" -> "0.21.0",
    Compile / npmDevDependencies  +=  "css-loader" -> "0.28.11",
    Compile / npmDevDependencies  += "mini-css-extract-plugin" -> "0.4.0"
   */
  )
  .dependsOn(core)

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
    scalaJSProjects := Seq(client, `material-ui`),
    pipelineStages in Assets := Seq(scalaJSPipeline),
    // npmAssets ++= NpmAssets
    //     .ofProject(`client`)(modules => (modules / "@material-components-web").allPaths)
    //     .value ++  NpmAssets
    //     .ofProject(`client`)(modules => (modules / "@material-ui/core").allPaths)
    //     .value ++ NpmAssets
    //     .ofProject(`client`)(modules => (modules / "@material-ui/pickers").allPaths)
    //     .value  ++ NpmAssets
    //     .ofProject(`client`)(modules => (modules / "@date-io/date-fns").allPaths)
    //     .value ++ NpmAssets
    //     .ofProject(`client`)(modules => (modules / "date-fns").allPaths)
    //     .value ++ NpmAssets
    //     .ofProject(`client`)(modules => (modules / "@date-io/dayjs").allPaths)
    //     .value ,
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
  .enablePlugins(ScalaJSBundlerPlugin)
  .settings(commonSettings)
  .settings(scalacOptions := Seq("-deprecation", "-feature", "-Xfatal-warnings", "-Ymacro-annotations"))
  .settings(
    scalaJSUseMainModuleInitializer := true,
  )
  .dependsOn(sharedJs, `material-ui`)
  //   .settings(
  //     webpackBundlingMode in fastOptJS := BundlingMode.LibraryOnly(),
  //   webpackConfigFile in fastOptJS := Some(baseDirectory.value / "dev.config.js")
  // )
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
  organization := "io.metabookmarks"
)

Global / cancelable := true
fork in Global := true
// loads the server project at sbt startup
//onLoad in Global := (onLoad in Global).value.andThen(state => "project server" :: state)
