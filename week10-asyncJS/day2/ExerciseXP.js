     
// Exercise1:
let number=console.log("Enter a number: "); 
let compareToTen = new Promise ((resolve, rejected)=>{
  if(number<=10){
    resolve('Yeees');
  } else{
    rejected('Fail')
  }
})
.catch(error=>console.log(error))

// Ex 2:
const promise = new Promise ((resolve, reject) => {
  setTimeout(()=>{
    resolve();
  }, 2000);
  reject()
});

promise.then((res)=> {
    console.log("success");
  })
  
// Exercise2:

// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const ex2=new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Success");
        }, 4000)
    });

const executePromise = async () => {
    try {
        let success=await ex2
        console.log(success);        
    } catch (error) {
     console.log(error);   
    }
}

executePromise()

// Ex 3:
const promiseResolve=(number)=new Promise ((resolve, reject) => {
resolve(3);
reject("error")
})

Promise.reject(error)=new Promise ((resolve, reject) => {
  reject("Boo!")})
