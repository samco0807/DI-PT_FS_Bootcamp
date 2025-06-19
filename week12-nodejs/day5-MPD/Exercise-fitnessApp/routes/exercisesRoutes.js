// root/routes/exercisesRoutes.js
import express from "express";

import {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
} from "../controllers/exercisesController.js";
const router = express.Router();

router.get("/exercises", getAllExercises);
router.get("/exercises/:id", getExerciseById);
router.post("/exercises/:id", createExercise);
router.put("/exercises/:id", updateExercise);
router.delete("/exercises/:id", deleteExercise);

export default router;
