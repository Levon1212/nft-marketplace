import React,{useEffect, useState} from 'react';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import iconBoat from '../../../../assets/images/icons/icon-boat.svg';

const PlatformItem = (props) => {
    const [checked,setChecked] = useState(false)
    useEffect(()=>{
        setChecked(props.data.checked)
    },[props.data])
    return (
        <div className='platFormItem'>
            <FormControlLabel className='me-2' control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)} size="small"/>}/>
            <img src={iconBoat} alt="" className='icon'/>
            <p className="itemTitle">Opensea</p>
        </div>
    );
};

export default PlatformItem;