import { Board } from "../types";

const isPosSafe = (pos: number, maxPos: number) => pos >= 0 && pos <= maxPos;

export const getAliveNeighbours = (board: Board, row: number, col: number) => {
  const neighbours = [
    { row: row - 1, col: col - 1 },
    { row: row - 1, col: col },
    { row: row - 1, col: col + 1 },
    { row: row, col: col - 1 },
    { row: row, col: col + 1 },
    { row: row + 1, col: col - 1 },
    { row: row + 1, col: col },
    { row: row + 1, col: col + 1 },
  ];

  const boardRows = board.length - 1;
  const boardCols = board[0].length - 1;
  return neighbours.reduce((total, { row, col }) => {
    if (!isPosSafe(row, boardRows) || !isPosSafe(col, boardCols)) {
      return total;
    }

    const liveNeighbour = board[row][col];
    if (liveNeighbour) {
      return total + 1;
    }
    return total;
  }, 0);
};
