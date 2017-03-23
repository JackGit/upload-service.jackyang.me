'use strict'

const apiRouter = require('koa-router')()
const uploadRouter = require('./upload')

apiRouter.use('/api/upload', uploadRouter.routes())

module.exports = apiRouter
