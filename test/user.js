var request = require('co-supertest')
var app = require('../src/app')

request = request(app.callback())

describe('user-service user API', function () {
  describe('create user POST /api/users', function () {
    it('new user', function *() {
      let now = Date.now()
      yield request
        .post('/api/users')
        .send({
          username: 'tmp_user_name' + now,
          password: '123',
          email: 'tmp@email' + now + '.com'
        })
        .expect(200)
        .end()
    })

    it('user creation failed due to invalid email', function *() {
      let now = Date.now()
      yield request
        .post('/api/users')
        .send({
          username: 'tmp_user_name' + now,
          password: '123',
          email: 'invalidemail'
        })
        .expect(500)
        .end()
    })
  })
})
