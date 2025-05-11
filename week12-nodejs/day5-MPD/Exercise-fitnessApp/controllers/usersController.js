import knex from "../db.sql"

// Get all the users
const getAllUsers = async (req, res) => {
  try {
    const users = await knex.select("*").from("users");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an user by ID
const getUsersbyId = async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.params.id }).first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    const [id] = await knex("users").insert(newUser).returning("id");
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an user
const updateUser = async (req, res) => {
  try {
    const id = Number(req.params.userID);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(404).send("User not found");
    }
    const updatedUser = {
      id: user[index].id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    await knex("users").update(updatedUser).returning("id");
    res.status(200).json("User updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an user
const deleteUser = async (req, res) => {
  try {
    const id = Number(req.params.userID);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(404).send("User not found");
    }
    await knex("users").del(id).returning("users");
    users.splice(index, 1);
    res.status(200).json("User deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUsersbyId,
  createUser,
  updateUser,
  deleteUser,
};

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
