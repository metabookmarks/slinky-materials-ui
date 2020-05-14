import ProjectDef._

enablePlugins(ScalaJSPlugin)

val slinkySourceMap =
  "-P:scalajs:mapSourceURI:file:/Users/chelebithil/projects/shadaj/slinky->https://raw.githubusercontent.com/shadaj/slinky/v0.6.5/slinky/"

val scala213 = "2.13.2"

name := "Scala.js Slinky Material UI"

val slinkyVersion = "0.6.5"

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
    server,
    client,
    `mdc-demo`,
    sharedJs,
    sharedJvm
  )
  .settings(
   skipPublishSettings
  )

lazy val librarySettings = Seq(
  scalacOptions ++= {
    val origVersion = version.value
    val githubVersion =
      if (origVersion.contains("-"))
        origVersion.split('-').last
      else
        s"v$origVersion"
    Seq(
      slinkySourceMap, {
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


lazy val generator = project
  .settings(
    libraryDependencies ++= Seq(
        "com.github.scopt" %% "scopt" % "3.7.1",
        "ch.qos.logback" % "logback-classic" % "1.2.3",
        "org.netbeans.external" % "org-apache-commons-codec" % "RELEASE113",
        "com.typesafe.scala-logging" %% "scala-logging" % "3.9.2",
        "com.github.pureconfig" %% "pureconfig" % "0.12.3"
      )
  )
  .settings(skipPublishSettings)

lazy val `material-components-web` = project
  .in(file("material-components-web"))
  .enablePlugins(ScalaJSBundlerPlugin)
  .settings(
    libraryDependencies ++= Seq(
        "org.scala-js" %%% "scalajs-dom" % "1.0.0",
        "me.shadaj" %%% "slinky-core" % slinkyVersion, // core React functionality, no React DOM
        "me.shadaj" %%% "slinky-web" % slinkyVersion
      ),
    normalizedName := "material-components-web"
  )
  .settings(
    librarySettings
  )
  .settings(
    Compile / npmDependencies += "material-components-web" -> "6.0.0",
    Compile / npmDependencies += "react" -> "16.13.1",
    Compile / npmDependencies += "react-dom" -> "16.13.1"
  )

lazy val `material-ui` = scalajsProject("material-ui")
  .settings(
    libraryDependencies ++= Seq(
        "org.scala-js" %%% "scalajs-dom" % "1.0.0",
        "me.shadaj" %%% "slinky-core" % slinkyVersion, // core React functionality, no React DOM
        "me.shadaj" %%% "slinky-web" % slinkyVersion
      ),
    normalizedName := "slinky-material-ui"
  )
  .settings(
    Compile / sourceGenerators += Def
        .taskDyn[Seq[File]] {
          val baseDir = baseDirectory.value
          val rootFolder = (Compile / sourceManaged).value / "slinky/material-ui"
          rootFolder.mkdirs()
          (generator / Compile / runMain)
            .toTask {
              Seq(
                "slinky.generator.ExtrernalComponent",
                "--target",
                target.value,
                "--src-managed",
                rootFolder,
                "--modulesPath",
                s"${baseDir.getAbsolutePath}/src/main/npm"
              ).mkString(" ", " ", "")
            }
            .map(_ => (rootFolder ** "*.scala").get)
        }
        .taskValue,
    Compile / packageSrc / mappings ++= {
      val base = (Compile / sourceManaged).value
      val files = (Compile / managedSources).value
      files.map(f => (f, f.relativeTo(base).get.getPath))
    },
    librarySettings
  )
  .settings(
    npmExtraArgs ++= Seq(
        "--registry=https://nexus.local/nexus/content/groups/npm-public/"
      ),
    Compile / npmDependencies += "material-components-web" -> "6.0.0",
    Compile / npmDependencies += "react" -> "16.13.1",
    Compile / npmDependencies += "react-dom" -> "16.13.1",
    Compile / npmDependencies += "@material-ui/icons" -> "4.9.1",
    Compile / npmDependencies += "@material-ui/core" -> "4.9.13",
    Compile / npmDependencies += "@material-ui/pickers" -> "3.2.10",
    Compile / npmDependencies += "@date-io/core" -> "1.3.6",
    Compile / npmDependencies += "@date-io/date-fns" -> "1.3.13",
    Compile / npmDependencies += "@date-io/dayjs" -> "1.3.13",
    Compile / npmDependencies += "dayjs" -> "1.8.24",
    Compile / npmDependencies += "date-fns" -> "2.12.0"
  )

lazy val server = project
  .in(file("demo-akka-http/server"))
  .enablePlugins(SbtWeb, SbtTwirl, JavaAppPackaging, WebScalaJSBundlerPlugin)
  .settings(
    scalaJSProjects := Seq(client, `mdc-demo`),
    pipelineStages in Assets := Seq(scalaJSPipeline),
    // triggers scalaJSPipeline when using compile or continuous compilation
    compile in Compile := ((compile in Compile) dependsOn scalaJSPipeline).value,
    libraryDependencies ++= Seq(
        "com.typesafe.akka" %% "akka-http" % "10.1.12",
        "com.typesafe.akka" %% "akka-stream" % "2.6.5",
        "com.vmunier" %% "scalajs-scripts" % "1.1.4"
      ),
    WebKeys.packagePrefix in Assets := "public/",
    managedClasspath in Runtime += (packageBin in Assets).value,
    // Compile the project before generating Eclipse files, so that generated .scala or .class files for Twirl templates are present
    EclipseKeys.preTasks := Seq(compile in Compile)
  )
  .dependsOn(sharedJvm, client)
  .settings(skipPublishSettings)

val skipPublishSettings = Seq(
   publish := {},
   publishLocal := {}
)

def npmNexus =
  sys.env
    .get("NEXUS")
    .map(url =>
      npmExtraArgs ++= Seq(
          s"--registry=$url/repository/npm-public/"
        )
    )
    .toSeq

lazy val client = demoProject("client")
  .dependsOn(sharedJs, `material-ui`)

lazy val `mdc-demo` = demoProject("mdc-demo")
  .dependsOn(sharedJs, `material-components-web`)

lazy val shared = crossProject(JSPlatform, JVMPlatform)
  .crossType(CrossType.Pure)
  .in(file("demo-akka-http/shared"))
  settings(skipPublishSettings)

lazy val sharedJvm = shared.jvm
lazy val sharedJs = shared.js

Global / cancelable := true
fork in Global := true

def scalajsProject(projectId: String, baseDir: String = "."): Project =
  Project(id = projectId, base = file(s"$baseDir/$projectId"))
    .enablePlugins(ScalaJSBundlerPlugin)
    .settings(scalacOptions := Seq("-deprecation", "-feature", "-Xfatal-warnings", "-Ymacro-annotations"))
    .settings(npmNexus)

def demoProject(projectId: String): Project =
  scalajsProject(projectId, "demo-akka-http")
    .settings(
      scalaJSUseMainModuleInitializer := true
    )
    .settings(
      scalacOptions += slinkySourceMap
    )
    settings(skipPublishSettings)
