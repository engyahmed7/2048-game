import React from 'react';
import Cell from './Cell';

const Grid = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, cellIndex) => (
            <Cell key={cellIndex} value={value} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
