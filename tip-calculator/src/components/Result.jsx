import React from "react";

function Result({
  tipAmount,
  total,
  setTipAmount,
  setTotal,
  setBill,
  setPeopleNumber,
  setSelectTip,
  isCalculed,
  setIsCalculed,
  setSelected,
  setCustomTip,
}) {

  //reset 
  const handleReset = () => {
    setTipAmount(0);
    setTotal(0);
    setBill("");
    setPeopleNumber("");
    setSelectTip("");
    setIsCalculed(false);
    setSelected("");
    setCustomTip("");
  };

  return (
    <div className="result-box">
      <div>
        <div className="tipAmount-box">
          <span>
            <h5>Tip Amount</h5>
            <p>/ person</p>
          </span>

          <h1>{isCalculed ? "$" + tipAmount.toFixed(2) : "$0.00"}</h1>
        </div>

        <div className="Total-box">
          <div className="tipAmount-box">
            <span>
              <h5>Total</h5>
              <p>/ person</p>
            </span>

            <h1>{isCalculed ? "$" + total.toFixed(2) : "$0.00"}</h1>
          </div>
        </div>

        <div className="btn-box">
          <button
            className={isCalculed ? "" : "notCalculed"}
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
