import * as testController from './test.controller';

export default (app, base) => {
    app.use('/api', base);

    app.get("/api", (req, res) => {
        let data = {
            message: 'Hello World!'
        };
        res.status(200).send(data);
    });

    base.route('/tests')
    .get(testController.getTests)
    base.route('/tests/:testId')
    .get(testController.getTest)
    .post(testController.postTest)
    .put(testController.putTest)
    .delete(testController.deleteTest);
}