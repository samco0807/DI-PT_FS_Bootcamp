interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

const printUserDetails = (user: PremiumUser) => {
  return (
    <h2>
      Name: {user.name} - email: {user.email} - membership:{" "}
      {user.membershipLevel}
    </h2>
  );
};

const Samuel: PremiumUser = {
  id: 1,
  name: "Samuel",
  email: "samco0807@gmail.com",
  membershipLevel: "VIP",
};
printUserDetails(Samuel);

const Exercise5 = () => {
  return (
    <div>
      <h1>Exercise 5</h1>
      <h2>{printUserDetails(Samuel)} </h2>
    </div>
  );
};

export default Exercise5;
