import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users"
import exercisesRoutes from "./routes/exercises"
import workoutsRoutes from "./routes/workouts"

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use("/users",userRoutes)
app.use("/exercises", exercisesRoutes)
app.use("/workouts", workoutsRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));