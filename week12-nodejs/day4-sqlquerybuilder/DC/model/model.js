// DC/model/model.js
import { json } from "express";
import db from "../config/knex.js";
import bcrypt from "bcryptjs";

// function to register a new user in the database with password crypted
export const _registerUser = async ({
  email,
  username,
  first_name,
  last_name,
  password,
}) => {
  try {
    await db.transaction(async (trx) => {
      const [user] = await trx("users")
        .insert({
          email,
          username,
          first_name,
          last_name,
        })
        .returning("*");
    });

    const hashedPassword = bcrypt.hashSync(password, 10);

    await trx("hashpwd").insert({ user_id: user.id, password: hashedPassword });
    console.log("User registered successfully");
  } catch (error) {
    console.error("registration failed");
  }
};

export const _loginUser = async ({ username, password }) => {
  try {
    const user = await db("hashpwd").where({ username }).first();
    if (!user) {
      console.log("User not found");
      return false;
    }
    const hashRecord = await db("hashpwd").where({ user_id: user.id }).first();
    const isPasswordValid = bcrypt.compareSync(password, hashRecord.password);
    if (isPasswordValid) {
      console.log("User logged in successfully");
      return true;
    } else {
      console.log("Incorrect password");
      return false;
    }
  } catch (error) {
    console.error("Log in failed", error);
  }
};

export const _fetchAllUsers = () => {
  try {
    return db("users").returning("*");
  } catch (error) {
    console.error("Failed to fetch the users");
  }
  console.log("All users fetched successfully");
};

export const _fetchUser = (id) => {
  try {
    if (id) {
      return db("users").select(id);
    }
    console.log("No user found");
    res.status(404).json({ message: "No user found" });
  } catch (error) {
    console.error("Failed to retrieve the user");
  }
  console.log("User fetched successfully");
};

export const _createUser = () => {
  try {
    return db("users").insert({ email, username, first_name, last_name }, [
      "email",
      "username",
      "first_name",
      "last_name",
    ]);
  } catch (error) {
    console.error("Failed to create the user");
  }
  console.log("User created successfully");
};

export const _updateUser = (id) => {
  try {
    return db("users").where({ id: id }).update(
      {
        email: email,
        username: username,
        first_name: first_name,
        last_name: last_name,
      },
      ["id", "email", "username", "first_name", "last_name"]
    );
  } catch (error) {
    console.error("Failed to update the user");
  }
};

export const _deleteUser = (id) => {
  try {
    return db("users").where({ id: id }).del();
  } catch (error) {
    console.error("Failed to delete the post");
  }
};
