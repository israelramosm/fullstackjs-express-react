export const getTests = (req, res) => {
    let data = {
        message: "GET /api/tests"
    };
    res.status(200).send(data);
} 

export const getTest = (req, res) => {
    let data = {
        message: "GET /api/test"
    };
    res.status(200).send(data);
} 

export const postTest = (req, res) => {
    let data = {
        message: "POST /api/test"
    };
    res.status(200).send(data);
} 

export const putTest = (req, res) => {
    let data = {
        message: "PUT /api/test"
    };
    res.status(200).send(data);
} 

export const deleteTest = (req, res) => {
    let data = {
        message: "DELETE /api/test"
    };
    res.status(200).send(data);
} 
