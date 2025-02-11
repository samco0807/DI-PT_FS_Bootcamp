type alphanumeric = string | number;
const describeValue = (a: alphanumeric) => {
  if (typeof a === "number") {
    return "This is a number";
  }
  if (typeof a === "string") {
    return "This is a string";
  }
};
describeValue(1);

const Exercise2 = () => {
  return (
    <div>
      {" "}
      
      <h2>1 {describeValue(1)}</h2>{" "}
    </div>
  );
};

export default Exercise2;
