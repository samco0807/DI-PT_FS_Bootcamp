// Exercise1:

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let x;
let y;

const sum = (x,y) => {console.log(x+y);}

sum(2,5)


// Exercise2:

// Function declaration
function weight(x) {
  console.log(x * 1000);
}
weight(3);

const weight = (x) => {
  console.log(x * 1000);
};

// Exercise3:

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(nbOfChildren, partnerName, location, jobTitle) {

const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${nbOfChildren} kids.`;
const newParagraph=document.createElement("p")

newParagraph.textContent = sentence;
})(2, "Sarah", "Tel-Aviv", "Consultant");

// Exercise4:

// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function(username) {
  const div=document.querySelector("nav");
  const newDiv = document.createElement("div") //create a new div
  newDiv.innerHTML=username // inser the username in the div
  // div.innerHTML=`<div> ${username}  </div>`;
  div.appendChild(newDiv) // add the created div in the nav
})("Samuel");

// Exercise5:
function makeJuice(beverageSize) {
  let ingredients = [];

  function addIngredients(
    sizeDrink,
    firstIngredient,
    secondIngredient,
    thirdIngredient
  ) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
    // addIngredients().push(ingredients)
  }
  addIngredients(3, "tomato", "rhum", "banana");
}
makeJuice("medium");

function displayJuice() {
  newDiv.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
}
