import classes from './Input.module.css';
import React from 'react';

const Input = (props) => {

    //Change defaultValue per value and onChange

    return (
        <div className={classes.Input}>
            
            <label>
                {props.inputName}*
            </label>

            <input type={props.inputType} defaultValue={props.value}  />

        </div>
    )
}

export default Input;
