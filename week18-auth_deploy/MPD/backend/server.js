const express = require("express");
const cors = require("cors");
const { configDotenv } = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const authenticateToken = require('./middleware/authMiddleware');
const errorHandler = require("./middleware/errorMiddleware");


configDotenv;
const port = 3000;

const app = express();
app.use(cors());

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes
app.get("/api/protected", authenticateToken, (req, res)=>{
    res.json({message:"This is protected data.", user: req.user})
});

// Middleware to handle errors
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
