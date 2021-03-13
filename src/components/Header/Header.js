import React from 'react';

import classes from './Header.module.css';

import Logo from '../../assets/images/logo.png';

const header = () => (

    <header className={classes.Header}>

        <figure>
            <img src={Logo}/>
        </figure>

    </header>

)

export default header;