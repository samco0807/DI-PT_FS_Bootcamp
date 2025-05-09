// root/route/user.js
import express from "express";
import userController from "../controller/usersController.js";
const router = express.Router();

router.get("/", userController.getAllRegisteredUsers);
router.get("/:id", userController.getRegisteredUserbyId);
router.put("/:id", userController.updateUser);

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

export default router;
