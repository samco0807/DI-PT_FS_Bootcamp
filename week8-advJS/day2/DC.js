let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries =()=>{
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    })
}

const cloneGroceries =() => {
    let user = client
    client="Betty"
    // Will we also see this modification in the user variable ? Why ? No, because it is local scope vs global scope
    groceries.totalPrice="35$"
    groceries.other.paid=false
    // Will we also see this modification in the shopping object ? Why ? Yes, because it is in the local scope vs global scope
}