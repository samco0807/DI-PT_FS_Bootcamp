// Exercise1:
let x = 5;
let y = 2;

// You should display:
// x is the biggest number

if (x>y) {
    console.log("x is bigger than y");
} else {
    console.log("y is bigger than x")
}

// Exercise2:
const newDog="Chihuahua"
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLocaleLowerCase());
if (newDog==="Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}

// Exercise3
const number=promppt("Enter a number: ")
const numberUser=parseInt(number)
if (numberUser%2==0) {
    console.log(`${numberUser} is an even number`);
} else {
    console.log(`${numberUser} is an odd number`);
}

// Exercice4:
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length==0) {
    console.log("no one is online");
} else if (users.length==1) {
    console.log(`${users[0]} is online`);
} else if (users.length==2) {
    console.log(`${users[0]} and ${users[1]} are online`);
} else {
    console.log(`${users[0]}, ${users[1]} and more are online`);
}