import React from 'react';
import '../App.css';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

function Square({ position, value, takeTurn }) {
  function handleClick() {
    if(value === EMPTY) takeTurn(position)
  }

  return (
    <div className="square" onClick={handleClick}>
      {value === CIRCLE && <Circle />}
      {value === CROSS && <Cross />}
    </div>
  )
}

function Circle() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="-50 -50 100 100"
      className="circle"  
    >
      <circle cx="0" cy="0" r="40" />
    </svg>
  )
}

function Cross() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="-50 -50 100 100"
      className="cross"
    >
      <line x1="-40" y1="-40" x2="40" y2="40" />
      <line x1="-40" y1="40" x2="40" y2="-40" />
    </svg>
  )
}

export default Square;