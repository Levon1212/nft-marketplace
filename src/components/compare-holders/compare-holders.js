import React from 'react';
import TimeButtons from "../time-buttons";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ChartType1 from "../chart-type1";
const CompareHolders = () => {
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='compare-holders'>
            <div className="title">Compare Collection</div>
            <div className="timeButtonsContainer">
                <TimeButtons/>
            </div>
            <div className="selectWrapperMui">
                <FormControl fullWidth>
                    <Select
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        legend={false}
                    >
                        <MenuItem value={10}>Volume Traded</MenuItem>
                        <MenuItem value={20}>Volume Traded 2</MenuItem>
                        <MenuItem value={30}>Volume Traded 3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="chartWrapper">
                <ChartType1 type={'double'}/>
            </div>
        </div>
    );
};

export default CompareHolders;