// DC/app.js
import express from "express";
import router from "./routes/routes.js"
const app = express();
const port = 3000;

app.use(express.json());

// Use of the routes
app.use("/", router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));