//src/components/Game.js
import React from 'react';
import Grid from './Grid';

const Game = ({ grid, gameOver }) => {
  return (
    <div className="game">
      {gameOver && <p className="game-over">Game Over!</p>}
      <Grid grid={grid} />
    </div>
  );
};

export default Game;
