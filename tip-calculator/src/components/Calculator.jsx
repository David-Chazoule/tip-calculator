import React, { useEffect, useCallback } from "react";
import dollar from "../styles/images/icon-dollar.svg";
import person from "../styles/images/icon-person.svg";

function Calculator({
  setTipAmount,
  setTotal,
  bill,
  setBill,
  peopleNumber,
  setPeopleNumber,
  selectTip,
  setSelectTip,
  setIsCalculed,
  selected,
  setSelected,
  customTip,
  setCustomTip,
}) {
  const calculateTotals = useCallback(() => {
    if (bill && peopleNumber && selectTip) {
      let bills = Number(bill);
      let peopleNumbers = Number(peopleNumber);
      let tipSelected = Number(selectTip);

      let tipsValue = bills * (tipSelected / 100);
      setTipAmount(tipsValue);

      let totaltipsvalue = tipsValue * peopleNumbers;
      setTotal(totaltipsvalue);

      setIsCalculed(true);
    }
  }, [bill, peopleNumber, selectTip, setTipAmount, setTotal, setIsCalculed]);

  useEffect(() => {
    calculateTotals();
  }, [calculateTotals]);

  const handleValueTip = (e) => {
    const value = e.target.getAttribute("value");
    setSelectTip(value);
    setCustomTip("");
    setSelected(value);
  };

  const handleNumericInput = (e, setState) => {
    const value = e.target.value;

    const numericValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
    setState(numericValue);
  };

  const handleCustomInput = (e) => {
    const value = e.target.value;
    const numericValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
    setCustomTip(numericValue);
    setSelectTip(numericValue);
    setSelected("");
  };

  const handleBlur = () => {
    if (customTip === "") {
      setSelected("");
    }
  };

  const isPeopleNumberInvalid = bill && selectTip && peopleNumber === "";

  return (
    <div className="calculator-box">
      <form>
        <div className="bill-box">
          <label>Bill</label>
          <span className={bill ? "selectedCustom" : ""}>
            <img src={dollar} alt="dollar-logo" />
            <input
              type="text"
              id="bill"
              value={bill}
              placeholder="0"
              onChange={(e) => handleNumericInput(e, setBill)}
            />
          </span>
        </div>

        <div className="select-tip-box">
          <label>Select Tip %</label>
          <div className="select-line">
            <span
              id="btn1"
              value="5"
              className={selected === "5" ? "selected" : ""}
              onClick={handleValueTip}
            >
              5%
            </span>
            <span
              id="btn2"
              value="10"
              className={selected === "10" ? "selected" : ""}
              onClick={handleValueTip}
            >
              10%
            </span>
            <span
              id="btn3"
              value="15"
              className={selected === "15" ? "selected" : ""}
              onClick={handleValueTip}
            >
              15%
            </span>

            <span
              id="btn4"
              value="25"
              className={selected === "25" ? "selected" : ""}
              onClick={handleValueTip}
            >
              25%
            </span>
            <span
              id="btn5"
              value="50"
              className={selected === "50" ? "selected" : ""}
              onClick={handleValueTip}
            >
              50%
            </span>
            <span
              className={`custom-input ${customTip ? "selectedCustom" : ""}`}
            >
              <input
                type="text"
                id="custom"
                placeholder="Custom"
                value={customTip}
                onBlur={handleBlur}
                onChange={handleCustomInput}
              />
            </span>
          </div>
        </div>

        <div className="number-people-box">
          <div>
            <label>Number of People</label>{" "}
            {isPeopleNumberInvalid ? <p>can't be zero</p> : ""}
          </div>
          <span
            className={`input-people ${isPeopleNumberInvalid ? "error" : ""} ${
              peopleNumber ? "selectedCustom" : ""
            }`}
          >
            <img src={person} alt="person-logo" />
            <input
              type="text"
              id="people"
              value={peopleNumber}
              placeholder="0"
              onChange={(e) => handleNumericInput(e, setPeopleNumber)}
            />
          </span>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
