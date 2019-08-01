import express from 'express'

const initServer =  (apiFunc, base_url) => {
  const app = express()
  const route = express.Router()

  apiFunc(app, base_url, route)

  return app
}

export default initServer