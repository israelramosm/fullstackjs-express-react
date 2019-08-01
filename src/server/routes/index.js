import express from 'express';

import * as testC from '../controllers/test.controller'
import * as userC from '../controllers/user.controller'

const BASE_ROUTE = express.Router()
const V1_ROUTE = express.Router()

export default app => {
  base(app, '/api', BASE_ROUTE)
  v1(app, '/api/v1', V1_ROUTE)
}

export const base = (app, url, rBase) => {
  app.use(url, rBase)

  app.get(url, (req, res) => {
    let data = {
      message: 'Hello /api!'
    }
    res.status(200).send(data)
  })

  // test route /api
  rBase.route('/tests')
    .get(testC.getTests)
  rBase.route('/tests/:testId')
    .get(testC.getTest)
    .post(testC.postTest)
    .put(testC.putTest)
    .delete(testC.deleteTest)

  // User route /api
  rBase.route('/login').post(userC.postLogin)
  rBase.route('/signup').post(userC.postSignup)
  rBase.route('/logout').get(userC.getLogout)
}

export const v1 = (app, url, rV1) => {
  app.use(url, rV1)

  app.get(url, (req, res) => {
    let data = {
      message: 'Hello /api/v1!'
    }
    res.status(200).send(data)
  })

  // test route /api/v1
  rV1.route('/tests')
    .get(testC.getTests)
  rV1.route('/tests/:testId')
    .get(testC.getTest)
    .post(testC.postTest)
    .put(testC.putTest)
    .delete(testC.deleteTest)
}