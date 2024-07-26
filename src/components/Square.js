// src/components/Square.js
import React from 'react';
import './Square.css';

const Square = ({ number, isPlayer1, isPlayer2 }) => {
  return (
    <div className="square">
      {isPlayer1 && <div className="player player1">P1</div>}
      {isPlayer2 && <div className="player player2">P2</div>}
    </div>
  );
};

export default Square;
