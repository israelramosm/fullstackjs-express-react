import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (error) {
    res.status(400).json({ error: 'Access denied - Token is not valid' });
  }
};

export default verifyToken;
