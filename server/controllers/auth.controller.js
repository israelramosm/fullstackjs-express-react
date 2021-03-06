import User, { schema } from '../models/userModel'
import Joi from '@hapi/joi'
import jwt from 'jsonwebtoken'

const joiSchema = Joi.object({
  email: Joi.string()
    .min(schema.email.min)
    .max(schema.email.max)
    .required()
    .email(),
  password: Joi.string()
    .min(schema.password.min)
    .max(schema.password.max)
    .required()
})

/**
 * Should login to the application
 * POST /api/login
 * @param {*} req
 * @param {*} res
 */
export const postLogin = async (req, res) => {
  const { error } = joiSchema.validate(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res
      .status(400)
      .json({ error: "We did't find the email in our database" })
  }

  // test a matching password
  user.comparePassword(req.body.password, function (error, isMatch) {
    if (error) return res.status(400).json({ error })

    if (!isMatch) return res.status(400).json({ error: 'Incorrect Password' })

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.TOKEN_SECRET,
      { expiresIn: 60 * 60 } // Expire in 1 hour
    )

    return res
      .status(200)
      .header('Authorization', token)
      .json({ message: 'Success! You are login.', token })
  })
}

/**
 * Should signup the user to the application
 * POST /api/signup
 * @param {*} req
 * @param {*} res
 */
export const postSignup = async (req, res) => {
  const { error } = joiSchema.validate(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const userExist = await User.findOne({ email: req.body.email })
  if (userExist) return res.status(400).json({ error: 'Email already exists' })

  const newUser = new User(req.body)
  console.log(newUser)
  newUser.save((err, user) => {
    if (err) return res.status(400).send(err)

    return res.status(200).send(user)
  })
}

/**
 * Should logout the user from the application
 * GET /api/logout
 * @param {*} req
 * @param {*} res
 */
export const getLogout = (req, res) => {
  res.status(200).json({
    message: 'Sucess! You are logout.'
  })
}
