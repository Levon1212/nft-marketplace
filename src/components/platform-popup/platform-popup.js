import React from 'react';
import earthIcon from '../../assets/images/icons/earth-icon.svg';
import iconBoat from '../../assets/images/icons/icon-boat.svg';
import twitterIcon from '../../assets/images/icons/twitter-icon.svg';
import raribleIcon from '../../assets/images/icons/rarible-icon.svg';
import aIcon from '../../assets/images/icons/a-icon.svg';
import asIcon from '../../assets/images/icons/as-icon.svg';
import axieIcon from '../../assets/images/icons/axie-icon.svg';
import decIcon from '../../assets/images/icons/dec-icon.svg';
import discordIcon from '../../assets/images/icons/discord-icon.svg';
const PlatformPopup = () => {
    return (
        <div className='platform-popup'>
            <div className="item">
                <img src={earthIcon} alt="icon"/>
                <p>Website</p>
            </div>
            <div className="item">
                <img src={twitterIcon} alt="icon"/>
                <p>@larvalabs</p>
            </div>
            <div className="item">
                <img src={iconBoat} alt="icon"/>
                <p>Opensea</p>
            </div>
            <div className="item">
                <img src={raribleIcon} alt="icon"/>
                <p>Rarible</p>
            </div>
            <div className="item">
                <img src={aIcon} alt="icon"/>
                <p>Atomic</p>
            </div>
            <div className="item">
                <img src={asIcon} alt="icon"/>
                <p>Async Art</p>
            </div>
            <div className="item">
                <img src={axieIcon} alt="icon"/>
                <p>Axie Marketplace</p>
            </div>
            <div className="item">
                <img src={decIcon} alt="icon"/>
                <p>Decentraland</p>
            </div>
            <div className="item">
                <img src={discordIcon} alt="icon"/>
                <p>Larvalabs</p>
            </div><div className="item">
                <img src={discordIcon} alt="icon"/>
                <p>Larvalabs2</p>
            </div>
            <div className="d-flex w-100 justify-content-center">
                <button className="button-load-more">
                    <p>Load More</p>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.35645L5 4.87395L8.5 1.35645" stroke="#C6C6C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PlatformPopup;