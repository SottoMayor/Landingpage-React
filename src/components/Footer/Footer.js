import classes from './Footer.module.css'
import React from 'react'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            
            <div className={classes.Line}></div>

            <div className={classes.Center}>

                <p>
                    Todos os direitos reservados - Danki Code
                </p>

                <p>
                    Av. Lorem Ipsum, silor domor 211 - Florianópolis SC
                </p>

            </div>

        </div>
    )
}

export default Footer
