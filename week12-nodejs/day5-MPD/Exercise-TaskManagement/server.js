const express = require("express");
const router = require("./routes/Router.js");
const port = 3000;

const app = express();

app.use(express.static("public"));

app.use(express.json());
// replace: app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.urlencoded({extended: true}));

app.use("/tasks", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
