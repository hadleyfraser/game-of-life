import deepcopy from "deepcopy";
import { useState } from "react";

import { GameBoard } from "./components/GameBoard/GameBoard";
import { createBoard } from "./utils/createBoard";

const SIZE = {
  height: 10,
  width: 10,
};

function App() {
  const [board, setBoard] = useState(createBoard(SIZE.height, SIZE.width));

  const onCellClick = (row: number, col: number) => {
    const newBoard = deepcopy(board);
    newBoard[row][col] = !newBoard[row][col];

    setBoard(newBoard);
  };

  return <GameBoard board={board} onCellClick={onCellClick} />;
}

export default App;
