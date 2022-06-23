import React, {useState} from 'react';
import FilterNav from "./filter-nav";
import FilterName from "./filter-name";
import FilterPlatform from "./filter-platform/filter-platform";

const AddFilterPpopup = () => {
    const [page,setPage] = useState('name')
    return (
        <div className='add-filter-popup'>
            <div className="d-flex main-wrapper">
                <FilterNav setPage={setPage}/>

                <div className="filterContentWrapper">
                    {page === 'name' ? <FilterName/> : ''}
                    {page === 'platform' ? <FilterPlatform/> : ''}
                </div>
            </div>
            <div className="filterButtonsWrapper">
                <button className='button greyButton me-4'>Clear All Filters </button>
                <button className='button me-5'>Show Results</button>
                <div className="filterActive">
                    <p>Filter Active</p>
                    <p>9/11</p>
                </div>
            </div>
        </div>
    );
};

export default AddFilterPpopup;