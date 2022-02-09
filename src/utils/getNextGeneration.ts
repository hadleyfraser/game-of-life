import { Board } from "../types";
import { getNewCellState } from "./getNewCellState";
import { handleOutsideCells } from "./handleOutsideCells";

export const getNextGeneration = (board: Board) => {
  const newBoard = board.map((row, rowIdx) =>
    row.map((_, colIdx) => getNewCellState(board, rowIdx, colIdx)),
  );
  return handleOutsideCells(board, newBoard);
};
