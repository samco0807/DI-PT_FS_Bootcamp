import express from "express";
import bodyParser, { json } from "body-parser";
import usersRoutes from "./routes/users.js";
import db from "./db.js";

const app = express();
const port = 3000;
app.use(bodyParser, json());
app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
