// Exercise1/routes/routes.js

import express from "express";
const router = express.Router();

import {
  fetchAllBooks,
  fetchBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controller/controller.js";

router.get("/", fetchAllBooks);
router.get("/:id", fetchBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
