import moxios from 'moxios'
import request from 'supertest'

import initServer from '../../__mocks__/mockapp'
import { base } from '../../src/server/routes/index'

const BASE_URL = '/api'

describe('User Auth tests', () => {
  let server

  beforeEach(() => {
    moxios.install()
    server = initServer(base, BASE_URL)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('POST /api/login', async(done) => {
    const res = await request(server).post(`${BASE_URL}/login`)

    expect(res.body.message).toEqual('Sucess! You are login.')
    done()
  })

  test('POST /api/signup', async(done) => {
    const res = await request(server).post(`${BASE_URL}/signup`)

    expect(res.body.message).toEqual('Sucess! You are signup.')
    done()
  })

  test('GET /api/logout', async(done) => {
    const res = await request(server).get(`${BASE_URL}/logout`)

    expect(res.body.message).toEqual('Sucess! You are logout.')
    done()
  })

})
