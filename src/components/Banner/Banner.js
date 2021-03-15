import React from 'react';

import classes from './Banner.module.css';

import Board from '../UI/Board/Board';

import WhiteScreen from '../UI/WhiteScreen/WhiteScreen';

import Input from '../UI/Input/Input';

import Button from '../UI/Button/Button';

const Banner = (props) => {

    const boardContent = [
        {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', id: 1 },
        {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: 2},
        {text: 'Et harum quidem rerum facilis est et expedita distinctio.', id: 3}
    ]

    const inputProps = [
        {inputName: 'Nome', inputType: 'text', id: 1 },
        {inputName: 'Email', inputType: 'email', id: 2 },
        {inputName: 'Telefone', inputType: 'text', id: 3 }
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
                        
                        <h2>
                            Preencha o formulário e inicie sua caminhada
                            para virar um webmaster!
                        </h2>

                        {
                            inputProps.map(item => (
                                <Input {...item} key={item.id}/>
                            ))
                        }

                        <p>*Campos Obrigatórios</p>

                        <Button clicked={props.checking}>Enviar</Button>

                    </WhiteScreen>

                </div>

            </div>

        </div>
    )
}

export default Banner;
