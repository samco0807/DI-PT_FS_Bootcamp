import knex from "../db.sql"

// Get all the workouts
const getAllWorkouts = async (req, res) => {
    try {
      const workouts = await knex.select("*").from("workouts");
      res.json(workouts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // Get a workout by ID
  const getWorkoutById = async (req, res) => {
    try {
      const workout = await knex("workouts").where({ id: req.params.id }).first();
      if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
      }
      res.json(workout);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // Create a new workout
  const createWorkout= async (req, res) => {
    try {
      const newWorkout = {
        name: req.body.name,
        description: req.body.description,
        muscleGroup: req.body.muscleGroup,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      };
      const [id] = await knex("workouts").insert(newWorkout).returning("id");
      res.status(201).json({ id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // Update a workout
  const updateWorkout= async (req, res) => {
    try {
      const id = Number(req.params.workout);
      const index = workouts.findIndex((workout) => workout.id === id);
      if (index === -1) {
        return res.status(404).send("Workout not found");
      }
      const updatedWorkout = {
        id: workout[index].id,
        name: req.body.name,
        description: req.body.description,
        muscleGroup: req.body.muscleGroup,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      };
      await knex("workouts").update(updatedWorkout).returning("id") ;
      res.status(200).json("Workout updated");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // Delete a workout
  const deleteWorkout= async (req, res) => {
    try {
      const id = Number(req.params.workoutID);
      const index = workouts.findIndex((workout) => workout.id === id);
      if (index === -1) {
        return res.status(404).send("Workout not found");
      }
      await knex("workouts").del(id).returning("workouts") ;
      workouts.splice(index, 1);
      res.status(200).json("Workout deleted");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))