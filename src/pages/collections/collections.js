import React, {useState, useRef, useEffect} from 'react';
import CollectionItemMain from "../../components/collection-item-main"
import vector2 from '../../assets/images/icons/vector2.svg'
import vector3 from '../../assets/images/icons/vector3.svg'
import vector4 from '../../assets/images/icons/vector4.svg'
import starIcon from '../../assets/images/icons/star-icon.svg'
import timeIcon from '../../assets/images/icons/time-icon.svg'
import categoryIcon from '../../assets/images/icons/category-icon.svg'
import platformIcon from '../../assets/images/icons/platform-icon.svg'
import compareIcon from '../../assets/images/icons/compare-icon.svg'
import mintingIcon from '../../assets/images/icons/minting-icon.svg'
import newMinths from '../../assets/images/icons/new-minths.svg'
import nextCheap from '../../assets/images/icons/next-cheap.svg'
import plusIcon from '../../assets/images/icons/plus-icon.svg'
import xButton from '../../assets/images/icons/x-button.svg'
import iconBoat from '../../assets/images/icons/icon-boat.svg'
import twitterIcon from '../../assets/images/icons/twtitter-icon.png'
import CollectionItemRow from "../../components/collection-item-row"
import TabsMain from "../../components/tabs-main"
import StatisticHeader from "../../components/statistic-header";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popover from "../../components/popover";



const Collections = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [positionTop, setPositionTop] = React.useState(1000);
    const [elMaxWidth, setElMaxWidth] = React.useState(500);
    const [tableWidth, setTableWidth] = React.useState(500);
    const [startDate, setStartDate] = useState(new Date());
    const [filterTime,setFilterTime] = useState('1min')
    const [filters,setFilters] = useState([
        'Twitter followers: >2000',
        'Status: Recently added',
        'Instagram: Verified'
    ])
    const deleteFilter = (title) => {
        let data = filters.filter(e => e !== title)
        setFilters(data);
    }
    useEffect(()=>{
        let elem = document.querySelector('.collectionsItemsTable').getBoundingClientRect()
        let table1 = document.querySelector('.table1').getBoundingClientRect()
        setPositionTop(elem.top)
        setElMaxWidth(elem.width)
        setTableWidth(table1.width)
        window.addEventListener('scroll', ()=>setScrollPosition( window.pageYOffset));
        console.log('elem',elem);
    },[])
    const toggle = () => {
        this.component.setOpen(this.focus);
        this.focus = !this.focus;
    }
    return (
        <div className='collections-page'>
            <StatisticHeader/>
            <div className="main-container">
                <p className='title'>
                    Tracking  50,000+ NFT Collections from 15 Platforms and 1,000,000+ Wallets
                </p>
            </div>
            <div className="main-container">
                <p className='subTitle'>
                    100+ Filters, 100+ Alerts, Monitor Twitter, Instagram, Discord, BlockChain and more for each Collection & Wallet
                    <span>Read more</span>
                </p>
            </div>
            <div className="main-container">
                <div className="add-filter-button">
                    <img src={plusIcon} alt="plus icon"/>
                    Add Filter
                </div>
                <span className='solid-border'></span>
                {
                    filters.map((e)=>{
                        return (
                            <div className="filter-button">
                                {e}
                                <span onClick={()=>{deleteFilter(e)}}>
                                    <img src={xButton} alt="x button"/>
                                </span>
                            </div>
                        )
                    })
                }
                <div className="clear-filter-button" onClick={()=>{setFilters([])}}>
                    Clear All Filters
                </div>
            </div>
            <div className="main-container my-3 align-items-center with-datepicker">
                <div className={`time-button ${filterTime === '1min' ? 'active' : ''}`} onClick={()=>{setFilterTime('1min')}}>
                    1Min
                </div>
                <div className={`time-button ${filterTime === '15min' ? 'active' : ''}`} onClick={()=>{setFilterTime('15min')}}>
                    15Min
                </div>
                <div className={`time-button ${filterTime === '30min' ? 'active' : ''}`} onClick={()=>{setFilterTime('30min')}}>
                    30Min
                </div>
                <div className={`time-button ${filterTime === '1h' ? 'active' : ''}`} onClick={()=>{setFilterTime('1h')}}>
                    1h
                </div>
                <div className={`time-button ${filterTime === '6h' ? 'active' : ''}`} onClick={()=>{setFilterTime('6h')}}>
                    6h
                </div>
                <div className={`time-button ${filterTime === '24h' ? 'active' : ''}`} onClick={()=>{setFilterTime('24h')}}>
                    24h
                </div>
                <div className={`time-button ${filterTime === '48h' ? 'active' : ''}`} onClick={()=>{setFilterTime('48h')}}>
                    48h
                </div>
                <div className={`time-button ${filterTime === '7d' ? 'active' : ''}`} onClick={()=>{setFilterTime('7d')}}>
                    7d
                </div>
                <div className={`time-button ${filterTime === '14d' ? 'active' : ''}`} onClick={()=>{setFilterTime('14d')}}>
                    14d
                </div>
                <div className={`time-button ${filterTime === '30d' ? 'active' : ''}`} onClick={()=>{setFilterTime('30d')}}>
                    30d
                </div>
                <div className={`time-button ${filterTime === '60d' ? 'active' : ''}`} onClick={()=>{setFilterTime('60d')}}>
                    60d
                </div>
                <div className={`time-button ${filterTime === '90d' ? 'active' : ''}`} onClick={()=>{setFilterTime('90d')}}>
                    90d
                </div>
                <div className={`time-button ${filterTime === '12mont' ? 'active' : ''}`} onClick={()=>{setFilterTime('12mont')}}>
                    12 Months
                </div>
                <DatePicker className="date-picker-label"
                            selected={startDate}
                            dateFormat="MMM dd"
                            onChange={(date) => setStartDate(date)} />
            </div>
            <div className="main-container">
                <div className="filter-button">
                    <img src={starIcon} className='icon' alt="star icon"/>
                    Watchlist
                </div>
                <div className="filter-button">
                    <img src={timeIcon} className='icon' alt="star icon"/>
                    Recently Added
                </div>
                <div className="filter-button">
                    <img src={categoryIcon} className='icon' alt="star icon"/>
                    Categories
                </div>
                <div className="filter-button">
                    <img src={platformIcon} className='icon' alt="star icon"/>
                    Platform
                </div>
                <div className="filter-button">
                    <img src={compareIcon} className='icon' alt="star icon"/>
                    Compare
                </div>
            </div>
            <div className="main-container mt-2">
                <div className="filter-button info">
                    <img src={mintingIcon} className='icon' alt="star icon"/>
                    Minting Now
                    <div className="info-container info-popover">
                        <Popover/>
                        <img src={vector3} alt="minting icon"/>
                    </div>
                </div>
                <div className="filter-button info">
                    <img src={newMinths} className='icon' alt="star icon"/>
                    New Mints
                    <div className="info-container info-popover">
                        <Popover/>
                        <img src={vector3} alt="minting icon"/>
                    </div>
                </div>
                <div className="filter-button info">
                    <img src={nextCheap} className='icon' alt="star icon"/>
                    Next Blue Chip
                    <div className="info-container info-popover">
                        <Popover/>
                        <img src={vector3} alt="minting icon"/>
                    </div>
                </div>
            </div>
            <TabsMain/>
            <div className="collection-table">
                <div className="collections">
                    <div className={`header ${scrollPosition > positionTop - 30 ? 'fixedHeader' : ''}`}>
                       <div className="contentHeader">
                           <div className="title ml-5 icon">#</div>
                           <div className="title">Collection</div>
                           <img src={vector3} alt="icon"/>
                           <p className="date">Date Added</p>
                       </div>
                    </div>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                    <CollectionItemMain/>
                </div>
                    <ScrollSync>

                        <div className="collections-details">
                            <ScrollSyncPane>
                                <div className='d-flex customScrollbar topScrollbarContainer' style={{overflow:'auto',width:`${elMaxWidth}px`}}>
                                    <div style={{minWidth:`${tableWidth}px`}}> </div>
                                </div>
                            </ScrollSyncPane>
                            <ScrollSyncPane>
                                <div style={{maxWidth:`${elMaxWidth}px`}} className={`content collectionHeader  ${scrollPosition > positionTop - 30 ? 'fixedHeader' : ''}`}>
                                    <table className='table1 '>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="title d-flex align-items-center justify-content-center">
                                                        Platforms
                                                        <div className="sort-icon">
                                                            <img src={vector2} className="icon" alt="icon"/>
                                                            {/*<div className="sort-popover-container">*/}
                                                            {/*    <div className="sortButtons">*/}
                                                            {/*        <img src="" alt=""/>*/}
                                                            {/*    </div>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                        <div className='info-popover'>
                                                            <img src={vector3} className="icon" alt="icon"/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Status
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <div className='info-popover'>
                                                            <img src={vector3} className="icon" alt="icon"/>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Floor Price
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Avg. Floor Price
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Volume Traded
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Blockchain
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Number in Collection
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Unique Owner
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Unique Sales
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Supply Listed
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Royalty%
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Avg. Wallet Value
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                        <img src={vector4} className="icon-progress" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Confidence Score
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Influential Wallets (Public)
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        Influential Wallets(Private)
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={iconBoat} className="icon me-1" alt="icon"/>
                                                        Verified?
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Influential Profiles (Public)
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Influential Profiles (Private)
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Followers
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Followers Quality Score
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Following
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Verified
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>

                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Mentions
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Number of Tweets
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="title d-flex align-items-center">
                                                        <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                                        Tweet Quality Score
                                                        <img src={vector2} className="icon" alt="icon"/>
                                                        <img src={vector3} className="icon" alt="icon"/>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </ScrollSyncPane>
                            <ScrollSyncPane>
                                <div className="content d-flex collectionsItemsTable customScrollbar">
                                    <table className='table2'>
                                        <tbody>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        <CollectionItemRow/>
                                        </tbody>
                                    </table>
                                </div>
                            </ScrollSyncPane>
                        </div>
                    </ScrollSync>
            </div>
            <div className="main-container">
                <div className="pagination">
                    <p className="showCountWrapper">
                        Showing 1 - 20 out of 5405
                    </p>
                    <div className="buttonsWrapper">
                        <Stack spacing={2}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;