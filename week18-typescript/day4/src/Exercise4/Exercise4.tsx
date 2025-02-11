const getFirstElement = (a: (string | number)[]): string => {
  return a[0] as string;
};

const arrayAlphanumeric: (string | number)[] = [132, "b", 2];
const firstElement = getFirstElement(arrayAlphanumeric);

const Exercise4 = () => {
  return (
    <div>
      {" "}
      <h2>{firstElement}</h2>{" "}
    </div>
  );
};

export default Exercise4;
