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
                    touched: false,
                    required: true,
                    minLength: {
                        value: 3
                    },
                    message: 'O nome deve conter pelo menos 3 caracteres.'
                }
            },
            email: {
                inputName: 'Email', 
                inputType: 'email',
                value: '',
                validation: {
                    valid: false,
                    touched: false,
                    required: true,
                    minLength: {
                        value: 8
                    },
                    message: 'O email inserido deve conter pelo menos 8 caracteres.'
                }
            },
            phone: {
                inputName: 'Telefone', 
                inputType: 'text',
                value: '',
                validation: {
                    valid: false,
                    touched: false,
                    required: true,
                    minLength: {
                        value: 11
                    },
                    maxLength: {
                        value: 20
                    },
                    isNumber:{
                        value: 'Is this a number?'
                    },
                    message: 'Não escreva caracteres especiais (-, (), *, ...) no número inserido ou digite um número válido entre 11 e 20 caracteres.'
                }
            }
        },
        checkingData: false,
        formIsValid: false
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

        if(rules.isNumber){
            isValid = +value && isValid;
        }

        return isValid;

    }

    updateValueHandler = (event, idIdentifier) => {
        const updatedInputFields = {...this.state.inputFields};
        const fieldSelector = {...updatedInputFields[idIdentifier]}

        fieldSelector.value = event.target.value;
        fieldSelector.validation.valid = this.checkValidity(fieldSelector.value, fieldSelector.validation)
        fieldSelector.validation.touched = true;

        updatedInputFields[idIdentifier] = fieldSelector;

        let formIsValid = true;
        for(let key in updatedInputFields){
            formIsValid = updatedInputFields[key]
                        .validation.valid && formIsValid
        }

        this.setState({
            inputFields: updatedInputFields,
            formIsValid: formIsValid
        })
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

                        <Button clicked={this.checkingDataHandler}
                        disabled={!(this.state.formIsValid) ? true : false}>Enviar</Button>

                    </WhiteScreen>

                </Auxiliary>

               
        )
    }
}

export default ContactForm
