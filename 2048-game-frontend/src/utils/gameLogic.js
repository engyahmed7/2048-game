//src/utils/gameLogic.js
import { transposeGrid } from "./helpers";

export const initializeGrid = () => {
  const grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  addRandomNumber(grid);
  addRandomNumber(grid);
  return grid;
};

export const addRandomNumber = (grid) => {
  let emptyCells = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }

  if (emptyCells.length === 0) return false;

  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  grid[randomCell.row][randomCell.col] = Math.random() < 0.9 ? 2 : 4;
  return true;
};

export const moveGrid = (grid, direction) => {
  switch (direction) {
    case "ArrowLeft":
      return moveLeft(grid);
    case "ArrowRight":
      return moveRight(grid);
    case "ArrowUp":
      return moveUp(grid);
    case "ArrowDown":
      return moveDown(grid);
    default:
      return grid;
  }
};

export const checkGameOver = (grid) => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] === 0) return false;
      if (col < 3 && grid[row][col] === grid[row][col + 1]) return false;
      if (row < 3 && grid[row][col] === grid[row + 1][col]) return false;
    }
  }
  return true;
};

const moveLeft = (grid) => {
  for (let row = 0; row < 4; row++) {
    let newRow = grid[row].filter((val) => val !== 0);
    for (let col = 0; col < newRow.length - 1; col++) {
      if (newRow[col] === newRow[col + 1]) {
        newRow[col] *= 2;
        newRow[col + 1] = 0;
      }
    }
    newRow = newRow.filter((val) => val !== 0);
    while (newRow.length < 4) {
      newRow.push(0);
    }
    grid[row] = newRow;
  }
  return grid;
};

const moveRight = (grid) => {
  for (let row = 0; row < 4; row++) {
    let newRow = grid[row].filter((val) => val !== 0).reverse();
    for (let col = 0; col < newRow.length - 1; col++) {
      if (newRow[col] === newRow[col + 1]) {
        newRow[col] *= 2;
        newRow[col + 1] = 0;
      }
    }
    newRow = newRow.filter((val) => val !== 0);
    while (newRow.length < 4) {
      newRow.push(0);
    }
    grid[row] = newRow.reverse();
  }
  return grid;
};

const moveUp = (grid) => {
  grid = transposeGrid(grid);
  grid = moveLeft(grid);
  grid = transposeGrid(grid);
  return grid;
};

const moveDown = (grid) => {
  grid = transposeGrid(grid);
  grid = moveRight(grid);
  grid = transposeGrid(grid);
  return grid;
};
