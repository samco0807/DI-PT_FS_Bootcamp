import knex from "../db.sql";

// Get all the exercises
const getAllExercises = async (req, res) => {
  try {
    const exercises = await knex.select("*").from("exercises");
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an exercise by ID
const getExerciseById = async (req, res) => {
  try {
    const exercise = await knex("exercises")
      .where({ id: req.params.id })
      .first();
    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new exercise
const createExercise = async (req, res) => {
  try {
    const newExercise = {
      name: req.body.name,
      description: req.body.description,
      muscleGroup: req.body.muscleGroup,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    const [id] = await knex("exercises").insert(newExercise).returning("id");
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an exercise
const updateExercise = async (req, res) => {
  try {
    const id = Number(req.params.exercise);
    const index = exercises.findIndex((exercise) => exercise.id === id);
    if (index === -1) {
      return res.status(404).send("Exercise not found");
    }
    const updatedExercise = {
      id: exercise[index].id,
      name: req.body.name,
      description: req.body.description,
      muscleGroup: req.body.muscleGroup,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    await knex("exercises").update(updatedExercise).returning("id");
    res.status(200).json("Exercise updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an exercise
const deleteExercise = async (req, res) => {
  try {
    const id = Number(req.params.exerciseID);
    const index = exercises.findIndex((exercise) => exercise.id === id);
    if (index === -1) {
      return res.status(404).send("Exercise not found");
    }
    await knex("exercises").del(id).returning("exercises");
    exercises.splice(index, 1);
    res.status(200).json("Exercise deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default module = {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
};

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
