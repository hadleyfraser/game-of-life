import { render, screen } from "@testing-library/react";

import { createBoard } from "../../utils/createBoard";
import { GameBoard } from "./GameBoard";

const { getByTestId, getAllByTestId } = screen;

describe("<GameBoard />", () => {
  it("should render the correct number of rows and cells in each row", () => {
    const height = 3;
    const width = 5;
    const board = createBoard(height, width);
    render(<GameBoard board={board} />);

    const gameBoard = getByTestId("board");
    expect(gameBoard.children).toHaveLength(height);
    const rows = getAllByTestId("row");
    expect(rows.every((row) => row.children.length === width)).toBe(true);
  });
});
