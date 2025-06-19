// root/models/workoutsModel.js
import db from "../config/knex.js";

export const _fetchAllWorkouts = async () => {
  try {
    return await db("workouts").select("*").orderBy("workout_name", "asc");
  } catch (error) {
    console.error("Model: all workouts not found");
    throw new error("Model: workouts not found");
  }
};

export const _fetchWorkoutById = async (workoutId) => {
  if (!workoutId) {
    throw new Error("The workout does not exist");
  }
  try {
    return await db("workouts")
      .select("*")
      .where({ workoutId: workoutId })
      .first();
  } catch (error) {
    console.error("Model: workout not found");

    throw new Error("Could not fetch the workout from the database");
  }
};

export const _createWorkout = async (
  workoutData = {
    workoutTitle,
    workoutDescription,
    workoutCreatedBy,
    workoutCreatedAt,
    workoutUpdatedAt,
  }
) => {
  if (!workoutData || Object.keys(workoutData).length === 0) {
    throw new Error("workout data is required to create an workout");
  }
  try {
    return await db("workouts").insert({ workoutData }).returning("*");
  } catch (error) {
    console.error("Model: Error while creating the workout", error);
    throw new Error("Impossible to create the workout in the database");
  }
};

export const _updateWorkout = async (workoutId, updateWorkout) => {
  // If the workout doesn't exist
  if (!workoutId) {
    throw new Error("This workout does not exist");
  }
  // if there is not update
  if (!updateWorkout || !Object.keys(updateWorkout).length === 0) {
    throw new Error("No updated data provided");
  }
  try {
    const [updatedworkout] = await db("workouts")
      .where({ workoutId: workoutId })
      .update({ updateWorkout })
      .returning("*");

    if (!updatedworkout) {
      throw new Error(`workout ${workoutId} not found for update`);
    }
  } catch (error) {
    console.error("Model: error updating workout", error);
    throw new Error("Impossible to update the workout");
  }
};

export const _deleteWorkout = async (workoutId) => {
  if (!workoutId) {
    throw new Error("This workout does not exist");
  }
  try {
    await db("workouts").where({ workoutId: workoutId }).del();
    return numDeleted;
  } catch (error) {
    console.error("Model: error deleting workout");
    throw new Error("Impossible to delete this workout from database");
  }
};