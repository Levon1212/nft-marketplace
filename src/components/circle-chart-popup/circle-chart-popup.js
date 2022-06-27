import React, {useState} from 'react';
import nft2 from '../../assets/images/nft/nft2.png';
import 'devextreme/dist/css/dx.light.css';
import { PieChart, Series,Label,Tooltip,Size } from 'devextreme-react/pie-chart';
import { billionaires } from './data';
import {Connector, Legend} from "devextreme-react/chart";
const customizeText = (pointInfo) => {
    return pointInfo.value + " billionaires";
}
const CircleChartPopup = (props) => {
    const [pallets,setPallets] = useState(['Material', 'Soft Pastel', 'Harmony Light', 'Pastel', 'Bright', 'Soft', 'Ocean', 'Office', 'Vintage', 'Violet', 'Carmine', 'Dark Moon', 'Soft Blue', 'Dark Violet', 'Green Mist'])
    return (
        <div className='circle-chart-popup'>
            <button className='closeButton' onClick={()=>{props.closeHandle(false)}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 9L9 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L15 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="contentWrapper">
                <div className="desWrapper">
                    <div className="title">
                        <img src={nft2} alt="nft"/>
                        Bored Ape Yacht Club
                    </div>
                    <p className="subTitle">
                        (Holding Amount Distribution)
                    </p>
                </div>
                <div className="chartContainer">
                    <div className="chartWrapper">
                        <PieChart
                            dataSource={billionaires}
                            type="doughnut"
                            palette={['#556EE6', '#F3BA2F', '#EB5757', '#27AE60', '#55ACEE','#ADD7F6']}
                        >
                            <Size
                                height={267}
                                width={267}
                            />
                            <Legend
                                visible={false}
                            />
                            <Series
                                argumentField="country"
                                valueField="amount"
                            >

                            </Series>
                        </PieChart>
                    </div>
                    <div className="chartDetails">
                        <div className="item">
                            <div className="color" style={{backgroundColor:'#556EE6'}}></div>
                            <p className='dotTitle'>1</p>
                            <p>69.32%</p>
                        </div>
                        <div className="item">
                            <div className="color" style={{backgroundColor:'#F3BA2F'}}></div>
                            <p className='dotTitle'>2-3</p>
                            <p>21.28%</p>
                        </div>
                        <div className="item">
                            <div className="color" style={{backgroundColor:'#EB5757'}}></div>
                            <p className='dotTitle'>4-10</p>
                            <p>7.40%</p>
                        </div>
                        <div className="item">
                            <div className="color" style={{backgroundColor:'#27AE60'}}></div>
                            <p className='dotTitle'>11-50</p>
                            <p>1.80%</p>
                        </div>
                        <div className="item">
                            <div className="color" style={{backgroundColor:'#55ACEE'}}></div>
                            <p className='dotTitle'>51-100</p>
                            <p>0.19%</p>
                        </div>
                        <div className="item">
                            <div className="color" style={{backgroundColor:'#ADD7F6'}}></div>
                            <p className='dotTitle'>>100</p>
                            <p>0.00%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleChartPopup;