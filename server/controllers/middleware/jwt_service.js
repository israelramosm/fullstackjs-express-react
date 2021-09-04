import jwt from 'jsonwebtoken';
import User from '../../models/userModel';

const verifyToken = async (req, res, next) => {
  const jwtToken = req.cookies.jwt;
  if (!jwtToken) return res.status(401).json({ error: 'Access denied' });

  try {
    const { _id } = jwt.decode(jwtToken);
    const user = await User.findOne({ id: _id });

    const verified = jwt.verify(user.token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (error) {
    res.status(400).json({ error: 'Access denied - Token is not valid' });
  }
};

const refreshToken = async (req, res, next) => {
  const token = req.cookies.jwt;

  try {
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const { id, email } = jwt.decode(token);

    const payload = { id, email };

    const newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: Number(process.env.ACCESS_TOKEN_LIFE),
    });

    User.findByIdAndUpdate(payload.id, { token: newToken }, () => next());
  } catch (error) {
    res.status(400).json({ error: 'Access denied - Token is not valid' });
  }
};

export { verifyToken, refreshToken };
