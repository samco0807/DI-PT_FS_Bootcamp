const express = require("express");
const quizRoute = require("./routes/quizRoute");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json);

app.use("/api", quizRoute);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));