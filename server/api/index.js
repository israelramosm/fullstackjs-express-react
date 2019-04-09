import * as productResource from './products.resource';

export default (app, base) => {
    app.use('/api', base);

    app.get("/api", (req, res) => {
        let data = {
            message: 'Hello World!'
        };
        res.status(200).send(data);
    });

    base.route('/products')
    .get(productResource.getProducts)
    base.route('/products/:productId')
    .get(productResource.getProduct)
    .post(productResource.postProduct)
    .put(productResource.putProduct)
    .delete(productResource.deleteProduct);
}