import React, { Component } from 'react';

import Auxiliary from '../hoc/Auxiliary';

import Header from '../components/Header/Header';

import Banner from '../components/Banner/Banner';

import ContainerUp from '../components/ContainerUp/ContainerUp';

import ContainerDown from '../components/ContainerDown/ContainerDown';

import Footer from '../components/Footer/Footer';

import Modal from '../components/UI/Modal/Modal';

import ContactData from '../components/ContactData/ContactData';

class Layout extends Component{

    state={
        checkingData: false
    }

    checkingDataHandler = () => {
        let copyState = {...this.state}
        
        this.setState({checkingData: !copyState.checkingData})
    }

    render(){
        return(
            <Auxiliary>

                <Modal show={this.state.checkingData} 
                modalClosed={this.checkingDataHandler}>
                    <ContactData modalClosed={this.checkingDataHandler}/>
                </Modal>

                <Header/>

                <Banner checking={this.checkingDataHandler} />

                <ContainerUp/>

                <ContainerDown/>

                <Footer/>

            </Auxiliary>
        )
    }

}

export default Layout;
