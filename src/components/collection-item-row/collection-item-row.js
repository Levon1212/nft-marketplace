import React,{useState} from 'react';
import vector1 from '../../assets/images/icons/vector1.png'
import verifiedIcon from '../../assets/images/icons/verfied-icon.svg'
import Popup from "../popup";
import PopupFollowers from "../popup-followers";
import SmallChart from "../small-chart";
import PlatformPopup from "../platform-popup";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import CircleChartPopup from "../circle-chart-popup";
import NewsPopup from "../popups/news-popup";

const CollectionItemRow = (props) => {
    const [openPopupMain,setOpenPopupMain] = useState(false)
    const [popupFollowers,setPopupFollowers] = useState(false)
    const [platformPopupOpen,setPlatformPopupOpen] = useState(false)
    const [holdingPopupOpen,setHoldingPopupOpen] = useState(false)
    const [popupType,setPopupType] = useState('none')
    return (
        <tr>
            <td>
                <div className="number position-relative" >
                    <span className='numberTextWrapper'  onClick={()=>setPlatformPopupOpen(true)}>20</span>
                    {platformPopupOpen
                        ?
                        <OutsideClickHandler onOutsideClick={() => {setPlatformPopupOpen(false)}}>
                            <PlatformPopup/>
                        </OutsideClickHandler>
                        :
                        ''}
                </div>
            </td>
            <td>
                <div className="title">Minted</div>
                <div className="date">02-15-2022</div>
            </td>
            <td className="text-nowrap text-center">
                <SmallChart show={props.chart}/>
                <div className={props.chart ? "d-none" : ''}>
                    ---
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center cursor-pointer">
                    <div className="d-flex flex-column align-items-end">
                        <div className="title" >
                            <img src={vector1} alt="vector"
                                 onClick={()=>{setOpenPopupMain(true)}}
                                 className="mx-2 cursor-pointer"/>
                            <span className='cursor-pointer' onClick={()=>{setOpenPopupMain(true)}}>{props.data.number}</span>
                            {openPopupMain ? <Popup setOpenPopupMain={setOpenPopupMain}/> : ''}
                        </div>
                        <div className="date mt-2 cursor-pointer" onClick={()=>{setOpenPopupMain(true)}}>${props.data.value}</div>
                    </div>
                    <div className="progress-up cursor-pointer" onClick={()=>{setOpenPopupMain(true)}}>
                        {props.data.percent}%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end">
                        <div className="title ">
                            <img src={vector1} alt="vector"
                                 className="mx-1"/>
                            <span>400.568,89</span>
                        </div>
                        <div className="date mt-2">$1.130.433.166,77</div>
                    </div>
                    <div className="progress-down">
                        6.41%
                    </div>
                </div>
            </td>
            <td>
                <div className="title">Ethereum</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">9999</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center position-relative">
                    <div className='d-flex' onClick={()=>{setHoldingPopupOpen(true)}}>
                        <div className="title">4514</div>
                        <div className="progress-up">1.01%</div>
                    </div>
                    {
                        holdingPopupOpen ? <CircleChartPopup closeHandle={setHoldingPopupOpen}/> : ''
                    }
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">2.53</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3334 8L13.7067 6.14L13.9334 3.68L11.5267 3.13333L10.2667 1L8.00008 1.97333L5.73341 1L4.47341 3.12667L2.06675 3.66667L2.29341 6.13333L0.666748 8L2.29341 9.86L2.06675 12.3267L4.47341 12.8733L5.73341 15L8.00008 14.02L10.2667 14.9933L11.5267 12.8667L13.9334 12.32L13.7067 9.86L15.3334 8ZM6.25341 10.6733L4.66675 9.07333C4.60495 9.01166 4.55591 8.9384 4.52246 8.85775C4.48901 8.7771 4.47179 8.69065 4.47179 8.60333C4.47179 8.51602 4.48901 8.42957 4.52246 8.34892C4.55591 8.26827 4.60495 8.19501 4.66675 8.13333L4.71341 8.08667C4.97341 7.82667 5.40008 7.82667 5.66008 8.08667L6.73341 9.16667L10.1667 5.72667C10.4267 5.46667 10.8534 5.46667 11.1134 5.72667L11.1601 5.77333C11.4201 6.03333 11.4201 6.45333 11.1601 6.71333L7.21341 10.6733C6.94008 10.9333 6.52008 10.9333 6.25341 10.6733Z" fill="#2081E2"/>
                    </svg>
                </div>
                <div className="date">02-15-2022</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-down">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-down">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center cursor-pointer position-relative">
                    <div className="title" onClick={()=>{setPopupFollowers(true)}}>4514</div>
                    <div className="progress-up cursor-pointer" onClick={()=>{setPopupFollowers(true)}}>1.01%</div>
                    {popupFollowers ? <PopupFollowers setPopupFollowers={setPopupFollowers}/> : ''}
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3334 8L13.7067 6.14L13.9334 3.68L11.5267 3.13333L10.2667 1L8.00008 1.97333L5.73341 1L4.47341 3.12667L2.06675 3.66667L2.29341 6.13333L0.666748 8L2.29341 9.86L2.06675 12.3267L4.47341 12.8733L5.73341 15L8.00008 14.02L10.2667 14.9933L11.5267 12.8667L13.9334 12.32L13.7067 9.86L15.3334 8ZM6.25341 10.6733L4.66675 9.07333C4.60495 9.01166 4.55591 8.9384 4.52246 8.85775C4.48901 8.7771 4.47179 8.69065 4.47179 8.60333C4.47179 8.51602 4.48901 8.42957 4.52246 8.34892C4.55591 8.26827 4.60495 8.19501 4.66675 8.13333L4.71341 8.08667C4.97341 7.82667 5.40008 7.82667 5.66008 8.08667L6.73341 9.16667L10.1667 5.72667C10.4267 5.46667 10.8534 5.46667 11.1134 5.72667L11.1601 5.77333C11.4201 6.03333 11.4201 6.45333 11.1601 6.71333L7.21341 10.6733C6.94008 10.9333 6.52008 10.9333 6.25341 10.6733Z" fill="#2081E2"/>
                    </svg>
                </div>
                <div className="date">02-15-2022</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-down">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3334 8L13.7067 6.14L13.9334 3.68L11.5267 3.13333L10.2667 1L8.00008 1.97333L5.73341 1L4.47341 3.12667L2.06675 3.66667L2.29341 6.13333L0.666748 8L2.29341 9.86L2.06675 12.3267L4.47341 12.8733L5.73341 15L8.00008 14.02L10.2667 14.9933L11.5267 12.8667L13.9334 12.32L13.7067 9.86L15.3334 8ZM6.25341 10.6733L4.66675 9.07333C4.60495 9.01166 4.55591 8.9384 4.52246 8.85775C4.48901 8.7771 4.47179 8.69065 4.47179 8.60333C4.47179 8.51602 4.48901 8.42957 4.52246 8.34892C4.55591 8.26827 4.60495 8.19501 4.66675 8.13333L4.71341 8.08667C4.97341 7.82667 5.40008 7.82667 5.66008 8.08667L6.73341 9.16667L10.1667 5.72667C10.4267 5.46667 10.8534 5.46667 11.1134 5.72667L11.1601 5.77333C11.4201 6.03333 11.4201 6.45333 11.1601 6.71333L7.21341 10.6733C6.94008 10.9333 6.52008 10.9333 6.25341 10.6733Z" fill="#2081E2"/>
                    </svg>
                </div>
                <div className="date">02-15-2022</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center position-relative">
                    <div className="title cursor-pointer" onClick={()=>{setPopupType('news')}}>4514</div>
                    <div className="progress-up cursor-pointer" onClick={()=>{setPopupType('news')}}>1.01%</div>
                    {popupType === 'news' ? <NewsPopup closePopup={setPopupType}/> : ''}
                </div>
            </td>
        </tr>
    );
};

export default CollectionItemRow;