import React, {useState} from 'react';
import downVector from "../../../assets/images/icons/vector-down.svg";
import FilterType1 from "../filter-type1";
import FilterType2 from "../filter-type2";
import FilterType3 from "../filter-type3";
import FilterType4 from "../filter-type4";

const FilterTwitter = () => {
    const [one,setOne] = useState(true);
    const [two,setTwo] = useState(true);
    const [tree,setTree] = useState(true);
    const [four,setFour] = useState(true);
    const [five,setFive] = useState(true);
    return (
        <div className='filter-pricing customScrollbar'>
            <div className="filterSearchContainer p-3">
                <p className="filterSearchTitle">Filters</p>
                <input type="text" placeholder='Search'/>
            </div>
            <div className="nameButton" onClick={()=>{setOne(!one)}}>
                Influential Profiles
                <img src={downVector} alt="" style={{transform:`rotate(${one ? '0' : '-90'}deg)`}}/>
            </div>
            {
                one ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
            <div className="nameButton" onClick={()=>{setTwo(!two)}}>
                Followers
                <img src={downVector} alt="" style={{transform:`rotate(${two ? '0' : '-90'}deg)`}}/>
            </div>
            {
                two ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
            <div className="nameButton" onClick={()=>{setTree(!tree)}}>
                Followers Quality Score
                <img src={downVector} alt="" style={{transform:`rotate(${tree ? '0' : '-90'}deg)`}}/>
            </div>
            {
                tree ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
            <div className="nameButton" onClick={()=>{setFour(!four)}}>
                Following
                <img src={downVector} alt="" style={{transform:`rotate(${four ? '0' : '-90'}deg)`}}/>
            </div>
            {
                four ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
            <div className="nameButton" onClick={()=>{setFive(!five)}}>
                Mentions
                <img src={downVector} alt="" style={{transform:`rotate(${five ? '0' : '-90'}deg)`}}/>
            </div>
            {
                five ? <>
                    <FilterType1/>
                    <FilterType2/>
                    <FilterType3/>
                    <FilterType4/>
                </> : ''
            }
        </div>
    );
};

export default FilterTwitter;