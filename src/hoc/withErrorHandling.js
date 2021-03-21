import React, { Component } from 'react';

import Modal from '../components/UI/Modal/Modal';

import Auxiliary from './Auxiliary';

const withErrorHandling = (WrappedComponent, axios) => {
    
    return class extends Component {

        state = {
            error: null
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        componentDidMount() {
            this.reqInterceptors = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptors = axios.interceptors.response.use( res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }
        

        render(){
            return (<Auxiliary>

                <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>

                    <p style={{color: 'black'}}>
                        Oooops! Algo deu errado... tente novamente.
                    </p>

                </Modal>

                <WrappedComponent {...this.props} />

            </Auxiliary>)
        }

    }

}

export default withErrorHandling;
