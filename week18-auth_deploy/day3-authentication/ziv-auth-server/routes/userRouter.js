const { Router } = require("express");
const { verifyToken } = require("../midllewares/verifyToken.js");

const userController = require("../controllers/userController.js");

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.delete("/logout", userController.logoutUser);

router.get("/all", verifyToken, userController.getUsers);
router.get("/auth", verifyToken, userController.verifyAuth);

module.exports = router;