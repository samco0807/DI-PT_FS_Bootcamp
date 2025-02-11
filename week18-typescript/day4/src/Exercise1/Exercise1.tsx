
type PersonWithAddress  = Person & Address;

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
}

const person: PersonWithAddress = {
  
  name: "John Doe",
  age:32,
  street: "5 La Guardia",
  city: "Tel Aviv",
}; 

const Exercise1 = () => {

  return (
    <div>
      <h2>{person.name}</h2> 
      <h2>{person.age}</h2> 
      <h2>{person.street}</h2> 
      <h2>{person.city}</h2> 
    </div>
  );
};

export default Exercise1;
