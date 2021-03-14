import React, { Component } from 'react';

import Auxiliary from '../hoc/Auxiliary';

import Header from '../components/Header/Header';

import Banner from '../components/Banner/Banner';

import ContainerUp from '../components/ContainerUp/ContainerUp';

class Layout extends Component{

    //handlig some state!

    render(){
        return(
            <Auxiliary>

                <Header/>

                <Banner/>

                <ContainerUp/>

                <div>container2 - título e boxes</div>

                <div>Footer - Linha, cabeçalho e paragrafo</div>
            </Auxiliary>
        )
    }

}

export default Layout;
