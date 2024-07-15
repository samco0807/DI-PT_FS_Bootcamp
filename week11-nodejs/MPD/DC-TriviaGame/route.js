const express = require ("express")
const router = express.Router
const quizController=require("./triviaQuestions")

router.get('/quiz/:bookId', (req, res) => {
  res.send(req.params.bookId)
})

