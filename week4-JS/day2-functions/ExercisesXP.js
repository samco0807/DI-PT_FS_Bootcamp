// Exercise1:

// Part1:
const infoAboutMe = () => {
    console.log("My name is Samuel, I am 31, I love music");
  };
  
  //   infoAboutMe();
  
  // Part2:
  const infoAboutPerson = (personName, personAge, personFavoriteColor) => {
    console.log(
      `Your name is ${personName}, Your are ${personAge} and your favorite color is ${personFavoriteColor}`
    );
  };
  
  //   infoAboutPerson("David", 45, "blue")
  //   infoAboutPerson("Josh", 12, "yellow")
  
  // Exercise2:
  const calculateTip = () => {
    // let bill =parseInt(prompt("Enter the amount of the bill: "))
    let tip;
    if (bill < 50) {
      tip = 0.5;
    } else if (50 < bill < 200) {
      tip = 0.15;
    } else {
      tip = 0.1;
    }
    let totalAmount = bill + bill * tip;
    // console.log(bill);
    // console.log(tip);
    // console.log(`The bill is $${bill}, the tip ${tip*100}% so the total amount is $${totalAmount}`);
  };
  // calculateTip()
  
  // Exercise3
  const isDivisible = () => {
    for (let number = 0; number <= 500; number++) {
      if (number % 23 == 0) {
        console.log(number);
      }
    }
  };
  
  // isDivisible();
  
  // Exercise4:
  const stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1,
  };
  
  const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10,
  };
  
  shoppingList = ["banana", "orange", "apple"];
  
  const myBill = () => {
    let totalPrice = 0;
    for (let fruit of shoppingList) {
      if (fruit in stock && stock[fruit] > 0) {
        totalPrice += prices[fruit];
      } else {
        console.log("Item out of stock");
      }
    }
    console.log(totalPrice);
  };
  
  // myBill();
  
  // Exercise5:
  let amountOfChange = [];
  const itemPrice = parseInt(prompt("Enter a price: "));
  let valuesInput = prompt("Enter values with comma: ")
  amountOfChange = valuesInput.split(",").map(value=>parseInt(value))
  let sum = amountOfChange.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  
  const changeEnough = (itemPrice, amountOfChange) => {
    for (let i = 0; i < amountOfChange.length; i++) {
      if (sum >= itemPrice) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  // Exercise6:
  
  // First function to calculate the cost of the Hotel
  
  const oneNightCost = 140;
  const oneDayRent = 40; 
  const cities = { Paris: 220, London: 183, Other: 300 };
  
  
  let numberOfNights = 0;
  let destination = "";
  let sumForTheHotel = 0;
  let sumForThePlanetCost = 0;
  let sumForTheRent = 0;
  
  
  function hotelCost() {
      do {
          numberOfNights = prompt("Enter a number of nights: ");
          if (Number(numberOfNights) <= 0) {
              alert("You must enter a number more than 0.");
          } else if (isNaN(numberOfNights)) {
              alert("You must enter a number.");
          } else if (numberOfNights === null) {
              alert("Enter a correct number");
          } else if (numberOfNights.trim() === ""){
              alert("You entered an empty string");
          }
      }
      while (Number(numberOfNights) <= 0 || isNaN(numberOfNights) || numberOfNights === null || numberOfNights.trim() === "");
      let totalCost = oneNightCost * numberOfNights; // if the user typed a number, multiply one night cost by the number of night
      return totalCost;
  }
  
  // Second function to calculate the cost of the city
  
  function planeRideCost() {
      do {
          destination = prompt("Enter a city: "); 
          if (typeof destination !== "string" || destination === null || destination.trim() === "") {
              alert("You must enter a string");
          }else if (cities[destination] === undefined) {
              alert("unknown city");
          }
      } while (typeof destination !== "string" || destination === null || destination.trim() === "" || cities[destination] === undefined);        
      return cities[destination] * numberOfNights;;
  }
  
  // Third function to calculate the cost of the car rent
  
  function rentCost() {
      return numberOfNights * oneDayRent; 
  }
  
  function main(){
      sumForTheHotel = hotelCost();
      sumForTheRent = rentCost();
      sumForThePlanetCost = planeRideCost();
      return sumForTheHotel + sumForTheRent + sumForThePlanetCost;
  }
  
  const total = main();
  
  console.log(`You've chosen the city '${destination}' for ${numberOfNights} day(s) here is the total ${total}\nhere is the detail: hotel cost ${sumForTheHotel}\nrent cost: ${sumForTheRent}\nplanetCost: ${sumForThePlanetCost}`  );

