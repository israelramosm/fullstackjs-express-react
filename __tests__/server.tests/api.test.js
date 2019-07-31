import express from 'express'
import moxios from 'moxios'
import request from 'supertest'

import initApp from '../../__mocks__/mockapp'
import { base } from '../../src/server/api/index'

const BASE_URL = '/api'
const URL = `${BASE_URL}/tests`

describe('API base tests', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('GET /api', async(done) => {
    const app = initApp(base, BASE_URL)

    const res = await request(app).get(BASE_URL)

    expect(res.body.message).toEqual('Hello /api!')
    done()
  })

  test('GET /api/tests', async(done) => {
    const app = initApp(base, BASE_URL)

    const res = await request(app).get(URL)

    expect(res.body.message).toEqual('GET /api/tests')
    done()
  })

  test('GET /api/tests/:testId', async(done) => {
    const app = initApp(base, BASE_URL)

    const res = await request(app).get(`${URL}/123`)

    expect(res.body.message).toEqual('GET /api/test')
    done()
  })

  test('POST /api/tests:testId', async(done) => {
    const app = initApp(base, BASE_URL)

    const res = await request(app).post(`${URL}/123`)

    expect(res.body.message).toEqual('POST /api/test')
    done()
  })

  test('PUT /api/tests:testId', async(done) => {
    const app = initApp(base, BASE_URL)

    const res = await request(app).put(`${URL}/123`)

    expect(res.body.message).toEqual('PUT /api/test')
    done()
  })

  test('PUT /api/tests:testId', async(done) => {
    const app = initApp(base, BASE_URL)

    const res = await request(app).delete(`${URL}/123`)

    expect(res.body.message).toEqual('DELETE /api/test')
    done()
  })
})
