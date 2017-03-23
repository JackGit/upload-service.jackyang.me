const onerror = require('koa-onerror')
const errorLogger = require('../logger').errorLogger

function handleError (app) {
  onerror(app, {
    all (err) {
      this.status = err.status || 500
      this.body = JSON.stringify({ error: err.message })
      errorLogger.error(err)
    },
    text (err) {
      this.res._headers = {}
      this.set(err.headers)
      this.body = err.message
      errorLogger.error(err)
    },
    json (err) {
      this.body = { error: err.message }
      errorLogger.error(err)
    },
    html (err) {
      this.body = 'ERROR PAGE'
      this.type = 'html'
      errorLogger.error(err)
    }
  })
}

module.exports = handleError
