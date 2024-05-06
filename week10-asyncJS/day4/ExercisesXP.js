// Exercise1:
console.log("Starting ...")

const fetchExercice = () => {
    console.log("Testing ...")
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then((resp) => {
            if(resp.ok){
                return resp.json()
            } else {
                throw new Error("Wrong GIPHY")
            }
        })
        .then((obj) => {
            // console.log(obj) 
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}

fetchExercice()

// Exercice2:
const apiKey="https://api.giphy.com/v1/gifs/trending"
const searchTerm="sun"
const limit=10
const startPosition=2

const apiUrl=`https://api.giphy.com/v1/gifs/${apiKey} ${searchTerm} ${limit} ${startPosition}`


const exercice2=async()=>{
try {
    let response=await fetch('api.giphy.com/v1/gifs/trending')

} catch (error) {
    
}
}

// Exercise3:
const exercice3test1 = async () => {
    let answer = await response.json()
    let result = await console.log(objectStarWars.result)
}

const exercice3=async()=>{
    try{
        let response=await fetch('https://www.swapi.tech/api/starships/9/')
        let data=await response.json
        let result=data.result
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
}

// Exercise4:
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// 1/ "Calling"
// 2/ After 2 seconds : "resolved"
