import React,{useState} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@material-ui/core/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
function valueText(value) {
    return `${value}°C`;
}
const FilterType4 = () => {
    const [disable, setDisable] = useState(false);
    const [value, setValue] = React.useState([20, 80]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDisableCheck = (event) => {
        setDisable(event.target.checked);
    }
    return (
        <div className=" filter-type-2">
            <div className="d-flex w-100 px-3 py-2">
                <div className="d-flex w-75 align-items-center mui-radio-wrapper" style={{opacity:disable ? '0.5' : '1'}}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="1"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1"  control={<Radio size='small'/>}
                                          label={
                            (<div className='d-flex align-items-center'>
                                <span className='me-2'>By %</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10.6673V1.33398" stroke="#27AE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1.33334 6.00065L6.00001 1.33398L10.6667 6.00065" stroke="#27AE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>)} />
                        <FormControlLabel value="2"  control={<Radio  size='small'/>} label={
                            (<div className='d-flex align-items-center'>
                                <span className='me-2'>By %</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1.33268L6 10.666" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.6667 5.99935L5.99999 10.666L1.33332 5.99935" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>


                            </div>)} />
                    </RadioGroup>
                </div>
                <div className="d-flex w-25 justify-content-end">
                    <FormControlLabel
                        control={<Checkbox  checked={disable}
                                            onChange={handleDisableCheck}
                                            size="small"/>}
                        label="Disable" />
                </div>
            </div>
            <div className="d-flex justify-content-between py-2 px-3 rangeContainer" style={{opacity:disable ? '0.5' : '1'}}>
                <input type="text" className="rangeInput" value='100'/>
                <div className="d-flex rangeWrapper">
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        // valueLabelDisplay="auto"
                        size="small"
                        getAriaValueText={valueText}
                    />
                    <div className="d-flex rangeIndicators">
                        <span>0%</span>
                        <span>500%</span>
                    </div>
                </div>
                <input type="text" className="rangeInput" value='400'/>
            </div>
        </div>
    );
};

export default FilterType4;