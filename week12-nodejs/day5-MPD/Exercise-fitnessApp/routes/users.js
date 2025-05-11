import userController from "../controllers/usersController"

const router = express.Router();

router.get("/users",userController.getAllUsers)
router.get("/users/:id",userController.getUsersbyId)
router.post("/users",userController.createUser)
router.put("/users/:id",userController.updateUser)
router.delete("/users/:id",userController.deleteUser)

export default router

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))