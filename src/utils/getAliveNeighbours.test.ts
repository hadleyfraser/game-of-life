import { createBoard } from "./createBoard";
import { getAliveNeighbours } from "./getAliveNeighbours";

describe("getAliveNeighbours()", () => {
  it("should return 0 neighbours if there are 0 alive neighbours", () => {
    expect(getAliveNeighbours(createBoard(3, 3), 1, 1)).toBe(0);
  });

  it("should return 1 neighbours if there are 1 alive neighbours", () => {
    const board = createBoard(3, 3);
    board[1][1] = true;
    expect(getAliveNeighbours(board, 0, 1)).toBe(1);
  });

  it("should return 3 neighbours if there are 3 alive neighbours", () => {
    const board = createBoard(3, 3);
    board[0][0] = true;
    board[0][1] = true;
    board[0][2] = true;
    expect(getAliveNeighbours(board, 1, 1)).toBe(3);
  });

  it("should be able to handle when the position is on the edge or the board", () => {
    const board = createBoard(3, 3);
    board[0][2] = true;
    board[1][1] = true;
    expect(getAliveNeighbours(board, 0, 0)).toBe(1);
  });
});
