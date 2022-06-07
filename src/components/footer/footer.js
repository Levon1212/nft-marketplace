import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="main-container">
                <div className="logoContainer">
                    <div className="logo">NFT Marketplace</div>
                    <p className='cr'>© 2021 Name. All rights reserved</p>
                </div>
                <div className="subscribeContainer">
                    <p>interested in staying up to date with NFTs?</p>
                    <input type="text" placeholder='Your email address'/>
                    <button>Subscribe</button>
                </div>
                <div className="linksContainer">
                    <ul className="item">
                        <li className="title">Company</li>
                        <li className="list">About us</li>
                        <li className="list">Terms of use</li>
                        <li className="list">Privacy Policy</li>
                        <li className="list">Disclaimer</li>
                        <li className="list">Investor</li>
                    </ul>
                    <ul className="item">
                        <li className="title">Support</li>
                        <li className="list">Contact Support</li>
                        <li className="list">FAQ</li>
                        <li className="list">Sitemap</li>
                        <li className="list">Help</li>
                    </ul>
                    <ul className="item">
                        <li className="title">Socials</li>
                        <li className="list">Twitter</li>
                        <li className="list">Discord</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;