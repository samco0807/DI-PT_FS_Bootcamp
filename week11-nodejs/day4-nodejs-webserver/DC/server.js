import express from "express";
import {emojis} from "./emojis";

const app = express();
app.use(express.json());

app.listen(5000, () => console.log(`Example app listening on port 5000!`));

app.get("/emoji", async (req, res) => {
  try {
    // Generate a random emoji
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    res.json({ emoji: randomEmoji });
  } catch (error) {
    console.log("Error fetching posts: ", error);
    res.status(500).json({ error: "Internal server error" });
  }

  app.post("/submitguess", (req, res) => {
    try {
      const { userSelectedEmoji } = req.body;
      // select a random Emoji
      const randomIndex = Math.floor(Math.random() * emojis.length);
      // Add a random Emoji index in a variable
      const randomEmoji = emojis[randomIndex];
      let result;
      let score = 0;
      // if the selected name user emoji is egal to the random emoji
      if (selectedEmojiName == randomEmoji.name) {
        result = "Great Job";
        score++;
      } else {
        result = "No you guessed wrong";
      }
    } catch (error) {
      console.log("Error handling guess: ", error);
      res.status(500).json({ error: "internal server error" });
    }
  });
});
