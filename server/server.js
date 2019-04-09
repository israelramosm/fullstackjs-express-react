import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import devApp, { staticFiles } from "./server-dev";

// importing enviroment variables from .env
dotenv.config();

// should receive de mode from env
const prodMode = process.env.NODE_ENV == "production", //process.env.mode == 'production', 
    app = prodMode ? express() : devApp(),
    PORT =  process.env.PORT || 8080,
    DIST_DIR = __dirname + "/public",
    HTML_FILE = path.join(DIST_DIR, './public/index.html');


/* Configuration */
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

/* API */
app.get("/api", (req, res) => {
    let data = {
        message: 'Hello World!'
    };
    res.status(200).send(data);
});

/* Static Files */
app.use(express.static(DIST_DIR));

// Check for production to use just the static files required
if(prodMode){
    app.get('*', (req, res) => {
        res.sendFile(HTML_FILE)
    })
} else {
    // Using static files from development mode to webpack hot reload    
    staticFiles(app);
}

app.listen(PORT, () => {
    console.log(`[SERVER] Listen on ${PORT}`)
})