const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => res.send("Hello From Express!"));

app.post("/api/world", (req, res) => {
  const inputFieldValue = req.body.input;
  res.send(`Received: ${inputFieldValue}`);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
