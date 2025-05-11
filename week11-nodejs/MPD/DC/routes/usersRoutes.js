// root/route/usersRoutes.js
import express from "express";
import usersController from "../controller/usersController.js";
const router = express.Router();

router.get("/", usersController.getAllRegisteredUsers);
router.get("/:id", usersController.getRegisteredUserbyId);
router.put("/:id", usersController.updateUser);

router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);

export default router;
