import { createBoard } from "./createBoard";

describe("createBoard()", () => {
  it("should create a board with 8 rows and 4 columns when passed a height of 8 and width of 4 with a state of false", () => {
    const height = 8;
    const width = 4;
    const board = createBoard(height, width);
    expect(board).toHaveLength(height);
    expect(board.every((row) => row.length === width)).toBe(true);
    expect(board.every((row) => row.every((cell) => cell === false))).toBe(true);
  });

  it("should create a board with 4 rows and 7 columns when passed a height of 4 and width of 7 with a state of false", () => {
    const height = 4;
    const width = 7;
    const board = createBoard(height, width);
    expect(board).toHaveLength(height);
    expect(board.every((row) => row.length === width)).toBe(true);
    expect(board.every((row) => row.every((cell) => cell === false))).toBe(true);
  });
});
