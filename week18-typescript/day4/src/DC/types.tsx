export type User = {
  type: "user";
  name: string;
  age: number;
};

export type Product = {
  type: "product";
  id: number;
  price: number;
};

export type Order = {
  type: "order";
  orderId: string;
  amount: number;
};
