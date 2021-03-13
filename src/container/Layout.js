import React, { Component } from 'react';

import Auxiliary from '../hoc/Auxiliary';

import Header from '../components/Header/Header';

class Layout extends Component{

    //handlig some state!

    render(){
        return(
            <Auxiliary>

                <Header/>

                <div>Banner - ContainerList e Formuário</div>

                <div>container1 - Block text e arrow</div>

                <div>container2 - título e boxes</div>

                <div>Footer - Linha, cabeçalho e paragrafo</div>
            </Auxiliary>
        )
    }

}

export default Layout;
