import React from 'react';

import classes from './WhiteScreen.module.css';

const WhiteScreen = (props) => {

    console.log('[WhiteScreen] Updating ')

    return (
        <div className={classes.WhiteScreen}>
            {props.children}
        </div>
    )
}

export default WhiteScreen;
