// root/controllers/workoutsController.js
import {
  _fetchAllWorkouts,
  _fetchWorkoutById,
  _createWorkout,
  _updateWorkout,
  _deleteWorkout,
} from "../models/workoutsModel.js";

// Get all the workouts
export const getAllWorkouts = async (req, res) => {
  try {
    const getAllworkouts = await _fetchAllWorkouts();
    res.json(getAllworkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an workout by ID
export const getWorkoutById = async (req, res) => {
  const { workoutId } = req.params;
  try {
    if (!gotworkoutById) {
      return res.status(404).json({ error: "workout not found" });
    }
    const gotworkoutById = await _fetchWorkoutById(workoutId);
    res.json(gotworkoutById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new workout
export const createWorkout = async (req, res) => {
  const {
    workoutTitle,
    workoutDescription,
    workoutCreatedBy,
    workoutCreatedAt,
    workoutUpdatedAt,
  } = req.body;
  try {
    const newWorkout = {
      workoutTitle: workoutTitle,
      workoutDescription: workoutDescription,
      workoutCreatedBy: workoutCreatedBy,
      workoutCreatedAt: workoutCreatedAt,
      workoutUpdatedAt: workoutUpdatedAt,
    };
    const createdWorkout = await _createWorkout(newWorkout);
    res.status(201).json({ createdWorkout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an workout
export const updateWorkout = async (req, res) => {
  const { workoutId } = req.params;
  const {
    updatedworkoutData = {
      workoutTitle,
      workoutDescription,
      workoutCreatedBy,
      workoutCreatedAt,
      workoutUpdatedAt,
    },
  } = req.body;
  try {
    const index = workouts.findIndex((workoutId) => workout.id === id);
    if (workoutId === -1) {
      return res.status(404).send("workout not found");
    }
    const updatedworkout = {
      updatedworkoutData,
    };
    await _updateWorkout(updatedworkout);
    res.status(200).json("workout updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an workout
export const deleteWorkout = async (req, res) => {
  const { workoutId } = req.params;
  try {
    const deletedWorkout = await _deleteWorkout(workoutId);
    // const index = workouts.findIndex((workout) => workout.id === id);
    // if (index === -1) {
    //   return res.status(404).send("workout not found");
    // }

    res.status(200).json("Controller: workout successfully deleted");
    return deletedWorkout;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
