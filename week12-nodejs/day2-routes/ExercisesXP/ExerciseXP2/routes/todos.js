// exercise1/routes/todos.js
const express = require("express");
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
const allItems = (req, res) => {
  res.send("All to do items", todos);
  console.log(todos);
};

// Add a new to-do item
const newItem = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update a to-do item by ID
const updateItem = (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }
  todos[index] = {
    ...todos[index],
    title: req.body.title || todos[index].title,
    description: req.body.description || todos[index].description,
  };

  res.status(200).json(todos[index]);
};

// Delete a to-do item by ID
const deleteItem = (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }
  todos.splice(index, 1);
  res.status(200).json({ message: "Todo deleted" });
};

router.get("/", allItems);
router.post("/", newItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
