// root/routes/userRoutes.js
import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
