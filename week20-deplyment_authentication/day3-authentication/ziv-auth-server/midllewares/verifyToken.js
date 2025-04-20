const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies["token"] || req.headers["x-access-token"];

  if (!token) return res.status(401).json({ message: "unahuthorized" });

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: "forbidden", error: err.message });

    const { userid, email } = decoded;
    /** validation ->  */

    req.userid = userid;
    req.email = email;

    next();
  });
};

module.exports = {
  verifyToken,
};
