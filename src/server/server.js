import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import devApp from "./server-dev";
import apiRoutes from './api';

// importing enviroment variables from .env
dotenv.config();

const BASE = express.Router(),
    PROD_MODE = process.env.NODE_ENV == "production",
    PORT =  process.env.PORT || 8080,
    DIST_DIR = __dirname + "/public",
    HTML_FILE = path.join(DIST_DIR, './public/index.html'),
    app = express();

/* Configuration */
// Static Files
app.use(express.static(DIST_DIR));

// Setting up development configuration  
if(!PROD_MODE)
    devApp(app);

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

/* API */
apiRoutes(app, BASE);

// needs to be after the api routes 
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});

app.listen(PORT, () => {
    console.log(`[SERVER] Listen on ${PORT}`)
})