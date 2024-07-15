const express = require("express");
const bp = require("body-parser");
const DB = require("./modules/db");
const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: "alliance",
      database: "posts",
    },
  });

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));