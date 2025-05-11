// root/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import usersRouter from "./routes/usersRoutes.js";
import cors from "cors"

const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use(cors())

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(express.static(path.join(_dirname, "public")));

app.use("/api/users", usersRouter);

// Basis route to check if the server works
// app.get("/login", (req, res) => {
//   res.sendFile(path.join(_dirname, "public", "login.html"));
// });

// app.get("/register", (req, res) => {
//   res.sendFile(path.join(_dirname, "public", "register.html"));
// });

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));