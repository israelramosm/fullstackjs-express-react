import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
// TODO: store session on mongo
// import session from "express-session"
// import mongo from "connect-mongo"
import {connect} from "mongoose"


import devApp from './server-dev'
import apiRoutes from './api'

// importing enviroment variables from .env
dotenv.config()

const {NODE_ENV, PORT, DB, DB_HOST, DB_NAME, DB_USER, DB_PASS} = process.env
// mongodb://expressjs:password@localhost/expressdb
const DB_URI = `${DB}${DB_USER}:${DB_PASS}@${DB_HOST}${DB_NAME}`

const BASE = express.Router()
const PROD_MODE = NODE_ENV === 'production'
const DIST_DIR = path.join(__dirname, '/public')
const HTML_FILE = path.join(DIST_DIR, './public/index.html')
const app = express()

console.log(DB_URI)
// DB Connection
connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log("*** DB connection open"))
  .catch(error => console.log(`*** DB Connection Error: ${error}`))

/* Configuration */
// Static Files
app.use(express.static(DIST_DIR))

// Setting up development configuration
if (!PROD_MODE) {
  devApp(app)
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* API */
apiRoutes(app, BASE)

// needs to be after the api routes
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(PORT, () => {
  console.log(`[SERVER] Listen on ${PORT}`)
})
