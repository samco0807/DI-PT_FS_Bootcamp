// root/models/usersModel.js
import db from "../config/knex.js";

export const _fetchAllUsers = async () => {
  try {
    const _fetchedAllUsers = await db("users")
      .select("*")
      .orderBy("user_name", "asc");
    return _fetchedAllUsers;
  } catch (error) {
    console.error("Model: all users not found");
    throw new error("users not found");
  }
};

export const _fetchUserById = async (userId) => {
  if (!userId) {
    throw new Error("The user does not exist");
  }
  try {
    const _fetchedUserById = await db("users")
      .select("*")
      .where({ userId: userId })
      .first();
    return _fetchedUserById;
  } catch (error) {
    console.error("Model: user not found");

    throw new Error("Could not fetch the user from the database");
  }
};

export const _createUser = async (userData) => {
  if (!userData || Object.keys(userData).length === 0) {
    throw new Error("user data is required to create an user");
  }
  try {
    const _createdUser = await db("users").insert({ userData }).returning("*");
    return _createdUser;
  } catch (error) {
    console.error("Model: Error while creating the user", error);
    throw new Error("Impossible to create the user in the database");
  }
};

export const _updateUser = async (userId, updateUser) => {
  // If the user doesn't exist
  if (!userId) {
    throw new Error("This user does not exist");
  }
  // if there is not update
  if (!updateUser || !Object.keys(updateUser).length === 0) {
    throw new Error("No updated data provided");
  }
  try {
    const [updatedUser] = await db("users")
      .where({ userId: userId })
      .update({ updateUser })
      .returning("*");

    if (!updatedUser) {
      throw new Error(`user ${userId} not found for update`);
    }
  } catch (error) {
    console.error("Model: error updating user", error);
    throw new Error("Impossible to update the user");
  }
};

export const _deleteUser = async (userId) => {
  if (!userId) {
    throw new Error("This user does not exist");
  }
  try {
    const _deletedUser = await db("users").where({ userId: userId }).del();
    return _deletedUser;
  } catch (error) {
    console.error("Model: error deleting user");
    throw new Error("Impossible to delete this user from database");
  }
};
