import React from 'react';

import classes from './CustomHeader.module.css';

const CustomHeader = (props) => {
    return (
        <div className={classes.CustomHeader}>
            <h2>
                {props.children}
            </h2>
        </div>
    )
}

export default CustomHeader
