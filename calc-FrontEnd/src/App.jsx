import { useState } from "react";
import { callApi } from "./api";
import "./App.css";

function App() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = async (operation) => {
    try {
      const res = await callApi("GET", `${operation}/${A}/${B}`);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calc-container">
      <h1 className="calc-title">Arithmetic Calculator</h1>

      <div className="calc-display">
        <p>{result !== "" ? result : "0"}</p>
      </div>

      <div className="calc-inputs">
        <input
          type="number"
          placeholder="A value"
          value={A}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          placeholder="B value"
          value={B}
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      <div className="calc-buttons">
        <button onClick={() => handleOperation("add")}>+</button>
        <button onClick={() => handleOperation("sub")}>−</button>
        <button onClick={() => handleOperation("mul")}>×</button>
        <button onClick={() => handleOperation("div")}>÷</button>
        <button onClick={() => handleOperation("mod")}>%</button>
      </div>
    </div>
  );
}

export default App;
