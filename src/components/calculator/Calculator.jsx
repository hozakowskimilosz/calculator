import "./Calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator-wrapper">
      <input
        type="text"
        className="input text-right"
        value={input}
        readOnly
        max="15"
      />
      <button
        className="clear text-left background-gray"
        onClick={() => handleClick("AC")}
      >
        AC
      </button>
      <button
        className="division background-orange"
        onClick={() => handleClick("/")}
      >
        /
      </button>
      <button className="seven" onClick={() => handleClick("7")}>
        7
      </button>
      <button className="eight" onClick={() => handleClick("8")}>
        8
      </button>
      <button className="nine" onClick={() => handleClick("9")}>
        9
      </button>
      <button
        className="multiplication background-orange"
        onClick={() => handleClick("*")}
      >
        *
      </button>
      <button className="four" onClick={() => handleClick("4")}>
        4
      </button>
      <button className="five" onClick={() => handleClick("5")}>
        5
      </button>
      <button className="six" onClick={() => handleClick("6")}>
        6
      </button>
      <button className="one" onClick={() => handleClick("1")}>
        1
      </button>
      <button className="two" onClick={() => handleClick("2")}>
        2
      </button>
      <button className="three" onClick={() => handleClick("3")}>
        3
      </button>
      <button
        className="subtraction background-orange"
        onClick={() => handleClick("-")}
      >
        -
      </button>
      <button
        className="addition background-orange"
        onClick={() => handleClick("+")}
      >
        +
      </button>
      <button className="zero text-left" onClick={() => handleClick("0")}>
        0
      </button>
      <button className="coma background-gray" onClick={() => handleClick(".")}>
        .
      </button>
      <button
        className="equals background-orange"
        onClick={() => handleClick("=")}
      >
        =
      </button>
    </div>
  );
}
