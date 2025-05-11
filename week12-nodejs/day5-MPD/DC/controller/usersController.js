// root/controller/usersController.js
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs"
import bcryptjs, { genSaltSync } from "bcryptjs";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

// Define the path of the data file
const DATA_USERS_PATH = path.join(__dirname, "..", "data", "users.json");

// Function to read the JSON file
const readUsers = () => {
  try {
    if (!fs.existsSync(DATA_USERS_PATH)) {
      return [];
    }
    const data = fs.readFileSync(DATA_USERS_PATH, "utf-8");
    if (!data.trim()) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users data:", error);
    return [];
  }
};

// Function to write the JSON file
const writeUsers = (usersData) => {
  try {
    fs.writeFileSync(DATA_USERS_PATH, JSON.stringify(usersData, null, 2));
  } catch (error) {
    console.error("Error writing users data: ", error);
    throw new Error("Could not save users data");
  }
};

// Get all the registered users
const getAllRegisteredUsers = (req, res) => {
  try {
    const users = readUsers();
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.json(usersWithoutPasswords);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error while retrieving users" });
  }
};

// Get a registered user by ID
const getRegisteredUserbyId = (req, res) => {
  try {
    const userId = readUsers().user.find({ id });
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
const registerUser = (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;

    if (!firstname || !lastname || !email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const users = readUsers();
    const existingUser = users.find(
      (user) => user.username === username || user.email === email
    );
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username or email already exists" });
    }

    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      firstname,
      lastname,
      email,
      username,
      password: hashPassword,
    };

    users.push(newUser);
    writeUsers(users);

    const { password: _, ...userToSend } = newUser;
    res.status(201).json(userToSend);
  } catch (error) {
    console.error("Registration error in controller:", error);
    if (error.message === "Could not have users data.") {
      res.status(500).json({ message: "Failed to have new user." });
    } else {
      res
        .status(500)
        .json({ error: "Internal server error during registration" });
    }
  }
};

// Delete a task
const loginUser = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const users = readUsers();
    const user = users.find((u) => u.username === username);
    if (!user || !bcryptjs.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const { password: _, ...userToSend } = user;
    res.status(200).json(userToSend);
  } catch (error) {
    console.error("Login error", error);
    res.status(500).json({ message: "Internal server error during login" });
  }
};

// Update a user
const updateUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const updateData = req.body;
    let users = readUsers();
    let userFound = false;

    users = users.map((user) => {
      if (user.id === userId) {
        userFound = true;

        const updatedUser = { ...user, ...updateData };
        if (updateData.password) {
          const salt = bcryptjs.genSaltSync(10);
          updatedUser.password = bcryptjs.hashSync(updateData.password, salt);
        }
        return updateUser;
      }
      return user;
    });

    if (!userFound) {
      return res.status(404).json({ message: "User not found for update" });
    }

    writeUsers(users);

    const updatedUser = users.find((u) => u.id === userId);
    const { password, ...userToSend } = updatedUser;
    res.status(200).json(userToSend);
  } catch (error) {
    console.error("Update user error", error);
    if (error.message === "Could not save users data") {
      res.status(500).json({ error: "Failed to save update" });
    } else {
      res
        .status(500)
        .json({ error: "Internal server error during user update" });
    }
  }
};

export default {
  getAllRegisteredUsers,
  getRegisteredUserbyId,
  registerUser,
  loginUser,
  updateUser,
};
