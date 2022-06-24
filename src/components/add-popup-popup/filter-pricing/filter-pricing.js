import React,{useState} from 'react';
import downVector from "../../../assets/images/icons/vector-down.svg";
import FilterType1 from "../filter-type1";
import FilterType2 from "../filter-type2";
import FilterType3 from "../filter-type3";
import FilterType4 from "../filter-type4";

const FilterPricing = () => {
    const [floorOpen,setFloorOpen] = useState(true)
    const [average,setAverage] = useState(true)
    const [volume,setVolume] = useState(true)
    return (
        <div className='filter-pricing customScrollbar'>
            <div className="nameButton" onClick={()=>{setFloorOpen(!floorOpen)}}>
                Floor price
                <img src={downVector} alt="" style={{transform:`rotate(${floorOpen ? '0' : '-90'}deg)`}}/>
            </div>
            {
                floorOpen ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
            <div className="nameButton" onClick={()=>{setAverage(!average)}}>
                Average Price
                <img src={downVector} alt="" style={{transform:`rotate(${average ? '0' : '-90'}deg)`}}/>
            </div>
            {
                average ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
            <div className="nameButton" onClick={()=>{setVolume(!volume)}}>
                Volume Traded
                <img src={downVector} alt="" style={{transform:`rotate(${volume ? '0' : '-90'}deg)`}}/>
            </div>
            {
                volume ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
        </div>
    );
};

export default FilterPricing;