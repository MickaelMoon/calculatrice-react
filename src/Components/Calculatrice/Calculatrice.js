import React, { useState } from "react";
import "./Calculatrice.css";

export default function Calculatrice() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["%", "/", "+", "-", "*", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0, -1)));
    } else {
      setResult(eval(value.toString()));
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="component-clavier">
          <div className="operators">
            <button onClick={deleteLast}>DEL</button>
            <button onClick={() => updateCalc("%")}>%</button>
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>x</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc("+")}>+</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
