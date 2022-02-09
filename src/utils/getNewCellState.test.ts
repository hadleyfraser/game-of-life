import { createBoard } from "./createBoard";
import { getNewCellState } from "./getNewCellState";

describe("getNewCellState()", () => {
  it("should return true if the cell is dead and there are 3 live neighbours", () => {
    const board = createBoard(3, 3);
    board[0][0] = true;
    board[0][1] = true;
    board[0][2] = true;
    expect(getNewCellState(board, 1, 1)).toBe(true);
  });

  it("should return true if the cell is alive and it has 2 live neighbours", () => {
    const board = createBoard(3, 3);
    board[0][0] = true;
    board[1][1] = true;

    board[0][2] = true;
    expect(getNewCellState(board, 1, 1)).toBe(true);
  });

  it("should return true if the cell is alive and it has 3 live neighbours", () => {
    const board = createBoard(3, 3);
    board[0][0] = true;
    board[0][1] = true;
    board[0][2] = true;

    board[1][1] = true;
    expect(getNewCellState(board, 1, 1)).toBe(true);
  });

  it("should return false if the cell is alive and it less than 2 live neighbours", () => {
    const board = createBoard(3, 3);
    board[0][0] = true;

    board[1][1] = true;
    expect(getNewCellState(board, 1, 1)).toBe(false);
  });

  it("should return false if the cell is alive and it more than 3 live neighbours", () => {
    const board = createBoard(3, 3);
    board[0][0] = true;
    board[0][1] = true;
    board[0][2] = true;
    board[1][0] = true;

    board[1][1] = true;
    expect(getNewCellState(board, 1, 1)).toBe(false);
  });
});
