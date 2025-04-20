import React from "react";
import { User, Product, Order } from "./types";

const handleData = (data: User | Product | Order): string => {
  if (data.type === "user") {
    return `Hello ${data.name} ${data.age}`;
  } else if (data.type === "product") {
    return `Your product is: ${data.id} ${data.price}`;
  } else if (data.type === "order") {
    return `Your order is: ${data.orderId}, ${data.amount}`;
  } else {
    return "Received unknown data type";
  }
};

const sampleUser: User = {
  type: "user",
  name: "John",
  age: 30,
};

const sampleProduct: Product = {
  type: "product",
  id: 1,
  price: 100,
};

const sampleOrder: Order = {
  type: "order",
  orderId: "12345",
  amount: 200,
};
const DailyChallenge = () => {
  return (
    <div>
      <h2> {handleData(sampleUser)}</h2>
      <h2> {handleData(sampleProduct)}</h2>
      <h2> {handleData(sampleOrder)}</h2>
    </div>
  );
};

export default DailyChallenge;
