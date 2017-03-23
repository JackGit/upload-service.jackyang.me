const log4js = require('log4js')
const path = require('path')
const isDev = process.env.NODE_ENV !== 'production'
const MAX_LOG_SIZE = 20480
const BACKUPS = 10
const LOG_FILE_DIRETORY = process.env.LOG_FILE_DIRETORY || '.'
const LOG_LEVEL = process.env.LOG_LEVEL || 'ALL'
const DEFAULT_LOG_FILE_NAME = 'USER_SERVICE_LOG.log'
const ERROR_LOG_FILE_NAME = 'USER_SERVICE_ERROR_LOG.log'

function resolve (filename) {
  return path.resolve(LOG_FILE_DIRETORY, filename)
}

function getFileAppender (filename, category) {
  let appender = {
    type: 'file',
    filename: resolve(filename),
    maxLogSize: MAX_LOG_SIZE,
    backups: BACKUPS,
    level: LOG_LEVEL
  }
  category && (appender.category = category)
  return appender
}

function getConsoleAppender (category) {
  let appender = {
    type: 'console',
    level: LOG_LEVEL
  }
  category && (appender.category = category)
  return appender
}

function getAppenders () {
  if (!isDev) {
    return [
      getFileAppender(DEFAULT_LOG_FILE_NAME),
      getFileAppender(ERROR_LOG_FILE_NAME, 'ERROR-LOGGER')
    ]
  } else {
    return [
      getConsoleAppender(),
      getConsoleAppender('ERROR-LOGGER')
    ]
  }
}

log4js.configure({
  appenders: getAppenders()
})

module.exports = {
  logger: log4js.getLogger(),
  errorLogger: log4js.getLogger('ERROR-LOGGER')
}
