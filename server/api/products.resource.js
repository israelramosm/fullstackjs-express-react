export const getProducts = (req, res) => {
    let data = {
        message: "GET /api/products"
    };
    res.status(200).send(data);
} 

export const getProduct = (req, res) => {
    let data = {
        message: "GET /api/product"
    };
    res.status(200).send(data);
} 

export const postProduct = (req, res) => {
    let data = {
        message: "POST /api/product"
    };
    res.status(200).send(data);
} 

export const putProduct = (req, res) => {
    let data = {
        message: "PUT /api/product"
    };
    res.status(200).send(data);
} 

export const deleteProduct = (req, res) => {
    let data = {
        message: "DELETE /api/product"
    };
    res.status(200).send(data);
} 
