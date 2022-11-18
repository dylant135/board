import React from "react";
import Square from "./Square";

export default function Board(props) {

    let theBoard = []
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            const ids = props.boardIds
            const theId = ids[i][j]
            const n = props.boardColors[i][j]
            const color = n === 1 ? 'white' : 'black'
            const theSquare = <Square
                                key={theId}
                                id={theId}
                                className={color} />
            theBoard.push(theSquare)
        }
    }

    return (
        <div className="board">
            {theBoard}
        </div>
    )
}