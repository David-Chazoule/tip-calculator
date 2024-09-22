import React from "react";
import dollar from "../styles/images/icon-dollar.svg";
import person from "../styles/images/icon-person.svg";

function Calculator() {
  return (
    <div className="calculator-box">
      <form>
        <div className="bill-box">
          <label>Bill</label>
          <span>
            <img src={dollar} alt="dollar-logo" />
            <input />
          </span>
        </div>

        <div className="select-tip-box">
          <label>Select Tip %</label>
          <div className="select-line">
            <span>5%</span>
            <span>10%</span>
            <span>15%</span>
          </div>

          <div className="select-line">
            <span>25%</span>
            <span>50%</span>
            <span className="custom-input">
              <input placeholder="Custom" />
            </span>
          </div>
        </div>

        <div className="number-people-box">
          <label>Number of People</label>
          <span className="input-people">
            <img src={person} alt="person-logo" />
            <input />
          </span>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
