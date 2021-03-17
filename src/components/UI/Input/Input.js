import classes from './Input.module.css';
import React from 'react';

const Input = (props) => {

    const invalidCondition = !(props.validation.valid) && props.validation.touched

    let validationComments;
    if (invalidCondition){
        validationComments = (
            <span style={{
                fontSize: '14px',
                color: 'red'
            }}> { props.validation.message } </span>
        )
    }else{
        validationComments = null;
    }

    return (
        <div className={classes.Input}>
            
            <label>
                {props.inputName}*
            </label>

            <input type={props.inputType} value={props.value} onChange={props.changed} 
            className={
                invalidCondition ? classes.Invalid : '' 
                }/>

                {validationComments}

        </div>
    )
}

export default Input;
