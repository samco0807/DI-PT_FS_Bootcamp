const questions = require("../quiz");

// Start the Quiz
const startQuiz = (req, res) => {
  try {
    res.send("Quiz started");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// End the quiz
const submitQuiz = async (req, res) => {
  try {
    const submitQuiz = await "exercises".where({ id: req.params.id }).first();
    if (!submitQuiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(score);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get final score
const finalScore = async (req, res) => {
  try {
    const score = {
      name: req.body.name,
    };
    const [id] = await knex("exercises").insert(newExercise).returning("id");
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  startQuiz,
  submitQuiz,
  finalScore,
};

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
