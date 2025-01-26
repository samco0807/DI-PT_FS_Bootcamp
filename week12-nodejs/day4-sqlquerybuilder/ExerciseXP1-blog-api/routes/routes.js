// Exercise1/routes/routes.js

import express from "express";
const router = express.Router();

import {
  fetchAllPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from "../controller/controller.js";

router.get("/", fetchAllPosts);
router.get("/:id", fetchPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;