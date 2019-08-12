import * as testC from '../controllers/test.controller'

/**
 * setup for /api/v1
 * @param {*} app 
 * @param {*} url 
 * @param {*} rV1 
 */
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