import classes from './ContainerDown.module.css';

import React from 'react';

import CustomHeader from '../UI/CustomHeader/CustomHeader';

import Icon from '../../assets/images/icon.png';

import BoxItems from '../BoxItems/BoxItems';

const ContainerDown = () => {

    const boxItemsContent = [
        {pathImg: Icon, nameImg: 'icon', title: 'Lorem Ipsum',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mauris nec nisi dignissim viverra. Nunc dignissim faucibus elit, et consectetur nisi suscipit sed. Sed volutpat, diam ut dictum lobortis, tortor sapien bibendum ligula, sit amet maximus ligula mauris sed urna. Cras quis interdum purus. Morbi elit libero, luctus non feugiat quis, dictum a libero. Ut pulvinar nisl non euismod pellentesque. Vestibulum urna nisl, posuere sit amet sodales ut, pellentesque ac sapien. '
        },
        {pathImg: Icon, nameImg: 'icon', title: 'Lorem Ipsum',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mauris nec nisi dignissim viverra. Nunc dignissim faucibus elit, et consectetur nisi suscipit sed. Sed volutpat, diam ut dictum lobortis, tortor sapien bibendum ligula, sit amet maximus ligula mauris sed urna. Cras quis interdum purus. Morbi elit libero, luctus non feugiat quis, dictum a libero. Ut pulvinar nisl non euismod pellentesque. Vestibulum urna nisl, posuere sit amet sodales ut, pellentesque ac sapien. '
        },
        {pathImg: Icon, nameImg: 'icon', title: 'Lorem Ipsum',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mauris nec nisi dignissim viverra. Nunc dignissim faucibus elit, et consectetur nisi suscipit sed. Sed volutpat, diam ut dictum lobortis, tortor sapien bibendum ligula, sit amet maximus ligula mauris sed urna. Cras quis interdum purus. Morbi elit libero, luctus non feugiat quis, dictum a libero. Ut pulvinar nisl non euismod pellentesque. Vestibulum urna nisl, posuere sit amet sodales ut, pellentesque ac sapien. '
        },
    ]

    return (
        <div className={classes.ContainerDown}>

            <CustomHeader>Aprenda com quem está no mercado!</CustomHeader>

            <div className={classes.BoxItems}>

                {
                    boxItemsContent.map(items => (
                        <BoxItems {...items} />
                    ))
                }

            </div>
            

        </div>
    )
}

export default ContainerDown;
