import quotes from "./quotes.js";

// Create function to retrieve random quote
const getRandomQuote = () => {
  // put a random number between 1 and quote array length
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // return a quotes index
  return quotes[randomIndex];
};

//   function to display the quotes infos in the DOM
const handleClick = async () => {
  // select the container div
  const container = document.querySelectorAll(".quote");
  // check if the displayQuotesInfos div exists
  let displayQuotesInfos = document.querySelectorAll(".displayQuotesInfos");
  // if doesn't exist create a new div
  if (!displayQuotesInfos) {
    // create a new div inside the container
    displayQuotesInfos = document.createElement("div");
    // class the new created div with classname
    displayQuotesInfos.className = "quotesInfos";
    // Insert the new created div in the container div
    container.appendChild(displayQuotesInfos);
  }
  // put a random quote in a variable
  const randomQuote = getRandomQuote();
  //   insert infos in JSX
  displayQuotesInfos.innerHTML = `
    <h4>Quote: ${randomQuote.quote}</h4>
    <h4>Author: ${randomQuote.author}</h4>
    <button type="button">Next</button>
    `;
};

// Function to add new quote
const addQuote = () => {
  const newQuote = document.querySelectorAll("newQuote").value;
  const newAuthor = document.querySelectorAll("newAuthor").value;
  //   if the 2 inputs are filled
  if (newQuote && newAuthor) {
    // add the inputs in the array
    quotes.push({ quote: newQuote, author: newAuthor });
    alert("Quote added successfully!");
  }
  alert("Please enter both quote and author");
  const generateQuoteButton = document.querySelector("#generateQuote");
  generateQuoteButton.addEventListener("click", handleClick);

  const addNewQuoteButton = document.querySelector("#addNewQuoteButton");
  addNewQuoteButton.addEventListener("click", addQuote);

  const filterButton = document.querySelector("#filterButton");
  filterButton.addEventListener("click", () => {
    const newAuthor = document.querySelector("newAuthor").value;
    // Create filter if the quote inside the array = the input value entered by the user
    const filterQuotes = quotes.filter((quote) => quote.author === newAuthor);
  });

  const container = document.querySelector(".quote");
  // check if the displayQuotesInfos div exists
  let displayQuotesInfos = document.querySelector(".displayQuotesInfos");
  // if doesn't exist create a new div
  if (!displayQuotesInfos) {
    // create a new div inside the container
    displayQuotesInfos = document.createElement("div");
    // class the new created div with classname
    displayQuotesInfos.className = "quotesInfos";
    // Insert the new created div in the container div
    container.appendChild(displayQuotesInfos);
  }
  //   insert infos in JSX
  displayQuotesInfos.innerHTML = "";
  filterQuotes.forEach((quote) => {
    displayQuotesInfos.innerHTML = `
    <h4>Quote: ${quote.quote}</h4>
    <h4>Author: ${quote.author}</h4>
    <button type="button">Next</button>
    `;
  });
};
