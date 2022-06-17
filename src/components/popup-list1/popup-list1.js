import React, {useState} from 'react';
import vector2 from "../../assets/images/icons/vector2.svg";
import vector3 from "../../assets/images/icons/vector3.svg";
import vector4 from "../../assets/images/icons/vector4.svg";
import iconBoat from "../../assets/images/icons/icon-boat.svg";
import twitterIcon from "../../assets/images/icons/twtitter-icon.png";
import starChecked from "../../assets/images/icons/star-checked.png";
import starUnchecked from "../../assets/images/icons/star-uncheked.png";
import PopupListItem from "../popup-list-item";

const PopupList1 = () => {
    const [values,setValues] = useState([
        {id:1,name:'garyvee'},
        {id:2,name:'garyvee'},
    ]);

    return (
        <div className='popupList1 customScrollbar'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className="title d-flex align-items-center">
                                Watch
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Image
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Name
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Wallet adress
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Total NFT Minted
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Total NFT Owned
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Total NFT Sold
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Price Paid
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Dated Purchased
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Wallet value
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Confidence Score
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                Added to Influential wallets (Public)
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={iconBoat} className="icon me-1" alt="icon"/>
                                Verified
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Added to Influential wallets (Public)
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Followers
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Followers quality score
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Following
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Verified
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Mentions
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                        <th>
                            <div className="title d-flex align-items-center">
                                <img src={twitterIcon} className="icon me-1" alt="icon"/>
                                Number of Tweets
                                <img src={vector2} className="icon" alt="icon"/>
                                <img src={vector3} className="icon" alt="icon"/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {values.map((e)=>{
                        return (
                            <PopupListItem name={e.name} key={e.id}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PopupList1;