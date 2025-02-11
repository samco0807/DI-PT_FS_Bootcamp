const formatInput = <T extends { toString: () => string }>(
  input: T
): string => {
  return input.toString();
};

const numberInput = 123;
const stringInput = "Hello";

const formattedNumber = formatInput(numberInput);
const formattedString = formatInput(stringInput);

const Exercise7 = () => {
  return (
    <div>
      <h2>Formatted Number: {formattedNumber} </h2>
      <h2>Formatted String:{formattedString} </h2>
      <input type="text" />
    </div>
  );
};

export default Exercise7;
