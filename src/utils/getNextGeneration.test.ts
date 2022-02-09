import { createBoard } from "./createBoard";
import { getNextGeneration } from "./getNextGeneration";

describe("getNextGeneration()", () => {
  it("should update the board correctly", () => {
    const board = createBoard(6, 6);
    board[1][2] = true;
    board[2][3] = true;
    board[3][1] = true;
    board[3][2] = true;
    board[3][3] = true;

    const expectedBoard = createBoard(6, 6);
    expectedBoard[2][1] = true;
    expectedBoard[2][3] = true;
    expectedBoard[3][2] = true;
    expectedBoard[3][3] = true;
    expectedBoard[4][2] = true;

    expect(getNextGeneration(board)).toEqual(expectedBoard);
  });

  it("should bring to life outside cells correctly", () => {
    const board = createBoard(6, 6);
    board[2][5] = true;
    board[3][5] = true;
    board[4][5] = true;

    const expectedBoard = createBoard(6, 6);
    expectedBoard[3][0] = true;
    expectedBoard[3][4] = true;
    expectedBoard[3][5] = true;

    expect(getNextGeneration(board)).toEqual(expectedBoard);
  });
});
