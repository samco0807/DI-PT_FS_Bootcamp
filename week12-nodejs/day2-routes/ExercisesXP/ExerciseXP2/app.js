const express = require("express");
const router = require("./routes/todos.js");
const app = express();
const port = 3000;

app.get("/todos", (req, res) => res.send("Here all the todo!"));
app.use(express.json());
app.use("/todos", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
