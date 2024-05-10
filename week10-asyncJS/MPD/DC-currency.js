// create a function to fetch currency conversion rate

const fetchCurrencies = async () => {
const apiUrl = `https://v6.exchangerate-api.com/v6/2b9799ae7f2f243b7fa1e9da/codes`;
  
const response = await fetch(apiUrl);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    const rate = data.supported_codes
    console.log(rate);
    return data.result;
  } else {
    throw new Error("Failed to retrieve currency data");
  }
};
fetchCurrencies()


const populateDropDown = (codes) => {
    // console.log("codes: ", codes);
  const entries = Object.entries(codes);
//   console.log("entries", entries);

  for (const entry of entries) {
    const [index, [code, name]] = entry;
    const option = document.createElement("option");
    const option2 = document.createElement("option2");
    option.innerText = name;
    option2.innerText = name;
    option.value = code;
    option2.value = code;
    document.getElementById("from").appendChild(option);
    document.getElementById("to").appendChild(option2);
    
  }
};

populateDropDown()

//   function to convert the currency amount
const convertCurrency = async () => {
  const fromCurrency = document.querySelector("#from").value;
  const toCurrency = document.querySelector("#to").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const conversionRates = await retrieveCurrency();
  const initialRate = conversionRates[initialCurrency];

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return data.result;
    }
    throw new Error("The currency does not exist");
  } catch (error) {
    console.log("Serveur error", error);
  }
};

const button = document.getElementById("convert");
button.addEventListener("click", fetchCurrencies);

//   function to display the currency change in the DOM
// const displayCurrency=async()=>{
//         // put the currency in a variable
//       const currency=await convertCurrency()
//     //   select the infos section to display the informations
//       const currencyAmount=document.querySelector(".result")
//     //   insert the converted currency in the HTML
//       currencyAmount.innerHTML=`
//       <h4>currency: ${currency.currencyAmount}</h4>
//       `
//   }

// Select the button and convert the currency
// const button = document.querySelector("#changeCurrency");
//           button.addEventListener("click", displayCurrency);
