import express from "express";
import taskRoutes from "./routes/tasksRoutes.js";
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))
app.use("/tasks", taskRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
