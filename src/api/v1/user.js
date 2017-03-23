'use strict'

const AV = require('leancloud-storage')

exports.signUp = function (request) {
  let user = new AV.User()
  user.setUsername(request.username)
  user.setPassword(request.password)
  user.setEmail(request.email)
  return user.signUp()
}

exports.signIn = function (username, password) {
  return AV.User.logIn(username, password)
}

exports.signOut = function () {
  return AV.User.logOut()
}

exports.currentUser = function () {
  return AV.User.current()
}
