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
export const postLogin = async (req, res) => {
  const { error } = joiSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  await User.findOne({ email: req.body.email }, (error, user) => {
    if (error) return res.status(400).json({ error});;

    // test a matching password
    user.comparePassword(req.body.password, function (error, isMatch) {
      if (error) return res.status(400).json({ error});

      if (!isMatch)
        return res.status(400).json({ error: "Incorrect Password"});

      return res.status(200).json({ message: "Sucess! You are login.", user })
    });
  });
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

  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(user);
  });
};

/**
 * Should logout the user from the application
 * GET /api/logout
 * @param {*} req
 * @param {*} res
 */
export const getLogout = (req, res) => {
  res.status(200).json({
    message: "Sucess! You are logout.",
  });
};
