package slinky.generator

import java.nio.file.FileVisitor
import scala.collection.mutable
import java.nio.file.SimpleFileVisitor
import java.nio.file.Path
import java.io.File
import java.nio.file.FileVisitResult
import java.nio.file.attribute.BasicFileAttributes
import com.typesafe.scalalogging.LazyLogging
import java.nio.file.Files

class ModuleFinder extends SimpleFileVisitor[Path] with LazyLogging {

  private var moduleFiles = List.empty[Path]

  def modules: List[File] = moduleFiles.map(_.toFile())

  override def visitFile(file: Path, attrs: BasicFileAttributes): FileVisitResult = {

    moduleFiles = moduleFiles :+ file

    FileVisitResult.CONTINUE
  }

  override def preVisitDirectory(dir: Path, attrs: BasicFileAttributes): FileVisitResult =
    if (Files.exists(dir.resolveSibling(s"${dir.getFileName.toString}.json")))
      FileVisitResult.SKIP_SUBTREE
    else FileVisitResult.CONTINUE

}
