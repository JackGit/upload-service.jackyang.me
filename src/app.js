'use strict'

const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const serve = require('koa-static')
const apiRouter = require('./routers/api')
const logger = require('./logger').logger
const handleError = require('./errors')
const path = require('path')

const HTTP_PORT = process.env.HTTP_PORT || 8080
const app = koa()

// error handle
handleError(app)

// koa logger
app.use(koaLogger())

// body parser
app.use(bodyParser())

// server static files
app.use(serve(path.resolve(__dirname, './public')))

// routers
app.use(apiRouter.routes())

app.listen(HTTP_PORT, () => {
  logger.info('user-service is running on port ' + HTTP_PORT)
})

module.exports = app
