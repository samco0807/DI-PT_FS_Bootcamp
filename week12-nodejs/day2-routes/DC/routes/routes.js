// DC/routes/routes.js
import express from "express";
import triviaQuestions from "../data.js";
const router = express.Router();

let userScore = 0;
let currentQuestionIndex = 0;

const displayQuestions = (req, res) => {
  //   iterate throught the array quizz

  if (currentQuestionIndex < triviaQuestions.length) {
    // if quizz question is more than 0 question
    const question = triviaQuestions[currentQuestionIndex].question; // select the  question of the quizz
    res.status(200).json({ question }); // return the question
  } else {
    res.status(200).json({
      message: "Quiz completed",
      finalScore: userScore,
    });
  }
};

const submitAnswer = (req, res) => {
  const { answer } = req.body;

  if (!answer) {
    return res.status(400).json({ message: "Answer empty" });
  }
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (correctAnswer.toLowerCase() === answer.toLowerCase()) {
    userScore++;
    res.status(200).json({ message: "You're correct!" });
  } else {
    res.status(200).json({
      message: `Wrong answer. The correct answer was ${correctAnswer}`,
    });
  }
  currentQuestionIndex++;
};

const displayUserScore = (req, res) => {
  res.status(200).json({
    message: "Quiz completed",
    finalScore: userScore,
    totalQuestions: triviaQuestions.length,
  });
};

router.get("/quiz", displayQuestions);
router.post("/quiz", submitAnswer);
router.get("/quiz/score", displayUserScore);

export default router;
