import express from 'express';

import * as testController from './test.controller'

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

  rBase.route('/tests')
    .get(testController.getTests)
    rBase.route('/tests/:testId')
    .get(testController.getTest)
    .post(testController.postTest)
    .put(testController.putTest)
    .delete(testController.deleteTest)
}

export const v1 = (app, url, rV1) => {
  app.use(url, rV1)

  app.get(url, (req, res) => {
    let data = {
      message: 'Hello /api/v1!'
    }
    res.status(200).send(data)
  })

  rV1.route('/tests')
    .get(testController.getTests)
  rV1.route('/tests/:testId')
    .get(testController.getTest)
    .post(testController.postTest)
    .put(testController.putTest)
    .delete(testController.deleteTest)
}