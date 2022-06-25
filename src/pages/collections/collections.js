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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutsideClickHandler from 'react-outside-click-handler';
import TimeButtons from "../../components/time-buttons";
import AddFilterPpopup from "../../components/add-popup-popup";



const Collections = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [positionTop, setPositionTop] = React.useState(1000);
    const [elMaxWidth, setElMaxWidth] = React.useState(500);
    const [tableWidth, setTableWidth] = React.useState(500);
    const [startDate, setStartDate] = useState(new Date());
    const [filters,setFilters] = useState([
        'Twitter followers: >2000',
        'Status: Recently added',
        'Instagram: Verified'
    ])
    const [value, setValue] = React.useState('percent');
    const [sortType,setSortType] = useState('top');
    const [openFilterPopOver,setOpenFilterPopover] = useState(false);
    const [avgPrice,setAvgPrice] = useState([
        {value:1000,percent:1,number:20},
        {value:900,percent:3,number:20},
        {value:800,percent:2,number:20},
        {value:700,percent:5,number:20},
        {value:600,percent:4,number:20},
        {value:500,percent:7,number:20},
        {value:400,percent:8,number:20},
        {value:300,percent:10,number:20},
        {value:200,percent:6,number:20},
        {value:100,percent:9,number:20},
    ])
    const [filterPopupOpen,setFilterPopupOpen] = useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
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
    },[])
    useEffect(()=>{
        let data = [];
        if(sortType === 'top'){
            data = avgPrice.sort((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0))
        }else{
            data = avgPrice.sort((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0))
        }
        console.log(sortType);
    },[value,sortType])
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
            <div className="main-container filterContainer">
                <div className="add-filter-button" onClick={()=>setFilterPopupOpen(true)}>
                    <img src={plusIcon} alt="plus icon"/>
                    Add Filter
                    {
                        filterPopupOpen ?
                            <OutsideClickHandler
                                onOutsideClick={() => {setFilterPopupOpen(false)}}
                            >
                                <AddFilterPpopup/>
                            </OutsideClickHandler>
                            : ''
                    }
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
                <TimeButtons/>
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
                                                        <OutsideClickHandler
                                                            onOutsideClick={() => {setOpenFilterPopover(false)}}>
                                                            <div className="sort-icon" onClick={()=>{setOpenFilterPopover(true)}}>
                                                                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 0.5C2.9625 0.5 0.5 2.9625 0.5 6C0.5 9.0375 2.9625 11.5 6 11.5C9.0375 11.5 11.5 9.0375 11.5 6C11.5 2.9625 9.0375 0.5 6 0.5ZM4.3535 4.8965C4.2592 4.80542 4.1329 4.75502 4.0018 4.75616C3.8707 4.7573 3.74529 4.80989 3.65259 4.90259C3.55989 4.99529 3.5073 5.1207 3.50616 5.2518C3.50502 5.3829 3.55542 5.5092 3.6465 5.6035L5.6465 7.6035C5.74026 7.69724 5.86742 7.74989 6 7.74989C6.13258 7.74989 6.25974 7.69724 6.3535 7.6035L8.3535 5.6035C8.44458 5.5092 8.49498 5.3829 8.49384 5.2518C8.4927 5.1207 8.44011 4.99529 8.34741 4.90259C8.25471 4.80989 8.1293 4.7573 7.9982 4.75616C7.8671 4.75502 7.7408 4.80542 7.6465 4.8965L6 6.543L4.3535 4.8965Z" fill={openFilterPopOver ? "#556EE6" : '#A1A1A1'}/>
                                                                </svg>


                                                                {
                                                                    openFilterPopOver ? <div className="sort-popover-container">
                                                                        <div className="sortButtons">
                                                                            <svg onClick={()=>{setSortType('top')}} width="20" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M5.00002 0.439514L0.881104 3.96951L2.11894 5.03051L5.00002 2.56051L7.8811 5.03051L9.11894 3.96951L5.00002 0.439514Z" fill={sortType === 'top' ? "#556EE6" : '#A1A1A1'}/>
                                                                            </svg>
                                                                            <svg onClick={()=>{setSortType('bottom')}} width="20" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M4.99998 4.591L9.1189 1.061L7.88106 3.5892e-06L4.99998 2.47L2.1189 3.15742e-06L0.881063 1.061L4.99998 4.591Z" fill={sortType === 'bottom' ? "#556EE6" : '#A1A1A1'}/>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="sortRadioButtons">
                                                                            <FormControl>
                                                                                <RadioGroup
                                                                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                                                                    name="controlled-radio-buttons-group"
                                                                                    value={value}
                                                                                    onChange={handleChange}
                                                                                >
                                                                                    <FormControlLabel value="percent" control={<Radio size='small'/>} label="%" />
                                                                                    <FormControlLabel value="value" control={<Radio size='small'/>} label="Value" />
                                                                                </RadioGroup>
                                                                            </FormControl>
                                                                        </div>
                                                                    </div> : ''
                                                                }
                                                            </div>
                                                        </OutsideClickHandler>
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
                                        {
                                            avgPrice.map(e => <CollectionItemRow data={e}/>)
                                        }
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