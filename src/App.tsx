import deepcopy from "deepcopy";
import { useState } from "react";

import { Button } from "./components/StyledComponents/Button";
import { GameOfLife } from "./components/StyledComponents/GameOfLife";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { createBoard } from "./utils/createBoard";
import { getNextGeneration } from "./utils/getNextGeneration";

const SIZE = {
  height: 6,
  width: 6,
};

const createEmptyBoard = () => createBoard(SIZE.height, SIZE.width);

function App() {
  const [board, setBoard] = useState(createEmptyBoard);

  const resetBoard = () => setBoard(createEmptyBoard());

  const onCellClick = (row: number, col: number) => {
    const newBoard = deepcopy(board);
    newBoard[row][col] = !newBoard[row][col];

    setBoard(newBoard);
  };

  const nextGeneration = () => {
    const newBoard = getNextGeneration(board);

    setBoard(newBoard);
  };

  return (
    <GameOfLife>
      <GameBoard board={board} onCellClick={onCellClick} />
      <div>
        <Button onClick={nextGeneration}>Generate</Button>
        <Button onClick={resetBoard}>Reset</Button>
      </div>
    </GameOfLife>
  );
}

export default App;
