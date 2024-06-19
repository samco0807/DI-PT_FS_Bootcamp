// Create function to retrieve random character
const getRandomCharacter = async () => {
  try {
    // put a random number between 1 and 83 in variable
    const randomNumber = Math.floor(Math.random() * 83) + 1;
    // put the api with a random number in the API
    const url = `https://www.swapi.tech/api/people/${randomNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    const res=data.result.properties
    if (response.ok) {
      return res;
    } else {
      throw new Error("The character does not exist");
      document.querySelector(".container").innerHTML=`The The character does not exist`
    }
  } catch (error) {
    console.log("Page not found", error);
  }
};

//   function to display the character infos in the DOM
const handleClick = async () => {
  // select the container div
  const container = document.querySelector(".container");
  
  // check if the displayCharacterInfos div exists
  let displayCharacterInfos=document.querySelector(".displayCharacterInfos")
  // if doesn't exist create a new div
  if (!displayCharacterInfos){
// create a new div inside the container
displayCharacterInfos = document.createElement("div");
// class the new created div with classname
displayCharacterInfos.className = "displayCharacterInfos";
// Insert the new created div in the container div
container.appendChild(displayCharacterInfos);
  }
  // put a random character in a variable
  const data = await getRandomCharacter();
  //   insert infos in JSX
  displayCharacterInfos.innerHTML = `
  <h4>Surname: ${data.name}</h4>
  <h4>Height: ${data.height}</h4>
  <h4>Gender: ${data.gender}</h4>
  <h4>Birthyear: ${data.birth_year}</h4>
  <h4>Homeworld: ${data.homeworld}</h4>
  `;
  
};

// Select the button and play the random function character
const button = document.querySelector("#findSomeoneButton");
button.addEventListener("click", handleClick);
