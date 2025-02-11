const logLength = <T extends { length: number }>(items: T): void => {
  return console.log(`Length:${items.length}`);
};

const arrayExemple = [1, 2, 3];
const stringExemple = "Hello World";

logLength(arrayExemple);
logLength(stringExemple);

const Exercise5 = () => {
  return (
    <div>
      <h1>Exercise 5</h1>
      <h2>Look at the console</h2>
    </div>
  );
};

export default Exercise5;