import express from 'express'
import bodyParser from 'body-parser'

const initServer =  (apiFunc, base_url) => {
  const app = express()
  const route = express.Router()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  apiFunc(app, base_url, route)

  return app
}

export default initServer