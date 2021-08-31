import jwt from 'jsonwebtoken';

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
  res.status(200).send(data);
};

export const postTest = (req, res) => {
  const data = {
    message: 'POST /api/test',
    body: req.body,
  };

  res.status(200).send(data);
};

export const putTest = (req, res) => {
  const data = {
    message: 'PUT /api/test',
    body: req.body,
  };
  res.status(200).send(data);
};

export const deleteTest = (req, res) => {
  const data = {
    message: 'DELETE /api/test',
    body: req.body,
  };
  res.status(200).send(data);
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
    const token = jwt.sign(
      {
        id: 'user',
        email,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: 60 * 60 } // Expire in 1 hour
    );

    return res
      .status(200)
      .header('Authorization', token)
      .json({ message: 'Success! You are login.', token });
  }

  return res.status(404).json({ message: 'Error! Nothing to see here' });
};
