import classes from './Input.module.css';
import React from 'react';

const Input = (props) => {

    return (
        <div className={classes.Input}>
            
            <label>
                {props.inputName}*
            </label>

            <input type={props.inputType}  />

        </div>
    )
}

export default Input;
