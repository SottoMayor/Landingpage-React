import React from 'react';

import classes from './ContactData.module.css';

import WhiteScreen from '../UI/WhiteScreen/WhiteScreen';

import CustomHeader from '../UI/CustomHeader/CustomHeader';
import Button from '../UI/Button/Button';

const ContactData = (props) => {
    return (
        <div className={classes.ContactData}>
            
            <WhiteScreen>

                <CustomHeader>
                    Revise seus dados
                </CustomHeader>

               <ul>
                   <li>
                        <i class="fas fa-thumbtack"></i> <span>Nome: Fulano</span>
                   </li>
                   <li>
                        <i class="fas fa-thumbtack"></i> <span>Email: teste@teste.com</span>
                   </li>
                   <li>
                        <i class="fas fa-thumbtack"></i> <span>Telefone: (99) 99999-9999</span>
                   </li>
               </ul>

            </WhiteScreen>

            <div className={classes.ButtonContainer}>
                <Button danger clicked={props.modalClosed}>Cancelar</Button>
                <Button success>Continuar</Button>
            </div>
            

        </div>
    )
}

export default ContactData
