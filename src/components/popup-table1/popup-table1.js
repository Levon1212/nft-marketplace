import React from 'react';
import vector2 from "../../assets/images/icons/vector2.svg";
import vector3 from "../../assets/images/icons/vector3.svg";
import iconBoat from "../../assets/images/icons/icon-boat.svg";
import twitterIcon from "../../assets/images/icons/twtitter-icon.png";
import PopupListItem from "../popup-list-item";
import PopupTableItem from "../popup-table-item/popup-table-item";

const PopupTable1 = () => {

    return (
        <div className='popupList1 customScrollbar'>
            <table className='popupTable'>
                <thead>
                <tr>
                    <th>
                        <div className="title d-flex align-items-center">
                            Date
                            <img src={vector2} className="icon" alt="icon"/>
                            <img src={vector3} className="icon" alt="icon"/>
                        </div>
                    </th>
                    <th>
                        <div className="title d-flex align-items-center">
                            Unique Owner
                            <img src={vector2} className="icon" alt="icon"/>
                            <img src={vector3} className="icon" alt="icon"/>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>

                        <PopupTableItem/>
                        <PopupTableItem/>


                </tbody>
            </table>
        </div>
    );
};

export default PopupTable1;