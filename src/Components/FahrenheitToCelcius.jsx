import React, { useState } from "react";
import "./style.css";
const FahrenheitToCelcius = () => {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsius, setCelsius] = useState(0);

  const convertToFahrenheit = () => {
    const celsiusValue = ((fahrenheit - 32) * 5) / 9;
    setCelsius(celsiusValue);
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
        Fahrenheit to Celsius Converter !
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <label>Fahrenheit : </label> <br />
            <input
              type="number"
              value={fahrenheit}
              onChange={(e) => setFahrenheit(e.target.value)}
            />
          </div>
          <div className="btn">
            <button onClick={convertToFahrenheit}>Convert</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div> 

          <div className="output"> Celsius : {celsius}</div>
        </div>
      </form>
    </div>
  );
};

export default FahrenheitToCelcius;
