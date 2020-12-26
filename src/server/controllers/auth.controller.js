import User, { schema } from "../models/userModel";
import Joi from "@hapi/joi";

const joiSchema = Joi.object({
  email: Joi.string()
    .min(schema.email.min)
    .max(schema.email.max)
    .required()
    .email(),
  password: Joi.string()
    .min(schema.password.min)
    .max(schema.password.max)
    .required(),
});

/**
 * Should login to the application
 * POST /api/login
 * @param {*} req
 * @param {*} res
 */
export const postLogin = (req, res) => {
  console.log(req.body);
  let data = {
    message: "Sucess! You are login.",
  };
  res.status(200).send(data);
};

/**
 * Should signup the user to the application
 * POST /api/signup
 * @param {*} req
 * @param {*} res
 */
export const postSignup = async (req, res) => {
  const { error } = joiSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEMailExist = await User.findOne({ email: req.body.email });
  if (isEMailExist)
    return res.status(400).json({ error: "Email already exists" });

  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) res.status(500).send(err);

    res.status(200).send(user);
  });
};

/**
 * Should logout the user from the application
 * GET /api/logout
 * @param {*} req
 * @param {*} res
 */
export const getLogout = (req, res) => {
  let data = {
    message: "Sucess! You are logout.",
  };
  res.status(200).send(data);
};
