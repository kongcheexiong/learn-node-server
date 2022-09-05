const jwt = require("jsonwebtoken");
const jwt_secret = process.env.jwt_secret;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      return res.status(400).json({
        message: "there is an error",
      });
    }
    next();
  });
};

module.exports = verifyToken;
