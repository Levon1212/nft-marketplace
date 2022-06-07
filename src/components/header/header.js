import React from 'react';
import moon from '../../assets/images/icons/moon.svg'
import vectorDown from '../../assets/images/icons/vector-down.svg'
import settingsIcon from '../../assets/images/icons/settings-icon.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className="main-container align-items-center justify-content-between">
                <div className="logo">
                    NFT Marketplace
                </div>
                <input type="text" className='search' placeholder='Search'/>
                <img src={moon} alt="moon icon"
                     className='dark-mode-button'/>
                <div className="lang">
                    EN
                </div>
                <img src={vectorDown} alt=""/>
                <div className="lang">
                    USD
                </div>
                <img src={vectorDown} alt=""/>
                <div className="lang">
                    Login
                </div>
                <div className="subscribe-button">
                    Subscribe
                </div>
                <div className="alerts-button">
                    <img src={settingsIcon} alt=""/>
                    Alerts
                </div>
            </div>
        </div>
    );
};

export default Header;