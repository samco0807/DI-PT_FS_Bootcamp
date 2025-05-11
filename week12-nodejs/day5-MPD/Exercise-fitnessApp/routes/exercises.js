import exercisesController from "../controllers/exercisesController"

router.get("/exercises",exercisesController.getAllExercises)
router.get("/exercises/:id",exercisesController.getExercisebyId)
router.post("/exercises",exercisesController.createExercise)
router.put("/exercises/:id",exercisesController.updateExercise)
router.delete("/exercises/:id",exercisesController.deleteExercise)

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default router