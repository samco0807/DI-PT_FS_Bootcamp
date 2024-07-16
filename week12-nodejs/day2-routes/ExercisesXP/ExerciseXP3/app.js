const express = require('express')
const app = express()
const books_routes = require('./routes/index.js');

app.listen(5000, () => console.log(`Example app listening on port 5000!`))

app.use(express.json())
app.use("/api/books", books_routes)