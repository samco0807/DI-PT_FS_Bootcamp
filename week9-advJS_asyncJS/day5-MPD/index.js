import { robots } from "./assets.js";
console.log("Hello");

// Select the elements in the HTML
const cards = document.querySelector(".cards");

// function to display the robots in the cards
const displayRobots = () => {
  robots.forEach((robot) => {
    const robotCard = document.createElement("div");
    robotCard.className = "robot-card";
    robotCard.innerHTML = `
<div class="card" style="width: 18rem; ">
  <img src="${robot.image}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${robot.name}</h5>
    <p class="card-text">${robot.email}</p>
  </div>
</div>
    `;
    cards.appendChild(robotCard);
  });
};

// function to filter a specific robot according to the name
const searchRobot = () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filterRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm())
  );
};
document.querySelectorAll("#searchbar").addEventListener("keyup", searchRobot);
displayRobots();
