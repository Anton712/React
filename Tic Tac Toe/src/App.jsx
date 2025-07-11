import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx"
import GameOver from "./components/GameOVer.jsx"
import { WINNING_COMBINATIONS } from "./assets/winning-combinations.js"

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS)

  const currentPlayer = deriveActivePlayer(gameTurns);

  function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
    }

    return gameBoard;
  }

  function deriveWinner(gameBoard, players) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (firstSquareSymbol
        && firstSquareSymbol === secondSquareSymbol
        && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
      }
    }

    return winner;
  }

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers(previousPlayers => {
      return {
        ...previousPlayers,
        [playerSymbol]: newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onChangeName={handlePlayerNameChange} />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log
        turns={gameTurns} />
    </main >
  )
}

export default App
