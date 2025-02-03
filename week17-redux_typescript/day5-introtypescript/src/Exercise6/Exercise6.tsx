import React, { useState } from "react";

interface Person {
  name: string;
  age: number;
}

const Exercise6 = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const createPerson = (name: string, age: number) => {
    setPerson({ age, name });
  };
  React.useEffect(() => {
    createPerson("Alice", 25);
  }, []);

  return (
    <div>
      <h1>
        {person
          ? `${person.name} is ${person.age} years old`
          : "no person created yet"}
      </h1>
    </div>
  );
};

export default Exercise6;
