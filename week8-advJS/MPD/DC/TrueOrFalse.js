// Create a function that returns true if all parameters are truthy, and false otherwise.
const allTruthy = (...elements) => {
  return elements.every((element) => !!element);
};
