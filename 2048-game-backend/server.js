const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const {
  initializeGrid,
  moveGrid,
  addRandomNumber,
  calculateScore,
  checkGameOver,
  resetGame,
} = require("./gameLogic");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

let gameState = {
  grid: initializeGrid(),
  score: 0,
  gameOver: false,
};

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.emit("gameState", gameState);

  socket.on("makeMove", (direction) => {
    try {
      const previousState = JSON.parse(JSON.stringify(gameState)); 

      gameState.grid = moveGrid(gameState.grid, direction);

      if (
        JSON.stringify(previousState.grid) !== JSON.stringify(gameState.grid)
      ) {
        addRandomNumber(gameState.grid);
        gameState.gameOver = checkGameOver(gameState.grid);
        gameState.score += calculateScore(previousState.grid, gameState.grid);
      }

      io.emit("gameState", gameState);
    } catch (error) {
      console.error("Error processing move: ", error);
      socket.emit("error", "Invalid move or server error.");
    }
  });

  socket.on("resetGame", () => {
    gameState = resetGame();
    io.emit("gameState", gameState);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
