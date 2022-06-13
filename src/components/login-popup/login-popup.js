import React, {useState} from 'react';
import closeButton from '../../assets/images/icons/x-icon.svg';
import wallet1 from '../../assets/images/icons/wallet1.png';
import wallet2 from '../../assets/images/icons/wallet2.png';
import eyeIcon from '../../assets/images/icons/eye-icon.svg';
const LoginPopup = (props) => {
    const [passType,setPassType] = useState(true)
    return (
        <div className='loginPopup'>
            <button className="closeButton" onClick={()=>{props.setLoginPopUpOpen(false)}}>
                <img src={closeButton} alt=""/>
            </button>
            <h6 className="title">Connect your wallet</h6>
            <p className="text">Select what network and wallet your want to connect bellow</p>
            <div className='accept'>Accept <a href="#">Term of Service</a> and <a href="#">Privacy Policy</a></div>
            <h5 className='walletTitle'>Choose Wallet</h5>
            <div className="walletItems">
                <div className="walletItem">
                    <img src={wallet1} alt=""/>
                </div>
                <div className="walletItem">
                    <img src={wallet2} alt=""/>
                </div>
            </div>
            <div className="logTitle">Log In</div>
            <div className="crAccount">New to ***? <a href="#">Create an account</a></div>
            <div className='inputsContainer'>
                <div className="d-flex justify-content-between">
                    <p className="title">Email Adress</p>
                </div>
                <input type="text"/>
            </div>
            <div className='inputsContainer'>
                <div className="d-flex justify-content-between">
                    <p className="title">Password</p>
                    <p className="subTitle">Forgot Password?</p>
                </div>
                <input type={passType ? 'password' : 'text'}/>
                <img src={eyeIcon} alt="eye icon" className='showPass' onClick={()=>{setPassType(!passType)}}/>
            </div>
            <button className='submit'>Log In</button>
        </div>
    );
};

export default LoginPopup;