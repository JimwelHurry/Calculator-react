import React from 'react';
import './Keypad.css';

const Keypad = ({ onButtonClick }) => {
  const keys = [
    ['C', 'DEL', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <div className="keypad">
      {keys.flat().map((key) => (
        <button
          key={key}
          onClick={() => onButtonClick(key)}
          className={key === '=' ? 'orange' : key === 'C' || key === 'DEL' || key === '%' || key === '/' ? 'gray' : ''}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
