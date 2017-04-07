/**
 * userRouter is a nested router of apiRouter
 * so the path prefix is /api/user
 *
 * for exmaple: /xx => /api/user/xx
 */

'use strict'

const userRouter = require('koa-router')()
const userService = require('../../services/user')

userRouter.get('/info', userService.info)

module.exports = userRouter
