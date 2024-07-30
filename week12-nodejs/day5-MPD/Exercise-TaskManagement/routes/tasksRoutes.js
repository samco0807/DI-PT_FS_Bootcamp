import express from "express";
import {
  getAllTasks,
  getTaskbyId,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/tasksController.js";

const router = express.Router;

router.get("/tasks", taskController.getAllTasks);
router.get("/tasks/:id", taskController.getTaskbyId);
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

export default router;
