// src/App.js
import React from 'react';
import GameBoard from './components/GameBoard';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Snakes and Ladders</h1>
      <GameBoard />
    </div>
  );
};

export default App;
