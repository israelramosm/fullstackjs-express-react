import Joi from '@hapi/joi';
import jwt from 'jsonwebtoken';
import User, { schema } from '../models/userModel';

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

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ error: "We did't find the email in our database" });
  }

  // test a matching password
  user.comparePassword(password, (comparePasswordError, isMatch) => {
    if (comparePasswordError) {
      return res
        .status(400)
        .json({ message: 'Error, try again in a while', comparePasswordError });
    }
    if (!isMatch) return res.status(400).json({ err: 'Incorrect Password' });

    const payload = {
      id: user.id,
      email: user.email,
    };

    // create the refresh token with the longer lifespan
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: Number(process.env.REFRESH_TOKEN_LIFE),
    });

    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: Number(process.env.ACCESS_TOKEN_LIFE),
    });

    User.findByIdAndUpdate(payload.id, { token }, (updateTokenError) => {
      if (updateTokenError) {
        res.status(400).json({
          message: 'Error, try again in a while',
          updateTokenError,
        });
      }
      res.cookie('jwt', refreshToken, { secure: false, httpOnly: true });
      return res.status(200).json({ message: 'Success! You are login.' });
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

  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) return res.status(400).json({ error: 'Email already exists' });

  const payload = req.body;
  payload.profile = {};
  payload.profile.username = payload.email.substring(
    0,
    payload.email.indexOf('@')
  );
  const newUser = new User(payload);
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
  res.clearCookie('jwt');
  res.status(200).json({
    message: 'Sucess! You are logout.',
  });
};
