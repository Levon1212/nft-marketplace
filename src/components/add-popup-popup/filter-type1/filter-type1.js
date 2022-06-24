import React,{useState} from 'react';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";

const FilterType1 = () => {
    const [disable, setDisable] = useState(false);

    const handleDisableCheck = (event) => {
        setDisable(event.target.checked);
    }
    return (
        <div className="d-flex w-100 p-3">
            <div className="d-flex w-75 align-items-center mui-radio-wrapper" style={{opacity:disable ? '0.5' : '1'}}>
                <p className="filterSmallTitle me-2">Filter By:</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="1"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1"  control={<Radio size='small'/>}  label="USD" />
                        <FormControlLabel value="2"  control={<Radio  size='small'/>} label={(<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                            </svg>
                        )} />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="d-flex w-25 justify-content-end">
                <FormControlLabel
                    control={<Checkbox  checked={disable}
                                        onChange={handleDisableCheck}
                                        size="small"/>}
                    label="Disable" />
            </div>
        </div>
    );
};

export default FilterType1;