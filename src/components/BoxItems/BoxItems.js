import React from 'react';

import classes from './BoxItems.module.css';

const BoxItems = (props) => {
    return (
        <div className={classes.BoxItems}>
            
            <figure>
                <img src={props.pathImg} alt={props.nameImg} />
            </figure>

            <h2>
                {props.title}
            </h2>

            <p>
                {props.description}
            </p>

        </div>
    )
}

export default BoxItems
