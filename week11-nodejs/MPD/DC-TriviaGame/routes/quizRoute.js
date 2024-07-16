const express = require("express");
const router = express.Router();
const quizController = require("../controller/quizController");

router.get("/quiz", quizController.startQuiz);
router.get("/quiz/:id", quizController.submitQuiz);
router.post("/quiz/score", quizController.finalScore);

module.exports = router;

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));