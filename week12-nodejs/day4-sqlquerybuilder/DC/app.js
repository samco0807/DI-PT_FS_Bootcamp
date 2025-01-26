// Exercise1/app.js

import express from "express";
import router from "./routes/routes.js";
const app = express()

app.use("/", router)
app.use(express.json())

app.listen(3000, () => console.log(`Example app listening on port 3000`))
