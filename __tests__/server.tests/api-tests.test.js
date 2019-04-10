import express from 'express';
import moxios from 'moxios';
import request from 'supertest';

import apiRoutes from '../../server/api/index';

const initApp = () => {
    const app = express(),
        base = express.Router();

    apiRoutes(app, base);

    return app;
},
    BASE_URL = '/api',
    URL = `${BASE_URL}/tests`;

describe('API tests', () => {

    beforeEach(() => {
        moxios.install()
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('GET /api', async (done) => {
        const app = initApp();

        const res = await request(app).get(BASE_URL);

        expect(res.body.message).toEqual('Hello World!');
        done();
    })

    test('GET /api/tests', async (done) => {
        const app = initApp();

        const res = await request(app).get(URL);

        expect(res.body.message).toEqual('GET /api/tests');
        done();
    })

    test('GET /api/tests/:testId', async (done) => {
        const app = initApp();

        const res = await request(app).get(`${URL}/123`);

        expect(res.body.message).toEqual('GET /api/test');
        done();
    })

    test('POST /api/tests:testId', async (done) => {
        const app = initApp();

        const res = await request(app).post(`${URL}/123`);

        expect(res.body.message).toEqual('POST /api/test');
        done();
    })

    test('PUT /api/tests:testId', async (done) => {
        const app = initApp();

        const res = await request(app).put(`${URL}/123`);

        expect(res.body.message).toEqual('PUT /api/test');
        done();
    })

    test('PUT /api/tests:testId', async (done) => {
        const app = initApp();

        const res = await request(app).delete(`${URL}/123`);

        expect(res.body.message).toEqual('DELETE /api/test');
        done();
    })
});