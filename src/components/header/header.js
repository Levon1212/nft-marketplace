import React, {useEffect, useState} from 'react';
import moon from '../../assets/images/icons/moon.svg'
import vectorDown from '../../assets/images/icons/vector-down.svg'
import settingsIcon from '../../assets/images/icons/settings-icon.svg'
import OutsideClickHandler from 'react-outside-click-handler';
import Search from "../search";

const Header = () => {
    const [langPopup,setLangPopup] = useState(false);
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
                <img src={moon} alt="moon icon"
                     className='dark-mode-button'/>
                <div className="lang d-flex" onClick={()=>setLangPopup(true)}>
                    {lang}
                    <OutsideClickHandler onOutsideClick={() => {setLangPopup(false)}}>
                        {
                            langPopup ? <div className="langSelect customScrollbar" onClick={()=>{setLangPopup(false)}}>
                                <input type="text" placeholder='Search'/>
                                <div className="subTitle">Popular languages</div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="subTitle">All languages</div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                                <div className="item" onClick={()=>{setLang('EN')}}>English <span>EN</span></div>
                                <div className="item" onClick={()=>{setLang('RU')}}>Russian <span>RU</span></div>
                            </div> : ''
                        }

                    </OutsideClickHandler>
                    <img src={vectorDown} alt=""/>
                </div>

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