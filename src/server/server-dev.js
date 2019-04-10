import express from "express";
import path from "path";

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config.js';

export default app => {
    console.log("Development");
    const compiler = webpack(config),
        DIST_DIR = __dirname + "/public";
        // HTML_FILE = path.join(DIST_DIR, './public/index.html');

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.use(express.static(DIST_DIR))

    // TODO: It's realy necesary this code?
    // app.get('*', (req, res, next) => {
    //     compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    //         if (err) return next(err);
            
    //         res.set('content-type', 'text/html');
    //         res.send(result);
    //         res.end();
    //     })
    // });
}