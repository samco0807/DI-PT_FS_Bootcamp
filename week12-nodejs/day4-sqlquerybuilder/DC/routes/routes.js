// Exercise1/routes/routes.js

import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  fetchAllUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/controller.js";

router.get("/", fetchAllUsers);
router.get("/:id", fetchUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/register", registerUser)
router.post("/login", loginUser)

export default router;