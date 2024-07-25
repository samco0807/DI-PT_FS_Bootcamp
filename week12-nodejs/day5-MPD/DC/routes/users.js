import userController from "../controllers/usersController"

const router = express.Router();

router.get("/users",userController.getAllRegisteredUsers)
router.get("/users/:id",userController.getRegisteredUserbyId)
router.post("/register",userController.registerUser)
router.post("/login",userController.loginUser)
router.put("/users/:id",userController.updateUser)

export default router

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))