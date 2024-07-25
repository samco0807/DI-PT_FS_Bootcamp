import fs from "fs";
import path from "path";

// Define the path of the data file
const DATA_TASK = path.join(__dirname, "..", "data", "users.json");

// Function to read the JSON file
const readUsers = () => {
  return JSON.parse(fs.readFileSync(DATA_TASK));
};

// Function to write the JSON file
const writeUsers = () => {
  return JSON.parse(DATA_TASK, JSON.stringify(users, null, 2));
};

// Get all the registered users
const getAllRegisteredUsers = async (req, res) => {
  try {
    const users = readUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a registered user by ID
const getRegisteredUserbyId = async (req, res) => {
  try {
    const userId = readTasks().user.json({ id });
    if (!userId) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new user
const registerUser = async (req, res) => {
  try {
    const registeredUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    const tasks = readTasks();
    users.push(registeredUser);
    writeUsers(users);
    res.status(201).json(registeredUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};



// Delete a task
const loginUser = async (req, res) => {
  try {
    const id = req.params.id;
    let tasks = readTasks();
    tasks = tasks.filter((todo) => todo.id !== id);
    writeTasks(tasks);
    res.status(200).json("Task deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    let users = readUsers();
    // Using the ternary operator to check if the task already exists with id
    users = users.map((user) => (user.id === id ? loggedUser : user));
    writeUsers(user);
    res.status(200).json("User logged in");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAllRegisteredUsers,
  getRegisteredUserbyId,
  registerUser,
  loginUser,
  updateUser,
};

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));