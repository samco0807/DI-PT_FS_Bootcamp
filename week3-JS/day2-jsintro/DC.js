// Exercise1:
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift()
console.log(fruits);

fruits.sort()
console.log(fruits);

fruits.push("Kiwi")
console.log(fruits);

fruits.splice(0,1)
console.log(fruits);

fruits.reverse()
console.log(fruits);

// Exercice2:
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
accessBanana=moreFruits[1][1]
console.log(accessBanana);
