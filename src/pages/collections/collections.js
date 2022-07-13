import React, {useState, useRef, useEffect} from 'react';
import CollectionItemMain from "../../components/collection-item-main"
import starIcon from '../../assets/images/icons/star-icon.svg'
import categoryIcon from '../../assets/images/icons/category-icon.svg'
import platformIcon from '../../assets/images/icons/platform-icon.svg'
import plusIcon from '../../assets/images/icons/plus-icon.svg'
import xButton from '../../assets/images/icons/x-button.svg'
import CollectionItemRow from "../../components/collection-item-row"
import TabsMain from "../../components/tabs-main"
import StatisticHeader from "../../components/statistic-header";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import "react-datepicker/dist/react-datepicker.css";
import OutsideClickHandler from 'react-outside-click-handler';
import AddFilterPpopup from "../../components/add-popup-popup";
import CompareHolders from "../../components/compare-holders";
import TableHead from "../../components/table-head";
import data from './data';


const Collections = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [positionTop, setPositionTop] = React.useState(1000);
    const [elMaxWidth, setElMaxWidth] = React.useState(500);
    const [tableWidth, setTableWidth] = React.useState(500);
    const [tableChart,setTableChart] = useState('none')
    const [startDate, setStartDate] = useState(new Date());
    const [comparePopupOpen,setComparePopupOpen] = useState(false)
    const [compareHoldersOpen,setCompareHoldersOpen] = useState(false)
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
                    <span className='gradientText'>Trending</span> NFT Collections by Sales
                </p>
            </div>
            <div className="main-container">
                <p className='subTitle'>
                    100+ Filters, 100+ Alerts, Monitor Twitter, Instagram, Discord, BlockChain and more for each Collection & Wallet
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
            <div className="main-container mt-3">
                <div className="filter-button">
                    <img src={starIcon} className='icon' alt="star icon"/>
                    Watchlist
                </div>
                {/*<div className="filter-button">*/}
                {/*    <img src={timeIcon} className='icon' alt="star icon"/>*/}
                {/*    Recently Added*/}
                {/*</div>*/}
                <div className="filter-button">
                    <img src={categoryIcon} className='icon' alt="star icon"/>
                    Categories
                </div>
                <div className="filter-button">
                    <img src={platformIcon} className='icon' alt="star icon"/>
                    Platform
                </div>
                {/*<div className="d-flex position-relative">*/}
                {/*    <div className="filter-button" onMouseUp={()=>{setComparePopupOpen(true)}}>*/}
                {/*        <img src={compareIcon} className='icon' alt="star icon"/>*/}
                {/*        Compare*/}
                {/*    </div>*/}
                {/*    {comparePopupOpen ? <ComparePopup setCompareHoldersOpen={setCompareHoldersOpen}  closeHandle={setComparePopupOpen} /> : ''}*/}
                {/*</div>*/}

            </div>
            <TabsMain setTableChart={setTableChart} tableChart={tableChart} setValue={setValue}/>
            {
                compareHoldersOpen ? <CompareHolders/> : ''
            }
            <div className="collection-table">
                <div className="collections">
                    <div className={`header ${scrollPosition > positionTop - 30 ? 'fixedHeader' : ''}`}>
                       <div className="contentHeader">
                           <div className="title ml-5 icon">#</div>
                           <div className="title">Collection</div>
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
                                        <TableHead columns={data.head}/>
                                    </table>
                                </div>
                            </ScrollSyncPane>
                            <ScrollSyncPane>
                                <div className="content d-flex collectionsItemsTable customScrollbar">
                                    <table className='table2'>
                                        <tbody>
                                        {
                                            avgPrice.map(e => <CollectionItemRow chart={tableChart} data={e}/>)
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