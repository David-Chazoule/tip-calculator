import React from "react";
import Calculator from "./Calculator";
import Result from "./Result";

function Main() {
  return (
    <div className="main_container">
      <div className="calculator_container">
        <Calculator />
      </div>

      <div className="result_container">
        <Result />
      </div>
    </div>
  );
}

export default Main;
