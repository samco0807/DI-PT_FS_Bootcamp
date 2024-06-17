// function to display random color in the colors
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let selectedColor = null;
let isMouseDown = false;

// Add a color case for colors
const colors = document.querySelector(".colors");

// For each case of the grid a different random color
for (let i = 0; i < 3 * 9; i++) {
  
  // Create div
  const divcolor = document.createElement("div");
  //   new div with color classname
  divcolor.classList.add("color");
  //   add a random color to each case with the function getRandomColor
  divcolor.style.backgroundColor = getRandomColor();

  divcolor.addEventListener("click", (e) => {
    selectedColor = e.target.style.backgroundColor;
  });
  //   add the divcolors to the colors section
  colors.appendChild(divcolor);
  
}


// Add a schema to color
const cases = document.querySelector(".cases");
// 40 colonnes * 50 lignes = 2000 cellules
for (let i = 0; i < 40 * 60; i++) {
  const divcase = document.createElement("div");
  divcase.classList.add("case");

  divcase.addEventListener("mousedown", (e) => {
    isMouseDown=true
    if (selectedColor) {
      e.target.style.backgroundColor = selectedColor;
    }

    divcase.addEventListener("mouseover", (e) => {
      if (selectedColor && isMouseDown) {
        e.target.style.backgroundColor = selectedColor;
      }
    });
  });

  cases.appendChild(divcase);
}

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Button to clear colors
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
  const allCases = document.querySelectorAll(".case");
  allCases.forEach(divcase => {
    divcase.style.backgroundColor = "";
  });
});