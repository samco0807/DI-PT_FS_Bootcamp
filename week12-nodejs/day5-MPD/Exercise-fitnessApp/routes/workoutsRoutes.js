import express from "express";
import {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";
const router = express.Router();

// Import route files
router.get("/workouts", getAllWorkouts);
router.get("/workouts/:id", getWorkoutById);
router.post("/workouts/:id", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.delete("/workouts/:id", deleteWorkout);

// Use imported routes
export default router;
