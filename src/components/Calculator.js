function Calculator() {
  return (
    <div className="CalculatorContainer">
      <div className="row" id="results">
        0
      </div>
      <div className="row">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange">÷</button>
      </div>
      <div className="row">
        <button type="button">7</button>
        <button type="button">9</button>
        <button type="button">9</button>
        <button type="button" className="orange">x</button>
      </div>
      <div className="row">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange">-</button>
      </div>
      <div className="row">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange">+</button>
      </div>
      <div className="row" id="last-row">
        <button type="button" className="two-cells">0</button>
        <button type="button" className="last-row">.</button>
        <button type="button" className="orange last-row">=</button>
      </div>
    </div>
  );
}

export default Calculator;
