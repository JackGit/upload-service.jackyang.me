'use strict'

const apiRouter = require('koa-router')()
const uploadRouter = require('./upload')
const userRouter = require('./user')
const domainRouter = require('./domain')
const resourceRouter = require('./resource')

apiRouter.use('/api/upload', uploadRouter.routes())
apiRouter.use('/api/user', userRouter.routes())
apiRouter.use('/api/domain', domainRouter.routes())
apiRouter.use('/api/resource', resourceRouter.routes())

module.exports = apiRouter
