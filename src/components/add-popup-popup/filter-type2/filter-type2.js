import React,{useState} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from '@material-ui/core/Slider';
function valueText(value) {
    return `${value}°C`;
}
const FilterType2 = () => {
    const [disable, setDisable] = useState(false);
    const [value, setValue] = React.useState([20, 60]);

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
                    <p className="filterSmallTitle me-2">By Range  <span>USD</span></p>
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
                            <span>0</span>
                            <span>500K</span>
                        </div>
                    </div>
                    <input type="text" className="rangeInput" value='400'/>
            </div>
        </div>
    );
};

export default FilterType2;