import express from "express";
import path from "path";

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config.js';

export const staticFiles = (app) => {
    const  DIST_DIR = __dirname + "/public",
        HTML_FILE = path.join(DIST_DIR, './public/index.html');
        
    app.use(express.static(DIST_DIR))

    app.get('*', (req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) return next(err);
            
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        })
    });

    return app;
}

export default () => {
    console.log("Development")
    const app = express(),
        compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

   return app;
}