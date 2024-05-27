// Exercise1

const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
console.log(people);

people.splice(2, 1, "Jason");
console.log(people);

people.push("Samuel")
console.log(people);
console.log(people.indexOf("Mary"));

const newArray=people.slice(0,4)
console.log(newArray);

const indexFoo=people.indexOf("Foo")
console.log(indexFoo);
// -1 means the value doesn't exist

const last=people.indexOf("Samuel")
console.log(last);

for (let person of people) {
console.log(person);
}

for (let person of people) {
    if (person==="Devon"){
    break
    }
    console.log(person);
}

// Exercises3:
let colors=["blue", "pink", "red"]

for (let i=0; i<colors.length;i++) {
    console.log(`My #${[i+1]} "choice is" ${colors[i]}` );
      }
    
// Exercice4:

let i;

// do {
//   i = prompt('Enter a number greater than or equal to 10: ');
// 12
//   if (!isNaN(i) && i !== null && parseInt(i) < 10) {
//     console.log('Number entered:', i);
//   } else if (!isNaN(i) && parseInt(i) >= 10) {
//     console.log('Number entered is greater than or equal to 10. Exiting loop.');
//     break;
//   } else {
//     console.log('Invalid input. Please enter a valid number.');
//   }
// } while (true);

// Exercice4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
  }
  
  // Console.log the number of floors in the building.
  console.log(building.numberOfFloors);
  
  // Console.log how many apartments are on the floors 1 and 3.
  console.log(building.numberOfAptByFloor.firstFloor,building.numberOfAptByFloor.thirdFloor);
  
  // Console.log the name of the second tenant and the number of rooms he has in his apartment.
  const secondTenantName = building.nameOfTenants[1];
  const danRentRooms = building.numberOfRoomsAndRent.dan[0];
  
  console.log(secondTenantName);
  console.log(danRentRooms);
  
  // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
  
  const danRent = building.numberOfRoomsAndRent.dan[1];
  const sarahRent = building.numberOfRoomsAndRent.sarah[1]
  const davidRent = building.numberOfRoomsAndRent.david[1]
  
  if ((sarahRent+davidRent)>danRent) {
    building.numberOfRoomsAndRent.dan[1]=1200;
    console.log(`Dan's rent has been increased to ${building.numberOfRoomsAndRent.dan[1]}.`);
  } else {
  
  }
  

// Exercice5:
  
const family = {
    name: 'Samuel',
    lastName: 'Cohen',
    profession: 'student'
  }

for (key in family){
    console.log(key);
}

for (key in family){
    console.log(family[key]);
}

// Ex 6 : 

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  
  for (keys in details){
    console.log(`My ${details.my} is ${details.is} the ${details.the}`);
  }

// Exercice7:
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const society=names.map(word=>word.charAt(0))
console.log(society);
