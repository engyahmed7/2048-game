//src/components/Cell.js
import React from "react";

const Cell = ({ value }) => {
  const className = `cell cell-${value}`;

  return <div className={className}>{value !== 0 ? value : ""}</div>;
};

export default Cell;
