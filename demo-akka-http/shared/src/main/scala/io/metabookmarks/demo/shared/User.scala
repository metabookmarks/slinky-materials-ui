package io.metabookmarks.demo.shared

case class User(
    email: String,
    fullName: Option[String] = None,
    //  loginInfo: LoginInfo,
    firstName: Option[String] = None,
    lastName: Option[String] = None,
    avatarURL: Option[String] = None,
    activated: Boolean = true,
    profiles: Map[String, Profile]
)

case class Profile(
    providerKey: String,
    firstName: Option[String] = None,
    lastName: Option[String] = None,
    fullName: Option[String] = None,
    avatarURL: Option[String] = None,
    activated: Boolean = true
)
