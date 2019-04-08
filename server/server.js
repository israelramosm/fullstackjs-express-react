import express from "express";
import path from "path";
import bodyParser from "body-parser";
// TODO: Add an if for prod or dev modes
import devApp, { staticFiles } from "./server-dev";

// should receive the port from env
// console.log(process.env.PORT);

// should receive de mode from env
const prodMode = false, //process.env.mode == 'production', 
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

// Check for production to use this line
if(prodMode){
    console.log("Production")
    app.get('*', (req, res) => {
        console.log("Index.html");
        console.log(HTML_FILE);
        res.sendFile(HTML_FILE)
    })
// Using static files from development mode to webpack hot reload    
}else {
    staticFiles(app);
}

app.listen(PORT, () => {
    console.log(`[SERVER] Listen on ${PORT}`)
})