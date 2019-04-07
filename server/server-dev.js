import express from "express";
import path from "path";
import log from "./logger";

const app = express(),
    port = "8081",
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, './public/index.html')

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
    log("index.html");
    res.sendFile(HTML_FILE)
})

app.use("/", (req, res) => {
    res.json("{}");
})

app.use("/json", (req, res) => {
    res.json("{}");
})


app.listen(port, () => {
    console.log(`[SERVER] Listen on ${port}`)
})