import { fireEvent, render, screen } from "@testing-library/react";

import { createBoard } from "../../utils/createBoard";
import { GameBoard } from "./GameBoard";

const { getByTestId, getAllByTestId } = screen;

const onCellClick = jest.fn();

const height = 3;
const width = 5;

const renderBoard = () => {
  const board = createBoard(height, width);
  render(<GameBoard board={board} onCellClick={onCellClick} />);
};

describe("<GameBoard />", () => {
  it("should render the correct number of rows and cells in each row", () => {
    renderBoard();

    const gameBoard = getByTestId("board");
    expect(gameBoard.children).toHaveLength(height);

    const rows = getAllByTestId("row");
    expect(rows.every((row) => row.children.length === width)).toBe(true);
  });

  it("should call onCellClick with the correct position of the cell", () => {
    renderBoard();

    const rows = getAllByTestId("row");

    fireEvent.click(rows[0].children[4]);
    expect(onCellClick).toBeCalledWith(0, 4);

    fireEvent.click(rows[2].children[1]);
    expect(onCellClick).toBeCalledWith(2, 1);
  });
});
