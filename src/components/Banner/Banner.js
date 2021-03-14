import React from 'react';

import classes from './Banner.module.css';

import Board from '../UI/Board/Board';

import WhiteScreen from '../UI/WhiteScreen/WhiteScreen'

const Banner = () => {

    const boardContent = [
        {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', id: 1 },
        {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: 2},
        {text: 'Et harum quidem rerum facilis est et expedita distinctio.', id: 3}
    ]

    return (
        <div className={classes.Banner}>

            <div className={classes.CenterY}>

                <Board>
                    <ul>
                        {
                            boardContent.map(item => (
                                <li key={item.id}> {item.text} </li>
                            ))
                        }
                    </ul>
                </Board>
                
                <div className={classes.WSContainer}>

                    <WhiteScreen>
                            Hello!
                    </WhiteScreen>

                </div>

            </div>

        </div>
    )
}

export default Banner;