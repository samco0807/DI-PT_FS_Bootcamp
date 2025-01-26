// Exercise1/controller/controller.js
import {
  _registerUser,
  _loginUser,
  _fetchAllUsers,
  _fetchUser,
  _createUser,
  _updateUser,
  _deleteUser,
} from "../model/model.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    await _registerUser({ username, password });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const isLoggedIn = await _loginUser({ username, password });
    if (isLoggedIn) {
      res.status(200).json({ message: "User logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchAllUsers = async (req, res) => {
  try {
    if (fetchAllUsers) {
    }
    await _fetchAllUsers();
    res.status(200).json({ message: "All user fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id === -1) {
      res.status(404).json({ message: "user not found" });
    }
    await _fetchUser(id);
    res.status(200).json({ message: "User fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const { email, username, first_name, last_name } = req.body;
  try {
    if (email && username && first_name && last_name) {
      await _createUser();
      res.status(201).json({ message: "User created successfully" });
    }
    res.status(404).json({ message: "Error while creating user" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_name } = req.body;
  try {
    if (email && username && first_name && last_name) {
      await _updateUser(id);
      res.status(200).json({ message: "User updated successfully" });
    }
    res.status(404).json({ message: "Impossible update user, user not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id === -1) {
      res.status(404).json({ message: "User not found, impossible to delete" });
    }
    await _deleteUser(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
