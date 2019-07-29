import React from  'react';
import "./Square.scss"

const Square = (props) => <button onClick={props.onClick} className="square">{props.value}</button>

export default Square