import express from "express";

const _app = express();
const _port = "8081";

_app.use("/", (req, res) => {
    res.json("{}");
})

_app.listen(_port, () => {
    console.log(`[SERVER] Listen on ${_port}`)
})