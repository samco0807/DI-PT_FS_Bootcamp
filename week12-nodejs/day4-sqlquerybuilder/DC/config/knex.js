// Exercise1/config/knex.js
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

export default db;