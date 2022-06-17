import React,{useState} from 'react';

const TimeButtons = () => {
    const [filterTime,setFilterTime] = useState('1min')
    return (
        <>
            <div className={`time-button ${filterTime === '1min' ? 'active' : ''}`} onClick={()=>{setFilterTime('1min')}}>
                1Min
            </div>
            <div className={`time-button ${filterTime === '15min' ? 'active' : ''}`} onClick={()=>{setFilterTime('15min')}}>
                15Min
            </div>
            <div className={`time-button ${filterTime === '30min' ? 'active' : ''}`} onClick={()=>{setFilterTime('30min')}}>
                30Min
            </div>
            <div className={`time-button ${filterTime === '1h' ? 'active' : ''}`} onClick={()=>{setFilterTime('1h')}}>
                1h
            </div>
            <div className={`time-button ${filterTime === '6h' ? 'active' : ''}`} onClick={()=>{setFilterTime('6h')}}>
                6h
            </div>
            <div className={`time-button ${filterTime === '24h' ? 'active' : ''}`} onClick={()=>{setFilterTime('24h')}}>
                24h
            </div>
            <div className={`time-button ${filterTime === '48h' ? 'active' : ''}`} onClick={()=>{setFilterTime('48h')}}>
                48h
            </div>
            <div className={`time-button ${filterTime === '7d' ? 'active' : ''}`} onClick={()=>{setFilterTime('7d')}}>
                7d
            </div>
            <div className={`time-button ${filterTime === '14d' ? 'active' : ''}`} onClick={()=>{setFilterTime('14d')}}>
                14d
            </div>
            <div className={`time-button ${filterTime === '30d' ? 'active' : ''}`} onClick={()=>{setFilterTime('30d')}}>
                30d
            </div>
            <div className={`time-button ${filterTime === '60d' ? 'active' : ''}`} onClick={()=>{setFilterTime('60d')}}>
                60d
            </div>
            <div className={`time-button ${filterTime === '90d' ? 'active' : ''}`} onClick={()=>{setFilterTime('90d')}}>
                90d
            </div>
            <div className={`time-button ${filterTime === '12mont' ? 'active' : ''}`} onClick={()=>{setFilterTime('12mont')}}>
                12 Months
            </div>
        </>
    );
};

export default TimeButtons;