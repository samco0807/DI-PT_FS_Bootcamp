const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskbyId,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/tasksController.js");

router.get("/tasks", getAllTasks);
router.get("/task/:id", getTaskbyId);
router.post("/task", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;
