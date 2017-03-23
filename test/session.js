var request = require('co-supertest')
var app = require('../src/app')

request = request(app.callback())

describe('user-serivce session API', function () {
  it('sign in', function *() {
    yield request.post('/api/session')
      .send({
        username: 'ygjack',
        password: '123'
      })
      .expect(200)
      .end()
  })

  it('sign out', function *() {
    yield request.delete('/api/session')
      .expect(200)
      .end()
  })

  it('sign in with mismatched username and password', function *() {
    yield request.post('/api/session')
      .send({
        username: 'not exists',
        password: 'not exists'
      })
      .expect(500)
      .end()
  })
})
