import React, {useEffect, useState} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import nft1 from "../../../assets/images/nft/nft1.png";

const TableItem = (props) => {
    const [checked,setChecked] = useState(false)
    useEffect(()=>{
        setChecked(props.data.checked)
    },[props.data])
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <FormControlLabel className='me-2' control={<Checkbox checked={checked}
                                                                          onChange={(e)=>setChecked(e.target.checked)}
                                                                          size="small"/>}/>
                    <img src={nft1} alt="nft image" className='nftImage me-1'/>
                    <div className="title">CryptoPunks</div>
                </div>
            </td>
            <td>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3_5)">
                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_3_5">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </td>
            <td>
                <div className="d-flex flex-column align-items-end w-fit ">
                    <div className="title">844.614,52</div>
                    <div className="title2">$2.351.369.373,92</div>
                </div>
            </td>
            <td>
                <p className="title">9999</p>
            </td>
            <td>
                <p className="title">162.235</p>
            </td>
            <td>
                <p className="title">---</p>
            </td>
            <td>
                <p className="title">53988</p>
            </td>
        </tr>
    );
};

export default TableItem;