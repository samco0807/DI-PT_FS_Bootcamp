import { persons } from "./data";

const ageAverage = () => {
  let sum = 0;
  persons.forEach((person) => {
    sum += person.age;
  });

  return sum / persons.length;
};

const result = ageAverage();
console.log(result);