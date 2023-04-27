import { useState, React } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [objData, setObjData] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const newObject = calculate(objData, value);
    setObjData(newObject);
  };

  return (
    <div className="CalculatorContainer">
      <div className="row" id="results">
        {objData.next === null ? objData.total : objData.next}
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="orange" onClick={() => handleClick('÷')}>÷</button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="orange" onClick={() => handleClick('x')}>x</button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="orange" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="orange" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="row" id="last-row">
        <button type="button" className="two-cells" onClick={() => handleClick('0')}>0</button>
        <button type="button" className="last-row" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="orange last-row" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
