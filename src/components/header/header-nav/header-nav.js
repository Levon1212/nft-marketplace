import React,{useState} from 'react';
import NavDropdown from "../nav-dropdown";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

const HeaderNav = () => {
    const [type,setType] = useState('none')
    return (
        <div className='header-nav'>
            <div onClick={()=>{setType('1')}} className={`value ${type === '1' ? 'active' : ''}`}>
                <p className="title">Features</p>
            </div>
            <div className={`value ${type === '2' ? 'active' : ''}`}>
                <div className="d-flex align-items-center wrapperValue" onClick={()=>{setType('2')}} >
                    <p className="title">Dashboard</p>
                    <svg className='ms-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <OutsideClickHandler className='bldo' onOutsideClick={() => {setType('none')}}>
                    {type === '2' ? <NavDropdown/> : ''}
                </OutsideClickHandler>

            </div>
            <div onClick={()=>{setType('3')}} className={`value ${type === '3' ? 'active' : ''}`}>
                <p className="title">Collections</p>
                <svg className='ms-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div onClick={()=>{setType('4')}} className={`value ${type === '4' ? 'active' : ''}`}>
                <p className="title">NFTS</p>
                <svg className='ms-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div onClick={()=>{setType('5')}} className={`value ${type === '5' ? 'active' : ''}`}>
                <p className="title">Wallets</p>
                <svg className='ms-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div onClick={()=>{setType('6')}} className={`value ${type === '6' ? 'active' : ''}`}>
                <p className="title">Portfolio</p>
            </div>
        </div>
    );
};

export default HeaderNav;