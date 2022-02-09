import React from "react";

import { Board } from "../StyledComponents/Board";
import { Cell } from "../StyledComponents/Cell";
import { Row } from "../StyledComponents/Row";

interface IBoardProps {
  board: boolean[][];
  onCellClick(row: number, col: number): void;
}

export const GameBoard: React.FC<IBoardProps> = ({ board, onCellClick }) => {
  return (
    <Board data-testid="board">
      {board.map((rowCells, row) => (
        <Row key={`row-${row}`} data-testid="row">
          {rowCells.map((isAlive, col) => (
            <Cell
              onClick={() => onCellClick(row, col)}
              key={`${row}-${col}`}
              data-testid="cell"
              isAlive={isAlive}
            />
          ))}
        </Row>
      ))}
    </Board>
  );
};
