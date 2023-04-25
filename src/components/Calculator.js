import React from 'react';
import CalculatorButton from './CalculatorButton';

function Calculator() {
  return (
    <div className="CalculatorContainer">
      <div className="row" id="results">
        0
      </div>
      <div className="row">
        <CalculatorButton label="AC" />
        <CalculatorButton label="+/-" />
        <CalculatorButton label="%" />
        <CalculatorButton label="÷" className="orange" />
      </div>
      <div className="row">
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="x" className="orange" />
      </div>
      <div className="row">
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" className="orange" />
      </div>
      <div className="row">
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" className="orange" />
      </div>
      <div className="row" id="last-row">
        <CalculatorButton label="0" className="two-cells" />
        <CalculatorButton label="." className="last-row" />
        <CalculatorButton label="=" className="orange last-row" />
      </div>
    </div>
  );
}

export default Calculator;
