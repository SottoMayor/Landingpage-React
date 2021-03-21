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

                    {
                        Object.keys(props).map(item => {
                            if (!props[item].inputName){
                                return null;
                            }
                            return  (<li key={item}>
                                        <i className="fas fa-thumbtack"></i> <span> <strong>{props[item].inputName}</strong>: {props[item].value}</span>
                                    </li>)
                        })
                    }
               </ul>

            </WhiteScreen>

            <div className={classes.ButtonContainer}>
                <Button danger clicked={props.modalClosed}>Cancelar</Button>
                <Button  clicked={props.checkContinue}>Continuar</Button>
            </div>
            

        </div>
    )
}

export default ContactData
