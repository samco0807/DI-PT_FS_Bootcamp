const products = require("./products.js");

const searchProduct =(name)=>{
for (const product of products){
    if (name === product.name){
        return product
    }
}
return console.log("The product does not exist");
}

console.log(searchProduct("Blabla"));