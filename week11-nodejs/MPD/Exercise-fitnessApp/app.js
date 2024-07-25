import express from "express";
import bodyParser from "body-parser";
import exercisesRoutes from './routes/exercises.js'
import usersRoutes from './routes/users.js'
import workoutsRoutes from './routes/workouts.js'

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const app = express()
app.use(bodyParser.json())

app.use("/exercises",exercisesRoutes)
app.use("/users", usersRoutes)
app.use("/workouts",workoutsRoutes)

const createUser = async() => {
    
}