const express = require("express");
const route = require("./routes/route");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json);

app.use("/api", route);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));