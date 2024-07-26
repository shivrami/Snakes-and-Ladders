// src/components/Dice.js
import React from 'react';
import './Dice.css';

const Dice = ({ value, rolling }) => {
  return (
    <div className={`dice ${rolling ? 'rolling' : ''}`}>
      <div className="dice-face">{value}</div>
    </div>
  );
};

export default Dice;
