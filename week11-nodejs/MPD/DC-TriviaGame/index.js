const handleClick = (e) => {
  const button = document.querySelector("button");
  const question = document.querySelector(".question");
  triviaQuestions.forEach((question) => {
    let((i = 0), i < triviaQuestions.length, i++);
    button.addEventListener("click", (e) => {
      e.preventDefault();
      let score=0
      if (triviaQuestions.answer) {
        const newDiv = document.createElement("div");
        newDiv.className = "answer";
        question.appendChild(newDiv);
        score=+1

        newDiv.innerHTML = `
        <h1>Correct!</h1>
        <h1>Score:${i}</h1>
              `;
      }
    });
  });
};
