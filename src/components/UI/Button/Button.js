import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div className={classes.Button} onClick={props.clicked}>
            <button>
                {props.children}
            </button>
        </div>
    )
}

export default Button;
