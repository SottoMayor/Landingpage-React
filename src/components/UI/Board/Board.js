import React from 'react';

import classes from './Board.module.css';

const Board = (props) => {
    return (
        <div className={classes.Board}>
            {props.children}
        </div>
    )
}

export default Board;
