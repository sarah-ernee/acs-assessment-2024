import React from "react";
import "./Calculator.css";

const Calculator = () => {
  const [firstNum, setFirstNum] = React.useState();
  const [secondNum, setSecondNum] = React.useState();
  const [sum, setSum] = React.useState(0);
  const [invalidInput, setInvalidInput] = React.useState(false);

  const addNum = () => {
    if (firstNum === undefined || secondNum === undefined) {
      setInvalidInput(true);
      return;
    }
    setSum(firstNum + secondNum);
    setInvalidInput(false);
  };

  return (
    <div className="calculator">
      <h1>Adding Two Numbers</h1>

      <input
        type="number"
        value={firstNum}
        onChange={(e) => setFirstNum(+e.target.value)}
        placeholder="First Number"
        required
        validationErrors={{
          isDefaultRequiredValue: "Field is required",
        }}
      />
      <input
        type="number"
        value={secondNum}
        onChange={(e) => setSecondNum(+e.target.value)}
        placeholder="Second Number"
        required
        validationErrors={{
          isDefaultRequiredValue: "Field is required",
        }}
      />

      <button onClick={() => addNum()}>Add Two Numbers</button>
      {invalidInput ? (
        <h5 className="warning">Please enter two numbers to sum</h5>
      ) : (
        ""
      )}

      <p>Total: {sum > 0 ? sum : ""}</p>
    </div>
  );
};

export default Calculator;
