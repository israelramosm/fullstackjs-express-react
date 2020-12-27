import jwt from "jsonwebtoken";

const verifyToken = (req, resp, next) => {
  const token = req.header("Authorization");
  if (!token) return resp.status(401).json({ error: "Access denied" });

  try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
  } catch (error) {
    resp.status(400).json({ error: "Token is not valid" });
  }
};

export default verifyToken;
