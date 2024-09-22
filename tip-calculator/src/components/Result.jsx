import React from "react";

function Result() {
  return (
    <div className="result-box">
      <div className="tipAmount-box">
        <span>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </span>

        <h1>$ 0.00</h1>
      </div>

      <div className="Total-box">
        <div className="tipAmount-box">
          <span>
            <h3>Total</h3>
            <p>/ person</p>
          </span>

          <h1>$ 0.00</h1>
        </div>
      </div>

      <div className="btn-box">
        <button>RESET</button>
      </div>
    </div>
  );
}

export default Result;
