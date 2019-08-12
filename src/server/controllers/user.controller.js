import User from "../models/userModel"

/**
 * Should login to the application
 * POST /api/login
 * @param {*} req 
 * @param {*} res 
 */  
  export const postLogin = (req, res) => {
    let data = {
      message: "Sucess! You are login."
    }
    res.status(200).send(data)
  }
  
  /**
   * Should signup the user to the application
   * POST /api/signup
   * @param {*} req 
   * @param {*} res 
   */
  export const postSignup = (req, res) => {
    let newUser = new User(req.body)
    newUser.save((err, user) => {
      if(err) res.json(err)

      res.json(user)
    })
  }
  
  /**
   * Should logout the user from the application
   * GET /api/logout
   * @param {*} req 
   * @param {*} res 
   */
  export const getLogout = (req, res) => {
    let data = {
      message: "Sucess! You are logout."
    }
    res.status(200).send(data)
  }
