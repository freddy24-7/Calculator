import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [currentResult, setCurrentResult] = useState(0);
  const [pendingOperation, setPendingOperation] = useState(null);
  const [hasInput, setHasInput] = useState(false);

  // Perform calculation based on the pending operation and input value
  function performCalculation(inputValue) {
    switch (pendingOperation) {
      case 'add':
        return currentResult + inputValue;
      case 'subtract':
        return currentResult - inputValue;
      case 'multiply':
        return currentResult * inputValue;
      case 'divide':
        if (inputValue !== 0) {
          return currentResult / inputValue;
        } else {
          alert("Cannot divide by zero");
          return currentResult;
        }
      default:
        return inputValue;
    }
  }

  // Handle operation button click
  function handleOperation(e, operation) {
    e.preventDefault();
    if (hasInput) {
      const inputValue = Number(inputRef.current.value) || 0;
      const newResult = performCalculation(inputValue);
      setCurrentResult(newResult);
      resetInput();
    }
    setPendingOperation(operation);
  }

  // Apply the operation when '=' button is clicked
  function calculateResult(e) {
    e.preventDefault();
    if (hasInput) {
      const inputValue = Number(inputRef.current.value) || 0;
      const newResult = performCalculation(inputValue);
      setCurrentResult(newResult);
      resetInput();
    }
    setPendingOperation(null);
    setHasInput(false);
  }

  // Reset input field and update the input state
  function resetInput() {
    inputRef.current.value = "";
    setHasInput(true);
  }

  // Reset the calculator to its initial state
  function resetCalculator(e) {
    e.preventDefault();
    setCurrentResult(0);
    setPendingOperation(null);
    setHasInput(false);
    inputRef.current.value = "";
  }

  // JSX rendering for the calculator UI
  return (
      <div className="App">
        <div>
          <h1>Simplest Working Calculator</h1>
        </div>
        <form>
          <p>{currentResult}</p>
          <input
              pattern="[0-9]*"
              ref={inputRef}
              type="number"
              placeholder="Type a number"
              onChange={() => setHasInput(true)}
          />
          <button onClick={(e) => handleOperation(e, 'add')}>add</button>
          <button onClick={(e) => handleOperation(e, 'subtract')}>subtract</button>
          <button onClick={(e) => handleOperation(e, 'multiply')}>multiply</button>
          <button onClick={(e) => handleOperation(e, 'divide')}>divide</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={resetCalculator}>reset</button>
        </form>
      </div>
  );
}

export default App;
