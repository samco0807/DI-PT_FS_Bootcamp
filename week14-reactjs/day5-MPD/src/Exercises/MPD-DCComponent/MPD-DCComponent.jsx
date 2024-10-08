import { useState } from "react";
import "./MPD-DCComponent.css";

const Calculator = () => {
  const [numberEntered1, setNumberEntered1] = useState("");
  const [numberEntered2, setNumberEntered2] = useState("");
  const [result, setResult] = useState("");

  const handleNumber1Change = (e) => {
    setNumberEntered1(e.target.value);
  };
  const handleNumber2Change = (e) => {
    setNumberEntered2(e.target.value);
  };

  const calculateResult = (e) => {
    e.preventDefault();
    let res = parseFloat(numberEntered1) + parseFloat(numberEntered2);
    // setResult to update the state of result
    setResult(res);
  };

  return (
    <>
      <div className="container">
        <div className="calculate">
          <form onSubmit={calculateResult}>
            <h2>Adding Two Number</h2>
            <input
              className="num1"
              name="number"
              type="number"
              value={numberEntered1}
              onChange={handleNumber1Change}
            ></input>
            <input
              className="num2"
              name="number"
              type="number"
              value={numberEntered2}
              onChange={handleNumber2Change}
            ></input>
            <div>
              <button type="submit">Add Them!</button>
            </div>
          </form>
          <div>
            <h1 className="result">{result} </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
