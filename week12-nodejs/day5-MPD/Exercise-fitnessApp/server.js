// root/server.js
import express from "express";
import cors from "cors";
// import routes
import userRoutes from "./routes/usersRoutes.js";
import exercisesRoutes from "./routes/exercisesRoutes.js";
import workoutsRoutes from "./routes/workoutsRoutes.js";
// import middleware
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/exercises", exercisesRoutes);
app.use("/workouts", workoutsRoutes);

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// If not route found
app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 404;
  next(err);
});

// Add the middleware at the end of the server
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
