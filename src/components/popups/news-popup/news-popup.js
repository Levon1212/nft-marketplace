import React,{useState} from 'react';
import TimeButtons from "../../time-buttons";
import DatePicker from "react-datepicker";
import nft2 from "../../../assets/images/nft/nft2.png";
import ChartType1 from "../../chart-type1";
import PopupList1 from "../../popup-list1";
import PopupTable1 from "../../popup-table1";

const NewsPopup = (props) => {
    const [view,setView] = useState('chart');
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='popup news-popup'>
            <svg className='closeIcon' onClick={()=>{props.closePopup('none')}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 9L9 15" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 9L15 15" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="wrapper">
                <div className="navWrapper">
                    <div className="tabs">
                        <div onClick={()=>{setView('chart')}} className={`item ${view === 'chart' ? 'active' : ''}`}>
                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_7)">
                                    <path d="M12.5197 4.94976L12.5197 5.83169L16.4442 5.83171L7.73846 14.5374L8.3621 15.1611L17.0678 6.45535L17.0678 10.3798L17.9498 10.3798L17.9498 4.94974L12.5197 4.94976Z" fill="#666666"/>
                                </g>
                                <line x1="4.35355" y1="10.5459" x2="8.35355" y2="14.5459" stroke="#666666"/>
                                <line x1="4.35355" y1="11.253" x2="0.353554" y2="15.253" stroke="#666666"/>
                                <defs>
                                    <clipPath id="clip0_2_7">
                                        <rect width="14" height="14" fill="white" transform="translate(3.10052 9.8995) rotate(-45)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div onClick={()=>{setView('table')}} className={`item ${view === 'table' ? 'active' : ''}`}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_10)">
                                    <path d="M0.180664 2.5C0.180664 1.83696 0.444056 1.20107 0.912897 0.732233C1.38174 0.263392 2.01762 0 2.68066 0L17.6807 0C18.3437 0 18.9796 0.263392 19.4484 0.732233C19.9173 1.20107 20.1807 1.83696 20.1807 2.5V17.5C20.1807 18.163 19.9173 18.7989 19.4484 19.2678C18.9796 19.7366 18.3437 20 17.6807 20H2.68066C2.01762 20 1.38174 19.7366 0.912897 19.2678C0.444056 18.7989 0.180664 18.163 0.180664 17.5V2.5ZM18.9307 5H13.9307V8.75H18.9307V5ZM18.9307 10H13.9307V13.75H18.9307V10ZM18.9307 15H13.9307V18.75H17.6807C18.0122 18.75 18.3301 18.6183 18.5645 18.3839C18.799 18.1495 18.9307 17.8315 18.9307 17.5V15ZM12.6807 18.75V15H7.68066V18.75H12.6807ZM6.43066 18.75V15H1.43066V17.5C1.43066 17.8315 1.56236 18.1495 1.79678 18.3839C2.0312 18.6183 2.34914 18.75 2.68066 18.75H6.43066ZM1.43066 13.75H6.43066V10H1.43066V13.75ZM1.43066 8.75H6.43066V5H1.43066V8.75ZM7.68066 5V8.75H12.6807V5H7.68066ZM12.6807 10H7.68066V13.75H12.6807V10Z" fill="#666666"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_10">
                                        <rect width="20" height="20" fill="white" transform="translate(0.180664)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="timeButtonsContainer with-datepicker">
                        <TimeButtons/>
                        <DatePicker className="date-picker-label"
                                    selected={startDate}
                                    dateFormat="MMM dd"
                                    onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="info">
                    <div className="nft">
                        <img src={nft2} alt="" className='nftImage'/>
                        <div className="text">
                            <h5 className="title">Bored Ape Yacht Club</h5>
                            <h6 className='subTitle'>(Number in Collection)</h6>
                        </div>
                    </div>
                    {
                        view !== 'chart' ?  <div className="popupSearchWrapper">
                            <input type="text" placeholder='Search'/>
                        </div> : ''
                    }
                </div>

                {view === 'chart' ? <ChartType1 type={'single'}/>  : ''}
                {view === 'list'  ? <PopupList1/>  : ''}
                {view === 'table' ? <PopupTable1/> : ''}
            </div>
            {
                view !== 'chart' ?
                    <div className="d-flex w-100 justify-content-end my-2">
                        <button className="popupNavButtons">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.667 6L1.33366 6" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 10.6667L1.33333 6.00008L6 1.33341" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className="popupNavButtons">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33301 6L10.6663 6" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 1.33325L10.6667 5.99992L6 10.6666" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div> : ''
            }
        </div>
    );
};

export default NewsPopup;