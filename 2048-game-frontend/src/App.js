import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Game from "./components/Game";
import "./styles/styles.css";

const socket = io("http://localhost:5000");

const App = () => {
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0); 

  useEffect(() => {
    socket.on("gameState", (newGameState) => {
      setGrid(newGameState.grid);
      setGameOver(newGameState.gameOver);
      setScore(newGameState.score); 
    });

    return () => {
      socket.off("gameState");
    };
  }, []);

  const handleKeyPress = (event) => {
    if (gameOver) return;

    let direction;
    switch (event.key) {
      case "ArrowLeft":
        direction = "ArrowLeft";
        break;
      case "ArrowRight":
        direction = "ArrowRight";
        break;
      case "ArrowUp":
        direction = "ArrowUp";
        break;
      case "ArrowDown":
        direction = "ArrowDown";
        break;
      default:
        return;
    }

    socket.emit("makeMove", direction);
  };

  const handleReset = () => {
    socket.emit("resetGame");
  };

  return (
    <div className="app" tabIndex="0" onKeyDown={handleKeyPress}>
      <h1>2048 Game</h1>
      <h2>Score: {score}</h2>
      <Game grid={grid} gameOver={gameOver} />
      {gameOver && <h3>Game Over!</h3>}
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default App;
