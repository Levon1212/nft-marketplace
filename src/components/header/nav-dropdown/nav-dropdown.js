import React, {useEffect, useState} from 'react';

const NavDropdown = (props) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        setData(props.data)
    },[props.data])
    return (
        <div className='nav-dropdown'>
            {
               data.map((e)=>{
                   return (
                       <div className="dropdown-value">
                           <div className='d-flex align-items-center' dangerouslySetInnerHTML={{__html:e.icon}}></div>
                           <p>{e.title}</p>
                       </div>
                   )
               })
            }

        </div>
    );
};

export default NavDropdown;