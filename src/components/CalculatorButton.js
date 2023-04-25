import React from 'react';

function CalculatorButton(props) {
  return (
    /* eslint-disable react/destructuring-assignment */
    /* eslint-disable react/prop-types */
    <button type="button" className={props.className}>
      {props.label}
    </button>
  );
}

export default CalculatorButton;
