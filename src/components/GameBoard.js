// src/components/GameBoard.js
import React, { useState } from 'react';
import Square from './Square';
import Dice from './Dice';
import './GameBoard.css';
import boardImage from './assets/snakes-and-ladders-board-game.jpeg';

const ladders = { 4:25, 13:46 ,33:49, 50: 69, 42: 63,74:92,62:81 };
const snakes = { 27: 5, 40: 3, 43: 18, 54: 31,66:45,76:58,89:53,99:41 };

const GameBoard = () => {
  const [player1Pos, setPlayer1Pos] = useState(1);
  const [player2Pos, setPlayer2Pos] = useState(1);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const dice = Math.floor(Math.random() * 6) + 1;
      setDiceValue(dice);
      movePlayer(dice);
      setRolling(false);
    }, 1000);
  };

  const movePlayer = (dice) => {
    if (winner) return; // Prevent moves after winning

    let playerPos = isPlayer1Turn ? player1Pos : player2Pos;
    let setPlayerPos = isPlayer1Turn ? setPlayer1Pos : setPlayer2Pos;

    let newPos = playerPos + dice;

    if (newPos > 100) {
      setIsPlayer1Turn(!isPlayer1Turn); // Skip turn if roll exceeds 100
      return;
    }

    const finalPos = ladders[newPos] || snakes[newPos] || newPos;

    if (finalPos === 100) {
      setPlayerPos(100);
      setWinner(isPlayer1Turn ? 'Player 1' : 'Player 2');
    } else {
      setPlayerPos(finalPos);
    }

    setIsPlayer1Turn(!isPlayer1Turn);
  };

  const renderBoard = () => {
    const squares = [];
    for (let row = 9; row >= 0; row--) {
      for (let col = 0; col < 10; col++) {
        const number = row % 2 === 0 ? row * 10 + col + 1 : row * 10 + (9 - col) + 1;
        squares.push(
          <Square
            key={number}
            number={number}
            isPlayer1={number === player1Pos}
            isPlayer2={number === player2Pos}
          />
        );
      }
    }
    return squares;
  };

  return (
    <div className="game-board">
      {winner && <div className="winner-message">{winner} Wins! Congratulations!</div>}
      <div className="board" style={{ backgroundImage: `url(${boardImage})` }}>
        {renderBoard()}
      </div>
      <Dice value={diceValue} rolling={rolling} />
      <button onClick={rollDice} disabled={rolling || winner !== null}>Roll Dice</button>
    </div>
  );
};

export default GameBoard;
