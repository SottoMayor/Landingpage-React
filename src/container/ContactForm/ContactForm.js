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
                value: '',
                validation: {
                    valid: false,
                    required: true,
                    minLength: {
                        value: 3,
                        message: 'O nome deve conter pelo menos 3 caracteres.'
                    },
                    defaultMessage: 'Esse campo é obrigatório!'
                }
            },
            email: {
                inputName: 'Email', 
                inputType: 'email',
                value: '',
                validation: {
                    valid: false,
                    required: true,
                    minLength: {
                        value: 8,
                        message: 'O email inserido deve conter pelo menos 8 caracteres.'
                    },
                    defaultMessage: 'Esse campo é obrigatório!'
                }
            },
            phone: {
                inputName: 'Telefone', 
                inputType: 'text',
                value: '',
                validation: {
                    valid: false,
                    required: true,
                    minLength: {
                        value: 11,
                        message: 'Sua mensagem deve conter pelo menos 11 caracteres.'
                    },
                    maxLength: {
                        value: 20,
                        message: 'Sua mensagem deve conter no máximo 20 caracteres.'
                    },
                    defaultMessage: 'Esse campo é obrigatório!'
                }
            }
        },
        checkingData: false
    }


    checkingDataHandler = () => {
        let copyState = {...this.state}
        
        this.setState({checkingData: !copyState.checkingData})
    }

    checkValidity = (value, rules) => {

        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = rules.minLength.value <= value.length && isValid;
        }

        if(rules.maxLength){
            isValid = rules.maxLength.value >= value.length && isValid;
        }

        return isValid;

    }

    updateValueHandler = (event, idIdentifier) => {
        const updatedInputFields = {...this.state.inputFields};
        const fieldSelector = {...updatedInputFields[idIdentifier]}

        fieldSelector.value = event.target.value;
        fieldSelector.validation.valid = this.checkValidity(fieldSelector.value, fieldSelector.validation)

        updatedInputFields[idIdentifier] = fieldSelector;

        console.log(updatedInputFields)

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
