import React, {useState} from 'react';
import downVector from '../../../assets/images/icons/vector-down.svg'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import StandardTable from "../../standard-table";

const FilterName = () => {
    const [selectAll, setSelectAll] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    const [open,setOpen] = useState(true)
    const handleChange = (event) => {
        setSelectAll(event.target.checked);
    }
    const handleDisableCheck = (event) => {
        setDisable(event.target.checked);
    }
    return (
        <div className='d-flex flex-column filterNameContainer'>
            <div className="nameButton" onClick={()=>setOpen(!open)}>
                Name
                <img src={downVector} alt="" style={{transform:`rotate(${open ? '0' : '-90'}deg)`}}/>
            </div>
            {
                open ?  <>
                    <div className="searchWrapper">
                        <div className="checks">
                            <FormControlLabel
                                control={<Checkbox  checked={selectAll}
                                                    onChange={handleChange}
                                                    size="small"/>}
                                label="Select All" />
                            <FormControlLabel
                                control={<Checkbox  checked={disable}
                                                    onChange={handleDisableCheck}
                                                    size="small"/>}
                                label="Disable" />
                        </div>
                        <input type="text" placeholder='Search' className='searchInput'/>
                    </div>
                    <div className="filterTableWrapper customScrollbar">
                        <div style={{transition:'0.3s',opacity:disable ? '0.5' : '1'}}>
                            <StandardTable selectAll={selectAll}/>
                        </div>
                    </div>
                </> : ''
            }
        </div>
    );
};

export default FilterName;