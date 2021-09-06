import * as userC from '../controllers/auth.controller';
import * as testC from '../controllers/test.controller';

/**
 * base API /api
 * @param {*} app
 * @param {*} url
 * @param {*} rBase
 */
const base = (app, url, rBase) => {
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
  rBase.route('/login/test').post(testC.postTestLogin);
  rBase.route('/login').post(userC.postLogin);
  rBase.route('/signup').post(userC.postSignup);
  rBase.route('/logout').get(userC.getLogout);
};

export default base;
