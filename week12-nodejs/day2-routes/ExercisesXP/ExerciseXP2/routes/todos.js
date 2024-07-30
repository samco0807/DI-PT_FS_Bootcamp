const express = require("express");
const router = require('express').Router()

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
const allItems = (req, res) => {
  res.send("All to do items");
};

// Add a new to-do item
const newItem = (req, res) => {
  res.send("New item");
};

// Update a to-do item by ID
const updateTodo = (req, res) => {
  const id = Number(req.params.todoID);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }
  const updatedProduct = {
    id: todos[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  products[index] = updatedProduct;
  res.status(200).json("Product updated");
};

// Delete a to-do item by ID
const deleteItemTodo = (req, res) => {
  const id = Number(req.params.todosID);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).send("Todo not found");
  }
  todos.splice(index, 1);
  res.status(200).json("Todos deleted");
};

router.get("/", allItems);
router.post("/todos", newItem);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteItemTodo);

// GET http://localhost:3000/todos (Get all to-do items)
// POST http://localhost:3000/todos (Create a new to-do item with a JSON request body)
// PUT http://localhost:3000/todos/:id (Update a to-do item by ID with a JSON request body)
// DELETE http://localhost:3000/todos/:id (Delete a to-do item by ID)

module.exports = router