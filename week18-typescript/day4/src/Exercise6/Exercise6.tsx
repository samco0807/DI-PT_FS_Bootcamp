type Employee = Person & Job;

interface Person {
  name: string;
  age: number;
}

interface Job {
  position: string;
  departement: string;
}

const manager: Employee = {
  name: "Samuel",
  age: 32,
  position: "manager",
  departement: "SI",
};

const developer: Employee = {
  name: "Samantha",
  age: 35,
  position: "developer",
  departement: "SI",
};

const describeEmployee = (employee: Employee) => {
  if (employee === manager) {
    return "You are manager";
  }
  if (employee === developer) {
    return "You are developer";
  }
};

const Exercise6 = () => {
  return (
    <div>
      <h1>Exercise 6</h1>
      <h2>{manager.name}: {describeEmployee(manager)} </h2>
      <h2>{developer.name} {describeEmployee(developer)} </h2>
    </div>
  );
};

export default Exercise6;
