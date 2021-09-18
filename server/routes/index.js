import express from 'express';

import api from './api';
import apiV1 from './api-v1.auth';

const BASE_ROUTE = express.Router();
const V1_ROUTE = express.Router();

export default (app) => {
  api(app, '/api', BASE_ROUTE);
  apiV1(app, '/api/v1', V1_ROUTE);
};
