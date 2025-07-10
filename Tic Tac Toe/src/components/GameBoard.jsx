const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({onSelectSquare}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((previousBoard) => {
  //     const updatedBoard = [...previousBoard.map(innerArray => [...innerArray])]; // create a copy of the board
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   })

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>))
            }
          </ol>
        </li>))
      }
    </ol>
  )
}