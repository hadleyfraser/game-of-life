import { createBoard } from "./createBoard";
import { handleOutsideCells } from "./handleOutsideCells";

describe("handleOutsideCells()", () => {
  const createNewBoard = () => createBoard(3, 3);
  it("should bring a cell on the bottom to life if it becomes alive outside the top of the board", () => {
    const board = createNewBoard();
    board[0][0] = true;
    board[0][1] = true;
    board[0][2] = true;

    const expectedBoard = createNewBoard();
    expectedBoard[2][1] = true;

    expect(handleOutsideCells(board, createNewBoard())).toEqual(expectedBoard);
  });

  it("should bring a cell on the top to life if it becomes alive outside the bottom of the board", () => {
    const board = createNewBoard();
    board[2][0] = true;
    board[2][1] = true;
    board[2][2] = true;

    const expectedBoard = createNewBoard();
    expectedBoard[0][1] = true;

    expect(handleOutsideCells(board, createNewBoard())).toEqual(expectedBoard);
  });

  it("should bring a cell on the left to life if it becomes alive outside the right of the board", () => {
    const board = createNewBoard();
    board[0][2] = true;
    board[1][2] = true;
    board[2][2] = true;

    const expectedBoard = createNewBoard();
    expectedBoard[1][0] = true;

    expect(handleOutsideCells(board, createNewBoard())).toEqual(expectedBoard);
  });

  it("should bring a cell on the left to life if it becomes alive outside the right of the board", () => {
    const board = createNewBoard();
    board[0][2] = true;
    board[1][2] = true;
    board[2][2] = true;

    const expectedBoard = createNewBoard();
    expectedBoard[1][0] = true;

    expect(handleOutsideCells(board, createNewBoard())).toEqual(expectedBoard);
  });
});
