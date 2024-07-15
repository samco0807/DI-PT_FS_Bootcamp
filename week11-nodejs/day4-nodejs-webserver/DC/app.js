import axios from "axios";
import { emojis } from "emojis";

// Select form and add an even to the form
document.querySelector("#emojiGameForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  // select the value of the select a attribute
  const userSelectedEmoji = document.querySelector("#userSelectedEmoji").value;
  try {
    const response = await axios("/submit-guess", { userSelectedEmoji });
    const result = response.data;
    document.querySelector("#score").innerHTML = `
    <h2>result: ${result}, Score:${result+score}</h2>`;
  } catch (error) {
    console.log("Error submitting guess: ", error);
  }
});
