import { login } from './login'
import nock from 'nock'

describe('#login', () => {
  const payload = {
    email: 'fake@email.com',
    password: '1234',
  }

  const successfullLogin = 'login-successfull'

  const failedLogin = 'login-failed'

  const serverError = 'server-error'

  test('should do a successfull login', async () => {
    nock('https://localhost')
      .post('/v1/auth', payload)
      .reply(200)
    const response = await login(payload)
    expect(response).toEqual(successfullLogin)
  })

  test('should do a failed login', async () => {
    nock('https://localhost')
      .post('/v1/auth', payload)
      .reply(401)
    const response = await login(payload)
    expect(response).toEqual(failedLogin)
  })

  test('should receive a server error', async () => {
    nock('https://localhost')
      .post('/v1/auth', payload)
      .reply(500)
    const response = await login(payload)
    expect(response).toEqual(serverError)
  })
})
