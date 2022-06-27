import React,{useState} from 'react';
import vector1 from '../../assets/images/icons/vector1.png'
import verifiedIcon from '../../assets/images/icons/verfied-icon.svg'
import Popup from "../popup";
import PopupFollowers from "../popup-followers";
import SmallChart from "../small-chart";
import PlatformPopup from "../platform-popup";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import CircleChartPopup from "../circle-chart-popup";

const CollectionItemRow = (props) => {
    const [openPopupMain,setOpenPopupMain] = useState(false)
    const [popupFollowers,setPopupFollowers] = useState(false)
    const [platformPopupOpen,setPlatformPopupOpen] = useState(false)
    const [holdingPopupOpen,setHoldingPopupOpen] = useState(false)
    return (
        <tr>
            <td>
                <div className="number position-relative" >
                    <span onClick={()=>setPlatformPopupOpen(true)}>20</span>
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
                {
                     <SmallChart show={props.chart === 'floor' ? true : false}/>
                }
                <div className={props.chart === 'floor' ? "d-none" : ''}>
                    ---
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end">
                        <div className="title" >
                            <img src={vector1} alt="vector"
                                 onClick={()=>{setOpenPopupMain(true)}}
                                 className="mx-2"/>
                            <span onClick={()=>{setOpenPopupMain(true)}}>{props.data.number}</span>
                            {openPopupMain ? <Popup setOpenPopupMain={setOpenPopupMain}/> : ''}
                        </div>
                        <div className="date mt-2">${props.data.value}</div>
                    </div>
                    <div className="progress-up">
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
                    <img src={verifiedIcon} alt="icon"/>
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
                    <div className="progress-up" onClick={()=>{setPopupFollowers(true)}}>1.01%</div>
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
                    <img src={verifiedIcon} alt="icon"/>
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
        </tr>
    );
};

export default CollectionItemRow;