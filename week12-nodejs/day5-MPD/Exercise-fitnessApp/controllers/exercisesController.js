// root/controllers/exercisesController.js
import {
  _fetchAllExercises,
  _fetchExerciseById,
  _createExercise,
  _updateExercise,
  _deleteExercise,
} from "../models/exercisesModel.js";

// Get all the exercises
export const getAllExercises = async (req, res) => {
  try {
    const getAllExercises = await _fetchAllExercises();
    res.json(getAllExercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an exercise by ID
export const getExerciseById = async (req, res) => {
  const { exerciseId } = req.params;
  try {
    if (!gotExerciseById) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    const gotExerciseById = await _fetchExerciseById(exerciseId);
    res.json(gotExerciseById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new exercise
export const createExercise = async (req, res) => {
  const {
    exerciseName,
    exerciseDescription,
    exerciseMuscleGroup,
    exerciseCreatedAt,
    exerciseUpdatedAt,
  } = req.body;
  try {
    const newExercise = {
      exerciseName: exerciseName,
      exerciseDescription: exerciseDescription,
      exerciseMuscleGroup: exerciseMuscleGroup,
      exerciseCreatedAt: exerciseCreatedAt,
      exerciseUpdatedAt: exerciseUpdatedAt,
    };
    const createdExercise = await _createExercise(newExercise);
    res.status(201).json({ createdExercise });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an exercise
export const updateExercise = async (req, res) => {
  const { exerciseId } = req.params;
  const {
    updatedExerciseData = {
      exerciseName,
      exerciseDescription,
      exerciseMuscleGroup,
      exerciseCreatedAt,
      exerciseUpdatedAt,
    },
  } = req.body;
  try {
    const index = exercises.findIndex((exerciseId) => exercise.id === id);
    if (exerciseId === -1) {
      return res.status(404).send("Exercise not found");
    }
    const updatedExercise = {
      updatedExerciseData,
    };
    await _updateExercise(updatedExercise);
    res.status(200).json("Exercise updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an exercise
export const deleteExercise = async (req, res) => {
  const { exerciseId } = req.params;
  try {
    const deletedExercise = await _deleteExercise(exerciseId);
    // const index = exercises.findIndex((exercise) => exercise.id === id);
    // if (index === -1) {
    //   return res.status(404).send("Exercise not found");
    // }

    res.status(200).json("Controller: Exercise successfully deleted");
    return deletedExercise;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

