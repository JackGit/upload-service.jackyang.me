const qiniuAPI = require('../api/qiniu')

function convertQiniuErrorCode (code) {
  let ret = 200
  switch (code) {
    case 200: ret = 200; break
    case 612: ret = 404; break
    default: ret = 500
  }
  return ret
}

exports.stat = function *() {
  let bucket = decodeURIComponent(this.params.bucket)
  let key = decodeURIComponent(this.params.key)

  try {
    let ret = yield qiniuAPI.stat(bucket, key)
    this.body = ret
  } catch (e) {
    this.status = convertQiniuErrorCode(e.code)
    this.body = e
  }
}

exports.delete = function *() {
  let bucket = decodeURIComponent(this.params.bucket)
  let key = decodeURIComponent(this.params.key)

  try {
    let ret = yield qiniuAPI.delete(bucket, key)
    this.body = { code: 0 }
  } catch (e) {
    this.status = convertQiniuErrorCode(e.code)
    this.body = e
  }
}
