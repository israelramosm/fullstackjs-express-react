import express from "express";
import path from "path";

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config.js';

const app = express(),
    port = "8081",
    DIST_DIR = __dirname + "/public",
    HTML_FILE = path.join(DIST_DIR, './public/index.html'),
    compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR))

app.get('*', (req, res, next) => {
    // log("index.html");
    // res.sendFile(HTML_FILE)
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) return next(err);
        
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    })
});


app.use("/", (req, res) => {
    res.json("{}");
})

app.use("/json", (req, res) => {
    res.json("{}");
})


app.listen(port, () => {
    console.log(`[SERVER] Listen on ${port}`)
});