const express = require("express");
const authenticateToken = require("../middleware/authMiddleware.js");

const router = express.Router();
router.get("/", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the protected route", user: req.user });
});

module.exports = router;