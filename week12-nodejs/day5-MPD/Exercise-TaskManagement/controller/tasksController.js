const { fileURLToPath } = require("url");
const fs = require("fs");
const path = require("path");
const tasks = require("../data/tasks.json"); // Import using CommonJS

// Define the path of the data file
const dataFilePath = path.join(__dirname, "../data/tasks.json");

// Function to read the JSON file
// const readTasks = () => {
//   return taskData;
// };

// Function to write the JSON file
const writeTasks = (tasks) => {
  try {
    return fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 2));
    console.log("Data written to file successfully");
  } catch (error) {
    console.error("Error writing to file:", err);
  }
};

// Get all the tasks
const getAllTasks = async (req, res) => {
  try {
    // const tasks = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an task by ID
const getTaskbyId = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = tasks.find((item) => item.id == taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const tasks = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an task
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTask = {
      task: req.body.task,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    let tasks = readTasks();
    // Using the ternary operator to check if the task already exists with id
    tasks = tasks.map((task) => (task.id === id ? updatedTask : task));
    writeTasks(tasks);
    res.status(200).json("Task updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    // let tasks = readTasks();
    const newTasks = tasks.filter((item) => item.id != id);
    writeTasks(newTasks);
    res.status(200).json("Task deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllTasks,
  getTaskbyId,
  createTask,
  updateTask,
  deleteTask,
};
