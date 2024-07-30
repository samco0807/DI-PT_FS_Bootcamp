const { db } = require("../config/dbpg.js");

const getAllTasks = () => {
  return db("tasks").select("id", "name", "price").orderBy("name");
};

const addTask = (description, assignedTo) => {
  return db("tasks").insert({ description, assignedTo }, [
    "id",
    "description",
    "createdAt",
    "createdBy",
    "createdAt"
  ]);
};
const deleteTask = (id) => {
  return db("tasks").del({ id }, ["id"]);
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
