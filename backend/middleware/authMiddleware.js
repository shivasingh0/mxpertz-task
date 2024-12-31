// auth middleware
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
