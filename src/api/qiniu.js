'use strict'

const qiniu = require('qiniu')

qiniu.conf.ACCESS_KEY = process.env.ACCESS_KEY || '8RflFd93xHYRl6hFMJJ-dMeMaBiJtwfqj6lUt9qy'
qiniu.conf.SECRET_KEY = process.env.SECRET_KEY || 'dCd4aLlp4o6SfOuRbuydGiZyin85KLM8-lzvXIge'

const client = new qiniu.rs.Client()

exports.stat = function (bucket, key) {
  return new Promise(function (resolve, reject) {
    client.stat(bucket, key, function(err, ret) {
      if (!err) {
        // console.log(ret.hash, ret.fsize, ret.putTime, ret.mimeType);
        resolve(ret)
      } else {
        reject(err)
      }
    })
  })
}

exports.delete = function (bucket, key) {
  return new Promise(function (resolve, reject) {
    client.remove(bucket, key, function (err, ret) {
      if (!err) {
        resolve(ret)
      } else {
        reject(err)
      }
    })
  })
}
