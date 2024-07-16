import axios from "axios";
import { emojis } from "emojis.js";

// Create function to retrieve random emoji
const getRandomEmoji = async () => {
  try {
    const response = await axios.get("/emoji");
    return response.data.emojis;
  } catch (error) {
    console.log("Error fetching random emoji", error);
  }
};

// Function to check if the user selected emoji name matches the random emoji
document
  .querySelector("#emojiGameForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    // select the value of the select a attribute
    const userSelectedEmojiName = document.querySelector(
      "#userSelectedEmojiName"
    ).value;
    try {
      let score = 0;
      let finalScore = 0;
      const response = await axios.post("/submitguess", {
        userSelectedEmojiName,
      });
      const result = response.data;
      // While the name selected by the user matches the emojis, continue
      do {
        document.querySelector("#score").innerHTML = `
      <h2>Great Job</h2>, 
      <h2>result: ${score}</h2>, 
      `;
        score++;
      } while (userSelectedEmojiName == getRandomEmoji());

      finalScore = score;
    } catch (error) {
      console.log("Error submitting guess: ", error);
    }
  });

const submitEmoji = document.querySelector("#submitEmojiButton");
submitEmoji.addEventListener("click", handleClick);
