//src/utils/helpers.js

export const transposeGrid = (grid) => {
  const transposed = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      transposed[col][row] = grid[row][col];
    }
  }
  return transposed;
};
