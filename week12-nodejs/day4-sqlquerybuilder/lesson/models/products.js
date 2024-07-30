const { db } = require("../config/db.js");

const getAllProducts = () => {
  return db("product").select("id", "name", "price").orderby("name");
};

module.exports = { getAllProducts };
