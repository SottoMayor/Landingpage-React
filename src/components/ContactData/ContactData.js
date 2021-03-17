import React from 'react';

import classes from './ContactData.module.css';

import WhiteScreen from '../UI/WhiteScreen/WhiteScreen';

import CustomHeader from '../UI/CustomHeader/CustomHeader';
import Button from '../UI/Button/Button';

const ContactData = (props) => {

    // The modal uptades everytime witch we input data in the form. Maybe we can fix this using componentShouldUpdate

    console.log('[ContactData] Updating ')

    return (
        <div className={classes.ContactData}>
            
            <WhiteScreen>

                <CustomHeader>
                    Revise seus dados
                </CustomHeader>

               <ul>
                   <li>
                        <i className="fas fa-thumbtack"></i> <span> <strong>Nome</strong>: {props.name.value}</span>
                   </li>
                   <li>
                        <i className="fas fa-thumbtack"></i> <span> <strong>Email</strong>: {props.email.value}</span>
                   </li>
                   <li>
                        <i className="fas fa-thumbtack"></i> <span> <strong>Telefone</strong>: {props.phone.value}</span>
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
