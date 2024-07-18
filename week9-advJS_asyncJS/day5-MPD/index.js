import { robots } from "./assets.js";

// Select the elements in the HTML
const cards = document.querySelector(".cards");
const searchBar = document.querySelectorAll("#searchbar");

// function to display the robots in the cards
const displayRobots = (robotToDisplay) => {
  robotToDisplay.forEach((robot) => {
    const robotCard = document.createElement("div");
    robotCard.className = "robot-card";
    robotCard.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="${robot.image}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${robot.name}</h5>
    <p class="card-text">${robot.email}</p>
  </div>
</div>;
    `;
    cards.appendChild(robotCard);
  });
};

// function to filter a specific robot according to the name
const searchRobot = async () => {
  searchBar.addEventListener("keyup", () => {
    const searchTerm = searchBar.value.tolowerCase();
    const filterRobots = robots.filter((robot) =>
      robot.name.tolowerCase().includes(searchTerm)
    );
    displayRobots(filterRobots);
  });
};

searchRobot();
