import { Board } from "../types";
import { getAliveNeighbours } from "./getAliveNeighbours";

export const getNewCellState = (board: Board, row: number, col: number) => {
  const liveNeighbours = getAliveNeighbours(board, row, col);
  const isAlive = board[row]?.[col];

  if (!isAlive) return liveNeighbours === 3;

  if (liveNeighbours === 2 || liveNeighbours === 3) return true;

  return false;
};
