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
    let data = {
      message: "Sucess! You are signup."
    }
    res.status(200).send(data)
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
