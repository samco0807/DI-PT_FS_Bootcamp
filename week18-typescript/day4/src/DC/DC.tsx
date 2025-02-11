type User = {
  type: 'user';
  name: string;
  age: number;
 };
 
 type Product = {
  type: 'product';
  id: number;
  price: number;
 };
 
 type Order = {
  type: 'order';
  orderId: string;
  amount: number;
 };



const handleData =<user, product, order> (array:[User|Product|Order]):string => {
  if (array===User) {
    return {user.name} {user.age}
  }
  if (array===product) {
    return {product.id} {product.price}
  }
  if (order) {
    return{products.map(product=>(product.id, product.price)) }
    
  }
}

const DailyChallenge = () => {
  return (
    <>
     
    </>
  );
};

export default DailyChallenge;