import React, { Component } from 'react';

import WhiteScreen from '../../components/UI/WhiteScreen/WhiteScreen';

import Input from '../../components/UI/Input/Input';

import Button from '../../components/UI/Button/Button';

import Auxiliary from '../../hoc/Auxiliary';

class ContactForm extends Component {

    state = {
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

    //updateValueHandler

    render() {

        let itemsArray = [];
        for(let item in this.state){
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
                                <Input {...this.state[item]} key={item}/>
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
