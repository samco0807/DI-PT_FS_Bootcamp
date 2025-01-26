// exercise1/app.js
const express = require("express");
const TodosRouter = require("./routes/todos.js");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/todos", TodosRouter);

app.get('/', (req, res) => res.send('Homepage'))
app.get('/about', (req, res) => res.send('About the page'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
