import React, { useState } from "react";
import Calculator from "./Calculator";
import Result from "./Result";

function Main() {
  const [bill, setBill] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [selectTip, setSelectTip] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isCalculed, setIsCalculed] = useState(false);
  const [selected, setSelected] = useState("");
  const [customTip, setCustomTip] = useState("");

  return (
    <div className="main_container">
      <div className="calculator_container">
        <Calculator
          bill={bill}
          setBill={setBill}
          peopleNumber={peopleNumber}
          setPeopleNumber={setPeopleNumber}
          selectTip={selectTip}
          setSelectTip={setSelectTip}
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          total={total}
          setTotal={setTotal}
          isCalculed={isCalculed}
          setIsCalculed={setIsCalculed}
          selected={selected}
          setSelected={setSelected}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
      </div>

      <div className="result_container">
        <Result
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          total={total}
          setTotal={setTotal}
          setBill={setBill}
          setPeopleNumber={setPeopleNumber}
          setSelectTip={setSelectTip}
          isCalculed={isCalculed}
          setIsCalculed={setIsCalculed}
          setSelected={setSelected}
          setCustomTip={setCustomTip}
        />
      </div>
    </div>
  );
}

export default Main;
