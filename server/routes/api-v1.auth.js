import {
  verifyToken,
  refreshToken,
} from '../controllers/middleware/jwt_service';
import * as testC from '../controllers/test.controller';

/**
 * Secure v1 API /api/v1
 * @param {*} app
 * @param {*} url
 * @param {*} rV1
 */
const apiV1 = (app, url, rV1) => {
  // Secure URLs
  app.use(url, refreshToken, verifyToken, rV1);

  app.get(url, (req, res) => {
    const data = {
      message: 'Hello /api/v1!',
    };
    res.status(200).send(data);
  });

  // test route /api/v1
  rV1.route('/tests').get(testC.getTests);
  rV1
    .route('/tests/:testId')
    .get(testC.getTest)
    .post(testC.postTest)
    .put(testC.putTest)
    .delete(testC.deleteTest);
};

export default apiV1;
