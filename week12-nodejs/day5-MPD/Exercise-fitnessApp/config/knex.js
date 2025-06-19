// root/config/knex.js
import knex from "knex";
import dotenv from "dotenv";
import { knexSnakeCaseMappers } from "objection";
dotenv.config();

const knexConfig = {
  client: "pg",
  connection: process.env.DATABASE_URL_FITNESS,
  ...knexSnakeCaseMappers(),
};

const db = knex(knexConfig);

export default db;