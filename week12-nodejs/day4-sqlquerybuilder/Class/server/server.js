const express = require("express");
require("dotenv").config();

const products_router = require("./routes/productsRouter.js");

const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use("/products", products_router);
