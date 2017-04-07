const generator = require('qiniu-uptoken-generator')
const logger = require('../logger').logger
const ACCESS_KEY = process.env.ACCESS_KEY || '8RflFd93xHYRl6hFMJJ-dMeMaBiJtwfqj6lUt9qy'
const SECRET_KEY = process.env.SECRET_KEY || 'dCd4aLlp4o6SfOuRbuydGiZyin85KLM8-lzvXIge'

exports.upload = function *() {
  this.body = 'not implemented yet'
}

exports.generateUptoken = function *() {
  let bucket = this.params.bucket
  let policy = generator.generatePutPolicy({
    bucket: bucket,
    returnBody: '{"name":$(fname),"size":$(fsize),"w":$(imageInfo.width),"h":$(imageInfo.height),"hash":$(etag),"key":$(key)}'
  })
  let uptoken = generator.generateUptoken(ACCESS_KEY, SECRET_KEY, policy)

  logger.info(`uptoken generated for bucket[${bucket}] ${uptoken}`)
  this.body = {
    uptoken: uptoken
  }
}
