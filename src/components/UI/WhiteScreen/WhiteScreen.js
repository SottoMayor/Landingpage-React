import React from 'react';

import classes from './WhiteScreen.module.css';

const WhiteScreen = (props) => {

    return (
        <div className={classes.WhiteScreen}>
            {props.children}
        </div>
    )
}

export default WhiteScreen;
