const products = require("./products.js");

const searchProduct =(name)=>{
for (const product of products){
    if (name === product.name){
        return product
    }
}
return console.log("Le produit n'existe pas");
}

console.log(searchProduct("Apple"));