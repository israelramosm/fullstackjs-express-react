import * as userC from '../controllers/auth.controller';
import * as testC from '../controllers/test.controller';

/**
 * API /api
 * @param {*} app
 * @param {*} url
 * @param {*} rBase
 */
const api = (app, url, rBase) => {
  app.use(url, rBase);

  app.get(url, (req, res) => {
    const data = {
      message: 'Hello /api!',
    };
    res.status(200).send(data);
  });

  // test route /api
  rBase.route('/test').get(testC.getTest);
  rBase.route('/tests').get(testC.getTests);
  rBase
    .route('/tests/:testId')
    .get(testC.getTest)
    .post(testC.postTest)
    .put(testC.putTest)
    .delete(testC.deleteTest);

  // User route /api
  rBase.route('/signup').post(userC.postSignup);
  rBase.route('/login').post(userC.postLogin);
  rBase.route('/logout').get(userC.getLogout);
};

export default api;
