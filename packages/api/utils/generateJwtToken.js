const jwt = require("jsonwebtoken");

// Generate JWT token - sign a new token w the id + secret which will expire in 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  generateToken,
};
