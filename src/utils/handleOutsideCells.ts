import { Board } from "../types";
import { getNewCellState } from "./getNewCellState";

// if a cell comes to life outside the board it needs to wrap to the other side
export const handleOutsideCells = (board: Board, newBoard: Board) => {
  const boardRows = board.length - 1;
  const boardCols = board[0].length - 1;

  // if a cells comes to life one row above or below the board, bring that cell to life
  // on the opposite side on the board
  for (let i = 0; i < boardCols; i++) {
    const topIsAlive = getNewCellState(board, -1, i);
    const topBottomAlive = getNewCellState(board, boardRows + 1, i);

    if (topIsAlive) {
      newBoard[boardRows][i] = true;
    }

    if (topBottomAlive) {
      newBoard[0][i] = true;
    }
  }

  // if a cells comes to life one column to the left or right of the board, bring that
  // cell to life on the opposite side on the board
  for (let i = 0; i < boardRows; i++) {
    const leftIsAlive = getNewCellState(board, i, -1);
    const rightIsAlive = getNewCellState(board, i, boardCols + 1);

    if (leftIsAlive) {
      newBoard[i][boardCols] = true;
    }

    if (rightIsAlive) {
      newBoard[i][0] = true;
    }
  }

  return newBoard;
};
