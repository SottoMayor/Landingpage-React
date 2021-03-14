import React from 'react';

import CustomHeader from '../UI/CustomHeader/CustomHeader';

import classes from './ContainerUp.module.css';

import Arrow from '../../assets/images/arrow.png';

const ContainerUp = () => {
    return (
        <div className={classes.ContainerUp}>
            
            <CustomHeader>Lorem Ipsum </CustomHeader>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially 
                unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </p>

            <figure>
                <img src={Arrow} alt="Arrow" />
            </figure>

        </div>
    )
}

export default ContainerUp;
