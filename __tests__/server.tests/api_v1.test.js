import moxios from 'moxios'
import request from 'supertest'

import initApp from '../../__mocks__/mockapp'
import { v1 } from '../../src/server/api/index'

const BASE_URL = '/api/v1'
const URL = `${BASE_URL}/tests`

describe('API v1 tests', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('GET /api/v1', async(done) => {
    const app = initApp(v1, BASE_URL)

    const res = await request(app).get(BASE_URL)

    expect(res.body.message).toEqual('Hello /api/v1!')
    done()
  })

  test('GET /api/v1/tests', async(done) => {
    const app = initApp(v1, BASE_URL)

    const res = await request(app).get(URL)

    expect(res.body.message).toEqual('GET /api/tests')
    done()
  })

  test('GET /api/v1/tests/:testId', async(done) => {
    const app = initApp(v1, BASE_URL)

    const res = await request(app).get(`${URL}/123`)

    expect(res.body.message).toEqual('GET /api/test')
    done()
  })

  test('POST /api/v1/tests:testId', async(done) => {
    const app = initApp(v1, BASE_URL)

    const res = await request(app).post(`${URL}/123`)

    expect(res.body.message).toEqual('POST /api/test')
    done()
  })

  test('PUT /api/v1/tests:testId', async(done) => {
    const app = initApp(v1, BASE_URL, v1)

    const res = await request(app).put(`${URL}/123`)

    expect(res.body.message).toEqual('PUT /api/test')
    done()
  })

  test('PUT /api/v1/tests:testId', async(done) => {
    const app = initApp(v1, BASE_URL)

    const res = await request(app).delete(`${URL}/123`)

    expect(res.body.message).toEqual('DELETE /api/test')
    done()
  })
})
