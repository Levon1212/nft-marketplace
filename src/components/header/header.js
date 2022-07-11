import React, {useEffect, useState} from 'react';

import settingsIcon from '../../assets/images/icons/settings-icon.svg'
import Search from "../search";
import HeaderNav from "./header-nav";
import LoginPopup from "../login-popup";

const Header = () => {
    const [langPopup,setLangPopup] = useState(false);
    const [loginPopUpOpen,setLoginPopUpOpen] = useState(false);
    const [lang,setLang] = useState('EN');

    useEffect(()=>{
       setLangPopup(false)
    },[lang])
    return (
        <div className='header'>
            <div className="main-container align-items-center justify-content-between">
                <div className="logo">
                    NFT Marketplace
                </div>
                <Search/>
                <HeaderNav/>

                <div className="subscribe-button" >
                    <span onClick={()=>setLoginPopUpOpen(true)}>Subscribe</span>
                    {loginPopUpOpen ? <LoginPopup setLoginPopUpOpen={setLoginPopUpOpen}/> : ''}
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