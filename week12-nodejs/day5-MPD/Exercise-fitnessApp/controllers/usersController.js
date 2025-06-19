// root/controllers/usersController.js
import {
  _fetchAllUsers,
  _fetchUserById,
  _createUser,
  _updateUser,
  _deleteUser,
} from "../models/usersModel.js";

// Get all the users
export const getAllUsers = async (req, res, next) => {
  try {
    const getAllUsers = await _fetchAllUsers();
    res.json(getAllUsers);
  } catch (error) {
    console.error("Controller: error fetching all users", error);
    next(error);
  }
};

// Get an user by ID
export const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await _fetchUserById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ error: `user with ID ${userId} not found` });
    }
    res.json(user);
  } catch (error) {
    console.error(`Controller: error fetching user by ID ${userId}`, error);
    next(error);
  }
};

// Create a new user
export const createUser = async (req, res, next) => {
  const { userFirstName, userLastName, userEmail, password } = req.body;
  try {
    if (!userFirstName || !userLastName || !userEmail || !password) {
      const err = new Error(
        "First name, last name, email and password are required"
      );
      err.status = 400;
      return next(err);
    }

    const newUser = {
      userFirstName: userFirstName,
      userLastName: userLastName,
      userEmail: userEmail,
      passwordHash: password,
    };
    const createdUser = await _createUser(newUser);
    const { passwordHash: _, ...userResponse } = createdUser;
    res.status(201).json(userResponse);
  } catch (error) {
    console.error(`Controller: error creating user`, error);
    next(error);
  }
};

// Update an user
export const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const {
    updatedUserData = {
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
      userCreatedAt,
      userUpdatedAt,
    },
  } = req.body;
  try {
    const updatedUser = await _updateUser(updatedUserData);
    if (!updatedUser) {
      res.status(404).json({ error: "User not found for update" });
    }
    const { passwordHash, ...userResponse } = updatedUser;
    res.status(200).json(userResponse);
  } catch (error) {
    console.error(`Controller: error updating user ${userId}`, error);
    next(error);
  }
};

// Delete an user
export const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const deleteduser = await _deleteUser(parseInt(userId, 10));
    if (!deleteUser) {
      return res
        .status(404)
        .json({ error: "user not found or already deleted" });
    }

    res.status(200).json("Controller: user successfully deleted");
    return deleteduser;
  } catch (error) {
    console.error(`Controller: error deleting user ${userId}`, error);
    next(error);
  }
};
