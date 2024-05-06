// Exercise1:
const person = {
    name: "John Doe",
    age: 25,
    location: {
      country: "Canada",
      city: "Vancouver",
      coordinates: [49.2827, -123.1207],
    },
  };
  
  const {
    name,
    location: {
      country,
      city,
      coordinates: [lat, lng],
    },
  } = person;
  
  // console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
  
  // Exercise2:
  
  function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    // console.log(`Your full name is ${first} ${last} `);
  }
  
  displayStudentInfo({ first: "Elie", last: "Schoppik" });
  
  // Exercise3:
  let users = { user1: 18273, user2: 92833, user3: 90315 };
  
  // let myArray=console.log(Object.entries(users));

  
  // Exercise4:
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person("John");
  // console.log(typeof member);
  // Output: Object;

// Exercise5:
  
  // class Dog {
  //   constructor(name) {
  //     this.name = name;
  //   }
  // }
  
  // class Labrador extends Dog {
  //   constructor(name, size) {
  //     super(name);
  //     this.size = size;
  //   }
  // }
  
  // class Animal {
  //   constructor(name, type, color) {
  //     this.name = name;
  //     this.type = type;
  //     this.color = color;
  //   }
  // }
  
  // class Mamal extends Animal {
  //   constructor(name, type, color, sound) {
  //     super(name, type, color);
  //     this.sound = sound;
  //   }
  //   sound(){
  //     return this.sound, this.name, this.color, this.sound
  //   }
  // }
  
  // const farmerCow = new Mamal(name, type, color, sound)
  // farmerCow.sound("moos")
  
  // console.log(`${farmerCow.sound}, I'm a ${type}, named ${name} and I'm ${color}`);