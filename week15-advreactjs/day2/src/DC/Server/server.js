const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => res.send("Hello From Express!"));

app.post("/api/world", (req, res) => {
  const inputValue = req.body.input;
  res.send(`Received: ${inputValue}`);
  console.log("Received: ", inputValue)
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
