// Exercise1/app.js
import express from "express";
import router from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use("/books", router);

app.listen(5000, () => console.log(`Example app listening on port 5000`));
