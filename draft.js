// // Exercise1:
// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// fruits.shift()

// console.log(fruits);

// fruits.sort()
// console.log(fruits);

// fruits.push("Kiwi")
// console.log(fruits);

// fruits.splice(0,1)
// console.log(fruits);

// fruits.reverse()
// console.log(fruits);

// // Exercice2:
// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// accessBanana=moreFruits[1][1]
// console.log(accessBanana);

// // Exercise1:
// let x = 5;
// let y = 2;

// // You should display:
// // x is the biggest number

// if (x>y) {
//     console.log("x is bigger than y");
// } else {
//     console.log("y is bigger than x")
// }

// // Exercise2:
// const newDog="Chihuahua"
// console.log(newDog.length);
// console.log(newDog.toUpperCase());
// console.log(newDog.toLocaleLowerCase());
// if (newDog==="Chihuahua") {
//     console.log("I love Chihuahuas, it’s my favorite dog breed");
// } else {
//     console.log("I dont care, I prefer cats");
// }

// // Exercise3
// // const number=promppt("Enter a number: ")
// // const numberUser=parseInt(number)
// // if (numberUser%2==0) {
// //     console.log(`${numberUser} is an even number`);
// // } else {
// //     console.log(`${numberUser} is an odd number`);
// // }

// // Exercice4:
// const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// if (users.length==0) {
//     console.log("no one is online");
// } else if (users.length==1) {
//     console.log(`${users[0]} is online`);
// } else if (users.length==2) {
//     console.log(`${users[0]} and ${users[1]} are online`);
// } else {
//     console.log(`${users[0]}, ${users[1]} and more are online`);
// }

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift()
// console.log(people);

// people.splice(2, 1, "Jason");
// console.log(people);

// people.push("Samuel")
// console.log(people);
// console.log(people.indexOf("Mary"));

// const newArray=people.slice(0,4)
// console.log(newArray);

// const indexFoo=people.indexOf("Foo")
// console.log(indexFoo);
// // -1 means the value doesn't exist

// const last=people.indexOf("Samuel")
// console.log(last);

// for (let person of people) {
// console.log(person);
// }

// for (let person of people) {
//     if (person==="Devon"){
//     break
//     }
//     console.log(person);
// }

// // Exercises3:
// let colors=["blue", "pink", "red"]

// for (let i=0; i<colors.length;i++) {
//     console.log(`My #${[i+1]} "choice is" ${colors[i]}` );
//       }

// // Exercice4:

// let i;

// // do {
// //   i = prompt('Enter a number greater than or equal to 10: ');
// // 12
// //   if (!isNaN(i) && i !== null && parseInt(i) < 10) {
// //     console.log('Number entered:', i);
// //   } else if (!isNaN(i) && parseInt(i) >= 10) {
// //     console.log('Number entered is greater than or equal to 10. Exiting loop.');
// //     break;
// //   } else {
// //     console.log('Invalid input. Please enter a valid number.');
// //   }
// // } while (true);

// // Exercice4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
//   }

//   // Console.log the number of floors in the building.
//   console.log(building.numberOfFloors);

//   // Console.log how many apartments are on the floors 1 and 3.
//   console.log(building.numberOfAptByFloor.firstFloor,building.numberOfAptByFloor.thirdFloor);

//   // Console.log the name of the second tenant and the number of rooms he has in his apartment.
//   const secondTenantName = building.nameOfTenants[1];
//   const danRentRooms = building.numberOfRoomsAndRent.dan[0];

//   console.log(secondTenantName);
//   console.log(danRentRooms);

//   // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

//   const danRent = building.numberOfRoomsAndRent.dan[1];
//   const sarahRent = building.numberOfRoomsAndRent.sarah[1]
//   const davidRent = building.numberOfRoomsAndRent.david[1]

//   if ((sarahRent+davidRent)>danRent) {
//     building.numberOfRoomsAndRent.dan[1]=1200;
//     console.log(`Dan's rent has been increased to ${building.numberOfRoomsAndRent.dan[1]}.`);
//   } else {

//   }

// // Exercice5:

// const family = {
//     name: 'Samuel',
//     lastName: 'Cohen',
//     profession: 'student'
//   }

// for (key in family){
//     console.log(key);
// }

// for (key in family){
//     console.log(family[key]);
// }

// // Ex 6 :

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   for (keys in details){
//     console.log(`My ${details.my} is ${details.is} the ${details.the}`);
//   }

// // Exercice7:
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const society=names.map(word=>word.charAt(0))
// console.log(society);

// // Exercise1:

// // Part1:
// const infoAboutMe = () => {
//   console.log("My name is Samuel, I am 31, I love music");
// };

// //   infoAboutMe();

// // Part2:
// const infoAboutPerson = (personName, personAge, personFavoriteColor) => {
//   console.log(
//     `Your name is ${personName}, Your are ${personAge} and your favorite color is ${personFavoriteColor}`
//   );
// };

// //   infoAboutPerson("David", 45, "blue")
// //   infoAboutPerson("Josh", 12, "yellow")

// // Exercise2:
// const calculateTip = () => {
//   // let bill =parseInt(prompt("Enter the amount of the bill: "))
//   let tip;
//   if (bill < 50) {
//     tip = 0.5;
//   } else if (50 < bill < 200) {
//     tip = 0.15;
//   } else {
//     tip = 0.1;
//   }
//   let totalAmount = bill + bill * tip;
//   // console.log(bill);
//   // console.log(tip);
//   // console.log(`The bill is $${bill}, the tip ${tip*100}% so the total amount is $${totalAmount}`);
// };
// // calculateTip()

// // Exercise3
// const isDivisible = () => {
//   for (let number = 0; number <= 500; number++) {
//     if (number % 23 == 0) {
//       console.log(number);
//     }
//   }
// };

// // isDivisible();

// // Exercise4:
// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// shoppingList = ["banana", "orange", "apple"];

// const myBill = () => {
//   let totalPrice = 0;
//   for (let fruit of shoppingList) {
//     if (fruit in stock && stock[fruit] > 0) {
//       totalPrice += prices[fruit];
//     } else {
//       console.log("Item out of stock");
//     }
//   }
//   console.log(totalPrice);
// };

// // myBill();

// // Exercise5:
// let amountOfChange = [];
// const itemPrice = parseInt(prompt("Enter a price: "));
// let valuesInput = prompt("Enter values with comma: ")
// amountOfChange = valuesInput.split(",").map(value=>parseInt(value))
// let sum = amountOfChange.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// const changeEnough = (itemPrice, amountOfChange) => {
//   for (let i = 0; i < amountOfChange.length; i++) {
//     if (sum >= itemPrice) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };


// // Exercise6:

// // First function to calculate the cost of the Hotel

// const oneNightCost = 140;
// const oneDayRent = 40; 
// const cities = { Paris: 220, London: 183, Other: 300 };


// let numberOfNights = 0;
// let destination = "";
// let sumForTheHotel = 0;
// let sumForThePlanetCost = 0;
// let sumForTheRent = 0;


// function hotelCost() {
//     do {
//         numberOfNights = prompt("Enter a number of nights: ");
//         if (Number(numberOfNights) <= 0) {
//             alert("You must enter a number more than 0.");
//         } else if (isNaN(numberOfNights)) {
//             alert("You must enter a number.");
//         } else if (numberOfNights === null) {
//             alert("Enter a correct number");
//         } else if (numberOfNights.trim() === ""){
//             alert("You entered an empty string");
//         }
//     }
//     while (Number(numberOfNights) <= 0 || isNaN(numberOfNights) || numberOfNights === null || numberOfNights.trim() === "");
//     let totalCost = oneNightCost * numberOfNights; // if the user typed a number, multiply one night cost by the number of night
//     return totalCost;
// }

// // Second function to calculate the cost of the city

// function planeRideCost() {
//     do {
//         destination = prompt("Enter a city: "); 
//         if (typeof destination !== "string" || destination === null || destination.trim() === "") {
//             alert("You must enter a string");
//         }else if (cities[destination] === undefined) {
//             alert("unknown city");
//         }
//     } while (typeof destination !== "string" || destination === null || destination.trim() === "" || cities[destination] === undefined);        
//     return cities[destination] * numberOfNights;;
// }

// // Third function to calculate the cost of the car rent

// function rentCost() {
//     return numberOfNights * oneDayRent; 
// }

// function main(){
//     sumForTheHotel = hotelCost();
//     sumForTheRent = rentCost();
//     sumForThePlanetCost = planeRideCost();
//     return sumForTheHotel + sumForTheRent + sumForThePlanetCost;
// }

// const total = main();

// console.log(`You've chosen the city '${destination}' for ${numberOfNights} day(s) here is the total ${total}\nhere is the detail: hotel cost ${sumForTheHotel}\nrent cost: ${sumForTheRent}\nplanetCost: ${sumForThePlanetCost}`  );

// DAILY CHALLENGE

// let words=prompt("Enter a word: ")
// wordsArray=words.split(",").map(word=>word.trim())
// let maxLength=getMaxLength(wordsArray)
// for (let i=0; i<words.length; i++){
// if (words[i].length>longestWord.length) {
// console.log("*");
// }
// }

// console.log(`\n ${words} \n`);

// Fonction pour obtenir la longueur du mot le plus long dans un tableau
// const getMaxLength = (words) => {
//     let maxLength = 0;
//     for (let word of words) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//         }
//     }
//     return maxLength;
// };

// // Fonction pour afficher chaque mot sur une nouvelle ligne avec des étoiles comme cadre
// const displayWordsWithStars = (words) => {
//     // Diviser la chaîne de mots en un tableau de mots
//     let wordsArray = words.split(",").map(word => word.trim());

//     // Obtenir la longueur du mot le plus long
//     let maxLength = getMaxLength(wordsArray);

//     // Parcourir chaque mot
//     for (let word of wordsArray) {
//         // Calculer le nombre d'étoiles de chaque côté en fonction de la longueur du mot le plus long
//         let starsCount = maxLength - word.length;
//         let stars = "*".repeat(starsCount);

//         // Afficher le mot encadré avec des étoiles
//         console.log(`${stars} ${word} ${stars}`);
//     }
// };

// // Exemple d'utilisation
// let words = "Hello, World, JavaScript, Programming, Code";
// displayWordsWithStars(words);

// Exercise1:
// const selectDiv=document.getElementById("container")
// console.log(selectDiv);

// // let changeLi= selectDiv.firstElementChild("Pete")

// const secondUl=document.querySelector('ul:nth-of-type(2)')

// secondUl.removeChild(secondUl.children[1])

// const secondeLiListItems= secondUl.querySelectorAll("li")
// secondeLiListItems.forEach((li) => {
//     li.innerText="Samuel"
// });

// let elem=document.querySelector("div")
//         elem.style.background="blue"

// const secondUl=document.querySelector('ul:nth-of-type(1)')
// secondUl.removeChild(secondUl.children[0])
// secondUl.style.border="solid 2px black"

// let navBar=document.getElementById("navBar")
// navBar.setAttribute("id", "socialNetworkNavigation")

// let newListItem=document.createElement("li")
// newListItem.textContent="Logout"
// navBar.appendChild(newListItem)
// let list=document.querySelector("ul")
// list.appendChild(newListItem)

// Exercice4:
// Create the array with books infos
let allBooks=[
    {"title":"Harry Potter and The Chamber of Secret", "author":"JK Rowling", "alreadyRead":"True"},
    {"title":"Harry Potter and The Goblet of Fire", "author":"JK Rowling", "alreadyRead":"False"},
]

// select div from HTML
let div=document.querySelector(".listBooks")

// Create table to insert
// let table=document.createElement("table")

// Iterate through the array of books infos
for (let book of allBooks){
   let books=(`${book.title} written by ${book.author}, book cover: ${book.image}, Book read: ${book.alreadyRead}`)
   
// if the book is read, display the book infos in green
   if (book.alreadyRead){
    books.style.color="green"
   }
}

div.appendChild(books)
div.innerHTML=<h1>Books</h1>