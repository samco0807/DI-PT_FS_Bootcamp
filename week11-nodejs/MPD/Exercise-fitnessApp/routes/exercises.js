const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exercisesControllers");

router.get("/exercises",exerciseController.getAllExercises)
router.get("/exercises/:id",exerciseController.getExercisebyId)
router.post("/exercises",exerciseController.createExercise)
router.put("/exercises/:id",exerciseController.updateExercise)
router.delete("/exercises/:id",exerciseController.deleteExercise)

module.exports = router;

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))