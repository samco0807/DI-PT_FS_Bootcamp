import { express } from "express";
import bodyParser from "body-parser";
import exercisesRoutes from './routes/exercises'
import usersRoutes from './routes/users'
import workoutsRoutes from './routes/workouts'

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const app = express()
app.use(bodyParser.json)
app.use("/exercises",exercisesRoutes)
app.use("/users", usersRoutes)
app.use("/workout",workoutsRoutes)

const createUser = async() => {
    
}