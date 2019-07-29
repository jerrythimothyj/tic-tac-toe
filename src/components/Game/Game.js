import React, { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from "../../utilities/Game"
import "./Game.scss";

const Game = () => {

  const [isXNext, setIsXNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [moveHistory, setMoveHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ]);
  const current = moveHistory[stepNumber]

  const handleClick = (index) => {
    const history = moveHistory.slice(0, stepNumber + 1)
    const current = history[history.length - 1];
    const squares = current.squares.slice()
    const winner = calculateWinner(squares)

    if (winner || squares[index]) {
      return
    }

    squares[index] = isXNext ? 'X' : 'O';

    setMoveHistory(history.concat({
      squares
    }))
    setIsXNext(!isXNext)
    setStepNumber(history.length)
  }

  const jumpToMove = (index) => {
    setIsXNext(index % 2 === 0)
    setStepNumber(index)
  }

  const getMoves = () => {
    return moveHistory.map((step, index) => <li key={index}>
      <button onClick={() => { jumpToMove(index) }}>
        {index ? `Go to #${index}` : 'Start the game'}
      </button>
    </li>
    )
  }

  const getStatus = () => {
    const current = moveHistory[stepNumber]
    const winner = calculateWinner(current.squares)

    if (winner) {
      return `Winner is ${winner}`
    } else {
      return `Next planer is ${isXNext ? 'X' : `O`}`
    }
  }

  return <div className="game">
    <div className="game-board">
      <Board onClick={handleClick} squares={current.squares}></Board>
      <div className="game-info">
        <div className="status">{getStatus()}</div>
        <ul>{getMoves()}</ul>
      </div>
    </div>
  </div>
}


export default Game