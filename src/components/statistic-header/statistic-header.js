import React,{useState,useEffect} from 'react';
import moon from '../../assets/images/icons/moon.svg'
import vectorDown from '../../assets/images/icons/vector-down.svg'
import OutsideClickHandler from 'react-outside-click-handler';
import LoginPopup from "../login-popup";

const StatisticHeader = () => {
    const [langPopup,setLangPopup] = useState(false);
    const [loginPopUpOpen,setLoginPopUpOpen] = useState(false);
    const [lang,setLang] = useState('EN');

    useEffect(()=>{
        setLangPopup(false)
    },[lang])
    return (
        <div className='statistic-header'>
            <div className="main-container py-0 justify-content-between">
                <div className="left-side">
                    <div className="value">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                        </svg>
                        $3,500
                    </div>
                    <div className="value">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                        </svg>
                        28 gwei
                    </div>
                    <div className="value">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                        </svg>
                        $135
                    </div>
                </div>
                <div className="right-side">
                    <img src={moon} alt="moon icon" lassName='dark-mode-button'/>
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
                    {/*<div className="lang loginButton" >*/}
                    {/*    <span onClick={()=> {*/}
                    {/*        setLoginPopUpOpen(true)*/}
                    {/*    }}>Login</span>*/}
                    {/*    {loginPopUpOpen ? <LoginPopup setLoginPopUpOpen={setLoginPopUpOpen}/> : ''}*/}
                    {/*</div>*/}
                    <svg className='ms-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_6)">
                            <path d="M4.16679 5.83333H15.6585C15.8913 5.83334 16.1216 5.88214 16.3344 5.97659C16.5472 6.07103 16.7379 6.20903 16.8942 6.38168C17.0504 6.55433 17.1687 6.7578 17.2415 6.97898C17.3143 7.20016 17.34 7.43414 17.3168 7.66583L16.8168 12.6658C16.7757 13.0771 16.5832 13.4584 16.2768 13.7357C15.9703 14.0131 15.5718 14.1667 15.1585 14.1667H7.20012C6.81468 14.1668 6.4411 14.0334 6.14299 13.789C5.84488 13.5447 5.64067 13.2046 5.56512 12.8267L4.16679 5.83333Z" stroke="#666666" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M13.3335 17.5H15.0001M4.16679 5.83333L3.49179 3.13083C3.44665 2.95063 3.34258 2.79067 3.19613 2.67638C3.04967 2.56209 2.86923 2.5 2.68346 2.5H1.66679L4.16679 5.83333ZM6.66679 17.5H8.33346H6.66679Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2_6">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className='ms-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_16)">
                            <path d="M9.98355 0.00288607C9.98355 0.00288607 15.8679 -0.260149 18.9877 5.63152H9.48285C9.48285 5.63152 7.6891 5.57394 6.15683 7.74156C5.71667 8.65137 5.24355 9.58857 5.77449 11.4356C5.00964 10.1448 1.71394 4.42857 1.71394 4.42857C1.71394 4.42857 4.03855 0.235804 9.98347 0.00288607H9.98355Z" fill="#EF3F36"/>
                            <path d="M18.6823 14.9595C18.6823 14.9595 15.967 20.1689 9.28754 19.9113C10.1128 18.489 14.0413 11.7122 14.0413 11.7122C14.0413 11.7122 14.9904 10.1941 13.8707 7.78808C13.3012 6.95228 12.7207 6.07811 10.8501 5.6122C12.355 5.59858 18.9712 5.6122 18.9712 5.6122C18.9712 5.6122 21.4498 9.71454 18.6823 14.9595Z" fill="#FCD900"/>
                            <path d="M1.32605 15.0006C1.32605 15.0006 -1.84591 10.0543 1.7194 4.42023C2.54198 5.84249 6.47042 12.6193 6.47042 12.6193C6.47042 12.6193 7.31776 14.1977 9.96698 14.4333C10.9767 14.3594 12.0275 14.2963 13.3701 12.918C12.63 14.2224 9.30941 19.9223 9.30941 19.9223C9.30941 19.9223 4.50066 20.01 1.32597 15.0006H1.32605Z" fill="#61BC5B"/>
                            <path d="M9.28484 19.9606L10.6218 14.4032C10.6218 14.4032 12.0909 14.2881 13.3234 12.9426C12.5585 14.2827 9.28484 19.9606 9.28484 19.9606V19.9606Z" fill="#5AB055"/>
                            <path d="M5.50487 10.0433C5.50487 7.59353 7.4994 5.60676 9.95878 5.60676C12.4182 5.60676 14.4127 7.59353 14.4127 10.0433C14.4127 12.4932 12.4182 14.4799 9.95878 14.4799C7.4994 14.4772 5.50487 12.4932 5.50487 10.0433V10.0433Z" fill="white"/>
                            <path d="M6.25035 10.0433C6.25035 8.00458 7.90926 6.3494 9.95879 6.3494C12.0055 6.3494 13.6671 8.00186 13.6671 10.0433C13.6671 12.0822 12.0083 13.7373 9.95879 13.7373C7.91199 13.7373 6.25035 12.0822 6.25035 10.0433V10.0433Z" fill="url(#paint0_linear_2_16)"/>
                            <path d="M18.9684 5.615L13.4636 7.22356C13.4636 7.22356 12.6328 6.00955 10.8474 5.615C12.3962 5.60675 18.9684 5.615 18.9684 5.615V5.615Z" fill="#EACA05"/>
                            <path d="M5.66722 11.2327C4.8941 9.89815 1.71394 4.4285 1.71394 4.4285L5.79097 8.44577C5.79097 8.44577 5.37277 9.30352 5.52964 10.5311L5.66714 11.2327H5.66722Z" fill="#DF3A32"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2_16" x1="9.9586" y1="6.40156" x2="9.9586" y2="13.515" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#86BBE5"/>
                                <stop offset="1" stop-color="#1072BA"/>
                            </linearGradient>
                            <clipPath id="clip0_2_16">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default StatisticHeader;