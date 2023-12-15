import React, { useState } from "react";
import "./style.css";

const CelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const convertToCelsius = () => {
    const fahrenheitValue = (celsius * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
   const Reset = (e) => {
     setCelsius(0);
     setFahrenheit(0);
   };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "600",
          marginTop: "80px",
          letterSpacing: "2px",
          marginBottom: "-5px",

          color: "white",
        }}
      >
        Celsius to Fahrenheit Converter !
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <label>Celsius : </label> <br />
            <input
              type="number"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
            />
          </div>
          <div className="btn">
            <button onClick={convertToCelsius}>Convert</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div>

          <div className="output"> Fahrenheit : {fahrenheit}</div>
        </div>
      </form>
    </div>
  );
};

export default CelsiusToFahrenheit;
