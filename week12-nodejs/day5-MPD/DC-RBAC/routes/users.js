import express from express
const express = require("express");
const router = express.Router();
const quizController = require("../controller/publicController");

router.get("/public", publicController.startQuiz);
router.get("/user-profile", userprofileController.submitQuiz);
router.post("/admin-panel", quizController.finalScore);

export default router

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));