import express from "express"
import taskRoutes from "./routes/tasksRoutes.js"
const port = 3000

const app=express()


app.use(express.static('public'));

app.use(express.json())
// replace: app.use(bodyparser.json())

app.use(express.urlencoded());
// replace: app.use(bodyParser.urlencoded({extended: true}));

app.use("/tasks", taskRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))