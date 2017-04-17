'use strict'

const qiniu = require('qiniu')

qiniu.conf.ACCESS_KEY = process.env.ACCESS_KEY
qiniu.conf.SECRET_KEY = process.env.SECRET_KEY

const client = new qiniu.rs.Client()
const EntryPath = qiniu.rs.EntryPath

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

exports.batchDelete = function (entries) {
  return new Promise(function (resolve, reject) {
    client.batchDelete(entries.map(e => new EntryPath(e.bucket, e.key)), function (err, ret) {
      if (!err) {
        resolve(ret)
      } else {
        reject(err)
      }
    })
  })
}
