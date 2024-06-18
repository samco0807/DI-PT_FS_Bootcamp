// create a function to fetch currency conversion rate

// Fetch the currency in the API
const fetchCurrencies = async () => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/2b9799ae7f2f243b7fa1e9da/codes`
    );
    const data = await response.json();
    populateDropDown(data.supported_codes);
  } catch (error) {
    console.log("Failed to fetch currency: ", error);
  }
};

// ADD ENTRIES IN THE DROPDOWN MENU
const populateDropDown = (codes) => {
  // select the from element
  const fromDropDown = document.querySelector("#from");
  // select the "to" element
  const toDropDown = document.querySelector("#to");
  // For each code in the Object
  codes.forEach(([code, name]) => {
    const option = document.createElement("option");
    option.value = code;
    option.text = `${name} (${code})`;
    fromDropDown.appendChild(option);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.text = `${name} (${code})`;
    toDropDown.appendChild(option2);
  });
};

// const button = document.querySelector("#convert");
// button.addEventListener("click", fetchCurrencies);

const handleClick = async () => {
  const fromCurrency = document.querySelector("#from").value;
  const toCurrency = document.querySelector("#to").value;
  const amount = document.querySelector("#changeCurrency").value;

  if (fromCurrency && toCurrency && amount) {
    const url = `https://v6.exchangerate-api.com/v6/2b9799ae7f2f243b7fa1e9da/pair/${fromCurrency}/${toCurrency}/${amount}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const result = data.conversion_result;
      document.querySelector(
        "#result"
      ).innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
      console.log("Failed to convert currency", error);
    }
  } else {
    document.querySelector("#result").innerText = "Please fill all the fields";
  }
};

// Display the conversion automatic while typing on the keyboard
document
  .querySelector("#changeCurrency")
  .addEventListener("keyup", handleClick);

// Change automatically the amount according to currency
document.querySelector("#from").addEventListener("change", handleClick);
document.querySelector("#to").addEventListener("change", handleClick);

fetchCurrencies();
