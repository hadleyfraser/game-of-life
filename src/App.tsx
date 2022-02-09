import { GameBoard } from "./components/GameBoard/GameBoard";
import { createBoard } from "./utils/createBoard";

const SIZE = {
  height: 10,
  width: 10,
};

function App() {
  const board = createBoard(SIZE.height, SIZE.width);
  return <GameBoard board={board} />;
}

export default App;
