import React from 'react';
import Square from "../Square/Square"
import "./Board.scss"

const Board = (props) => <div className="board">
  {Array(9).fill(null).map((row, index) =>
    <Square value={props.squares[index]} onClick={() => props.onClick(index)} key={index}></Square>
  )}
</div>



export default Board