import React, { Component } from 'react';

import WhiteScreen from '../../components/UI/WhiteScreen/WhiteScreen';

import Input from '../../components/UI/Input/Input';

import Button from '../../components/UI/Button/Button';

import Auxiliary from '../../hoc/Auxiliary';

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
        }
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

        return (
            
                <Auxiliary>

                    <WhiteScreen>
                        
                        <h2>
                            Preencha o formulário e inicie sua caminhada
                            para virar um webmaster!
                        </h2>

                        {   
                            itemsArray.map(item => (
                                <Input {...this.state.inputFields[item]} key={item} changed={(event) => this.updateValueHandler(event, item)}/>
                            ))
                        }

                        <p>*Campos Obrigatórios</p>

                        <Button clicked={this.props.checking}>Enviar</Button>

                    </WhiteScreen>

                </Auxiliary>

               
        )
    }
}

export default ContactForm
