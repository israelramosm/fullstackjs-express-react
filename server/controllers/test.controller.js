import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export const getTests = (req, res) => {
  const data = [
    {
      message: 'GET /api/tests',
    },
    {
      message: 'GET /api/tests 2',
    },
  ];
  return res.status(200).send(data);
};

export const getTest = (req, res) => {
  const data = {
    message: 'GET /api/test',
  };
  return res.status(200).send(data);
};

export const postTest = (req, res) => {
  const data = {
    message: 'POST /api/test',
    body: req.body,
  };

  return res.status(200).send(data);
};

export const putTest = (req, res) => {
  const data = {
    message: 'PUT /api/test',
    body: req.body,
  };
  return res.status(200).send(data);
};

export const deleteTest = (req, res) => {
  const data = {
    message: 'DELETE /api/test',
    body: req.body,
  };
  return res.status(200).send(data);
};

/**
 * WARNING: delete this code for production use
 *
 * Endpoint to generate a token with default user and password
 * POST /api/login/test
 * @param {*} req
 * @param {*} res
 */
export const postTestLogin = async (req, res) => {
  const { email, password } = req.body;

  if (
    process.env.NODE_ENV === 'development' &&
    email === 'user@name.com' &&
    password === 'password'
  ) {
    const payload = { email, password };

    // create the refresh token with the longer lifespan
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: Number(process.env.REFRESH_TOKEN_LIFE),
    });

    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: Number(process.env.ACCESS_TOKEN_LIFE),
    });

    const userExist = await User.findOne({ email });
    if (!userExist) {
      payload.token = token;
      payload.profile = {};
      payload.profile.username = payload.email.substring(
        0,
        payload.email.indexOf('@')
      );

      const newUser = new User(payload);
      newUser.save((err) => {
        if (err) return res.status(400).send(err);
      });
    } else {
      User.findByIdAndUpdate(payload.id, { token }, (updateTokenError) => {
        if (updateTokenError) {
          return res.status(400).json({
            message: 'Error, try again in a while',
            updateTokenError,
          });
        }
      });
    }

    res.cookie('jwt', refreshToken, { secure: false, httpOnly: true });
    return res.status(200).json({ message: 'Success! You are login.' });
  }
  return res.status(404).json({ message: 'Error! Nothing to see here' });
};
