import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

    const buttonStyles = [classes.Button]

    if(props.success){
        buttonStyles.push(classes.Success)
    }else if(props.danger){
        buttonStyles.push(classes.Danger)
    }else{
        buttonStyles.push(classes.Info)
    }

    return (
        <div className={classes.ButtonContainer} onClick={props.clicked}>
            <button className={buttonStyles.join(' ')}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;
