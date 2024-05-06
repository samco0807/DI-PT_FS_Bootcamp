// Exercise1:
let favoriteFood = "pkaila";
let favoriteMealOfTheDay = "diner";
console.log(`Your ${favoriteFood} at every ${favoriteMealOfTheDay}`);

// Exercise2:
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

myWatchedSeriesLength = `${myWatchedSeries[0]}, ${myWatchedSeries[1]},${myWatchedSeries[2]} `;

myWatchedSeriesSentence = console.log(
  `I watched 3 series ${myWatchedSeriesLength}`
);

myWatchedSeries[-1] = "The big bang theory";
myWatchedSeries.push("Fauda");
myWatchedSeries.unshift("Le bazar de la Charite");
myWatchedSeries.splice(1, 0);
console.log(myWatchedSeries);
myWatchedSeries.splice(1, 1)

console.log(myWatchedSeries)
const thirdLetter=myWatchedSeries[1][2]
console.log(thirdLetter)

console.log(myWatchedSeries)

// Exercise3:

const temperatureCelsius=35
console.log(`${temperatureCelsius}°C`)
const temperatureFahrenheit=((temperatureCelsius/5)*9)+32
console.log(`${temperatureCelsius}°C is ${temperatureFahrenheit}°F`)

// Exercise4:

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual:23

// What is the value of c? Undefined.

console.log(c)
console.log(3 + 4 + '5');
// 75

// Exercise5:
console.log(typeof(15))
// Prediction: int
// Actual: number

console.log(typeof(5.5))
// Prediction:float
// Actual: number

typeof(NaN)
// Prediction: Undefined
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:Boolean
// Actual:Boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:NaN
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:NaN
// Actual:

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:false
// Actual:true

1 === "1"
// Prediction:false
// Actual:false

// Exercise6
5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:NaN
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:0,5
// Actual:5

console.log(" " + " ");
// Prediction:
// Actual:

" " + 0
// Prediction: 0
// Actual: 0

true + true
// Prediction: true
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:0
// Actual:-1

console.log(!true);
// Prediction:false
// Actual:false

console.log(3 - 4);
// Prediction:-1
// Actual: