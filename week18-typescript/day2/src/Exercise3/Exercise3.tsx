import React from "react";

class Animal {
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return `Name: 
    ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name: string, sound: string) {
    super(name);
    this.sound = sound;
  }
}

const Exercise3 = () => {
  const dog = new Dog("Bilou", "Bark");
  const dogSound = dog.makeSound();

  return (
    <div>
      <h1>{dogSound}</h1>
    </div>
  );
};

export default Exercise3;
