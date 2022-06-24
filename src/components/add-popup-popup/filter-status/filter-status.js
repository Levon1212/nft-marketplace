import React,{useState} from 'react';
import downVector from "../../../assets/images/icons/vector-down.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const FilterStatus = () => {
    const [disable, setDisable] = useState(false);
    const [open,setOpen] = useState(true)

    const handleDisableCheck = (event) => {
        setDisable(event.target.checked);
    }

    return (
        <div className='filter-status'>
            <div className="nameButton" onClick={()=>{setOpen(!open)}}>
                Status
                <img src={downVector} alt=""/>
            </div>
            {
                open ? <div className="d-flex w-100 p-3">
                    <div className="d-flex w-50 mui-radio-wrapper" style={{opacity:disable ? '0.5' : '1'}}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="1"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="1"  control={<Radio />}  label="Minted" />
                                <FormControlLabel value="2" control={<Radio />} label="Not Minted" />
                                <FormControlLabel value="3" control={<Radio />} label="Recently Added," />
                                <FormControlLabel value="4" control={<Radio />} label="Upcoming" />
                                <FormControlLabel value="5" control={<Radio />} label="Trending" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="d-flex w-50 justify-content-end align-items-start">
                        <FormControlLabel
                            control={<Checkbox  checked={disable}
                                                onChange={handleDisableCheck}
                                                size="small"/>}
                            label="Disable" />
                    </div>
                </div> : ''
            }

        </div>
    );
};

export default FilterStatus;