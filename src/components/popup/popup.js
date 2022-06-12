import React, {useState} from 'react';
import xIcon from '../../assets/images/icons/x-icon.svg'
import ChartType1 from "../chart-type1";

const Popup = (props) => {

    return (
        <div className='popup'>
            <img src={xIcon} alt="close icon" className='closeIcon'/>
            <div className="wrapper">
                <ChartType1/>
            </div>
        </div>
    );
};

export default Popup;