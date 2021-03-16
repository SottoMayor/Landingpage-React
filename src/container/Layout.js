import React, { Component } from 'react';

import Auxiliary from '../hoc/Auxiliary';

import Header from '../components/Header/Header';

import Banner from '../components/Banner/Banner';

import ContainerUp from '../components/ContainerUp/ContainerUp';

import ContainerDown from '../components/ContainerDown/ContainerDown';

import Footer from '../components/Footer/Footer';

class Layout extends Component{

    render(){
        return(
            <Auxiliary>

                <Header/>

                <Banner/>

                <ContainerUp/>

                <ContainerDown/>

                <Footer/>

            </Auxiliary>
        )
    }

}

export default Layout;
