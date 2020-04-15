package com.example.akkahttpscalajs

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import com.typesafe.config.ConfigFactory

import scala.concurrent.ExecutionContext.Implicits.global

object WebServer {
  def main(args: Array[String]): Unit = {
    implicit val system = ActorSystem("server-system")

    val config = ConfigFactory.load()
    val interface = config.getString("http.interface")
    val port = config.getInt("http.port")

    val service = new WebService()

    val fut = Http().bindAndHandle(service.route, interface, port)

    fut.foreach { binding =>
      sys.addShutdownHook {

        binding.unbind()
      }
    }

    println(s"Server online at http://$interface:$port")
  }
}
