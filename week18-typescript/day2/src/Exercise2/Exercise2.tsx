import React from "react";

class Product {
  constructor(readonly id: number, public name: string, public price: number) {}
  getProductInfo(): string {
    return `product ID:${this.id}, Product name: ${this.name}, Price: $${this.price}`;
  }
}

const Exercise2 = () => {
  const product = new Product(1, "Smartphone", 1200);
  const productInfoBefore = product.getProductInfo();
  // product.id=2
  const productInfoAfter = product.getProductInfo();


  return (
    <div>
      <h1>Product Info</h1>
      <h2>{productInfoBefore} </h2>
      <h2>{productInfoAfter} </h2>
    </div>
  );
};

export default Exercise2;
