import React, {Component} from 'react';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
import style from './ScreenManagement.module.scss';
import {View as Title} from '../../Components/Title';
import {Functions as MenuFunctions} from '../Root/Components/Menu';
import {View as InfoCard} from './Components/InfoCard';
import {View as LogCard} from './Components/LogCard';
import ScreenListCard from './Components/ScreenListCard/View';

class ScreenManagement extends Component
{
    componentDidMount()
    {
        document.title = '屏幕管理 - 云展';
        MenuFunctions.setActiveItemId(1);
    }

    render()
    {
        return (
            <div className={style.ScreenManagement}>
                <Title icon={solidIcon.faDesktop} text={'屏幕管理'}/>
                <div className={style.cardWrapper}>
                    <div className={style.leftWrapper}>
                        <div className={style.infoCardWrapper}>
                            <InfoCard/>
                        </div>
                        <div className={style.logCardWrapper}>
                            <LogCard/>
                        </div>
                    </div>
                    <div className={style.rightWrapper}>
                        <ScreenListCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScreenManagement;