import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from "./assets/winning-combinations.js"

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(previousTurns => {
      let currentPlayer = deriveActivePlayer(previousTurns);
      if (previousTurns.length > 0 && previousTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: currentPlayer
      }, ...previousTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"} />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"} />
        </ol>

        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>
      <Log
        turns={gameTurns} />
    </main >
  )
}

export default App
