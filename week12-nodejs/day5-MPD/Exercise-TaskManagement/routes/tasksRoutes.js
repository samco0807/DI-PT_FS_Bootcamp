import express from "express";
import {
  getAllTasks,
  getTaskbyId,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/tasksController.js";

const router = express.Router;

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskbyId);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
