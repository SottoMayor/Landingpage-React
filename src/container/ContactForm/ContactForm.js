import React, { Component } from 'react';

import WhiteScreen from '../../components/UI/WhiteScreen/WhiteScreen';

import Input from '../../components/UI/Input/Input';

import Button from '../../components/UI/Button/Button';

import Auxiliary from '../../hoc/Auxiliary';


import Modal from '../../components/UI/Modal/Modal';

import ContactData from '../../components/ContactData/ContactData';

import classes from './ContactForm.module.css';

class ContactForm extends Component {

    state = {
        inputFields:{
            name: {
                inputName: 'Nome',
                inputType: 'text',
                value: ''
            },
            email: {
                inputName: 'Email', 
                inputType: 'email',
                value: ''
            },
            phone: {
                inputName: 'Telefone', 
                inputType: 'text',
                value: '' 
            }
        },
        checkingData: false
    }


    checkingDataHandler = () => {
        let copyState = {...this.state}
        
        this.setState({checkingData: !copyState.checkingData})
    }


    updateValueHandler = (event, idIdentifier) => {
        const updatedInputFields = {...this.state.inputFields};
        const fieldSelector = {...updatedInputFields[idIdentifier]}

        fieldSelector.value = event.target.value;

        updatedInputFields[idIdentifier] = fieldSelector;

        this.setState({inputFields: updatedInputFields})
    }

    render() {

        let itemsArray = [];
        for(let item in this.state.inputFields){
            itemsArray.push(item)
        }

        console.log('[ContactForm] Updating ')

        return (
            
                <Auxiliary>

                    <Modal show={this.state.checkingData}
                    modalClosed={this.checkingDataHandler}>
                        <ContactData
                        modalClosed={this.checkingDataHandler}
                        {...this.state.inputFields} 
                        />
                    </Modal>

                    <WhiteScreen>
                        
                        <h2 className={classes.Header}>
                            Preencha o formulário e inicie sua caminhada
                            para virar um webmaster!
                        </h2>

                        {   
                            itemsArray.map(item => (
                                <Input {...this.state.inputFields[item]} key={item} changed={(event) => this.updateValueHandler(event, item)}/>
                            ))
                        }

                        <p className={classes.Paragraph}>*Campos Obrigatórios</p>

                        <Button clicked={this.checkingDataHandler}>Enviar</Button>

                    </WhiteScreen>

                </Auxiliary>

               
        )
    }
}

export default ContactForm
