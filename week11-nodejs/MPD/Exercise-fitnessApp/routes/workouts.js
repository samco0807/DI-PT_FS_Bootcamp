const router = express.Router();
const workoutController = require("../controllers/workoutController");

router.get("/workouts",workoutController.getAllWorkouts)
router.get("/workouts/:id",workoutController.getWorkoutById)
router.post("/workouts",workoutController.createWorkout)
router.put("/workouts/:id",workoutController.updateWorkout)
router.delete("/workouts/:id",workoutController.deleteWorkout)

module.exports = router;

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))