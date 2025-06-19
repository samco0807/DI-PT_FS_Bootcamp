// root/models/exercisesModel.js
import db from "../config/knex.js";

export const _fetchAllExercises = async () => {
  try {
    return await db("exercises").select("*").orderBy("exercise_name", "asc");
  } catch (error) {
    console.error("Model: all exercises not found");
    throw new error("Exercises not found");
  }
};

export const _fetchExerciseById = async (exerciseId) => {
  if (!exerciseId) {
    throw new Error("The exercise does not exist");
  }
  try {
    return await db("exercises")
      .select("*")
      .where({ exerciseId: exerciseId })
      .first();
  } catch (error) {
    console.error("Model: exercise not found");

    throw new Error("Could not fetch the exercise from the database");
  }
};

export const _createExercise = async (exerciseData) => {
  if (!exerciseData || Object.keys(exerciseData).length === 0) {
    throw new Error("Exercise data is required to create an exercise");
  }
  try {
    return await db("exercises").insert({ exerciseData }).returning("*");
  } catch (error) {
    console.error("Model: Error while creating the exercise", error);
    throw new Error("Impossible to create the exercise in the database");
  }
};

export const _updateExercise = async (exerciseId, updateExercise) => {
  // If the exercise doesn't exist
  if (!exerciseId) {
    throw new Error("This exercise does not exist");
  }
  // if there is not update
  if (!updateExercise || !Object.keys(updateExercise).length === 0) {
    throw new Error("No updated data provided");
  }
  try {
    const [updatedExercise] = await db("exercises")
      .where({ exerciseId: exerciseId })
      .update({ updateExercise })
      .returning("*");

    if (!updatedExercise) {
      throw new Error(`Exercise ${exerciseId} not found for update`);
    }
  } catch (error) {
    console.error("Model: error updating exercise", error);
    throw new Error("Impossible to update the exercise");
  }
};

export const _deleteExercise = async (exerciseId) => {
  if (!exerciseId) {
    throw new Error("This exercise does not exist");
  }
  try {
    await db("exercises").where({ exerciseId: exerciseId }).del();
    return numDeleted;
  } catch (error) {
    console.error("Model: error deleting exercise");
    throw new Error("Impossible to delete this exercise from database");
  }
};
