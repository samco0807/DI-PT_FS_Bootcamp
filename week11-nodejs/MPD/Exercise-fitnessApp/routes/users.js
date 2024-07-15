const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

router.get("/users",userController.getAllUsers)
router.get("/users/:id",userController.getUsersbyId)
router.post("/users",userController.createUser)
router.put("/users/:id",userController.updateUser)
router.delete("/users/:id",userController.deleteUser)

module.exports = router;

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))