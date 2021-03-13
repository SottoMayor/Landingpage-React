import React from 'react';

import classes from './Banner.module.css';

import Board from '../UI/Board/Board';

const Banner = () => {
    return (
        <div className={classes.Banner}>
            
            <div className={classes.CenterY}>

                <Board>
                    <ul>
                        <li>
                        A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto
                        </li>
                        <li>
                        A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto
                        </li>
                        <li>
                        A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto
                        </li>   
                    </ul>    
                </Board>

            </div>

        </div>
    )
}

export default Banner;
