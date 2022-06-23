import React,{useState,useEffect} from 'react';
import downVector from "../../../assets/images/icons/vector-down.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PlatformItem from "./platform-item";

const FilterPlatform = () => {
    const [selectAll, setSelectAll] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    const [open,setOpen] = useState(true)
    const [data,setData] = useState([
        {id:1,checked:false},
        {id:2,checked:false},
        {id:3,checked:false},
        {id:4,checked:false},
        {id:5,checked:false},
        {id:6,checked:false},
        {id:7,checked:false},
        {id:8,checked:false},
        {id:9,checked:false},
    ]);
    const handleChange = (event) => {
        setSelectAll(event.target.checked);
    }
    const handleDisableCheck = (event) => {
        setDisable(event.target.checked);
    }
    useEffect(()=>{
        let newData = data.map((e)=>{
            if(selectAll){
                return {...e,checked:true}
            }else {
                return {...e,checked:false}
            }
        })
        setData(newData)
    },[selectAll])
    return (
        <div className='filterPlatform'>
            <div className="nameButton" onClick={()=>{setOpen(!open)}}>
                Platform
                <img src={downVector} alt=""/>
            </div>
            {
                open ? <>
                    <div className="d-flex justify-content-center p-3">
                        <input type="text" className='searchInput' placeholder='Search'/>
                    </div>
                    <div style={{opacity:disable ? '0.5' : '1'}}>
                        <div className="d-flex justify-content-between p-3">
                            <FormControlLabel
                                control={<Checkbox  checked={selectAll}
                                                    onChange={handleChange}
                                                    size="small"/>}
                                label="All" />
                            <FormControlLabel
                                control={<Checkbox  checked={disable}
                                                    onChange={handleDisableCheck}
                                                    size="small"/>}
                                label="Disable" />
                        </div>
                        <div className="platformWrapper p-3 pt-0 customScrollbar">
                            {
                                data.map((e)=>{
                                    return <PlatformItem key={e.id} data={e}/>
                                })
                            }
                        </div>
                    </div>
                </> : ''
            }

        </div>
    );
};

export default FilterPlatform;