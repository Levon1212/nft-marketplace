import React from 'react';
import starUnchecked from "../../assets/images/icons/star-uncheked.png";
import nft7 from '../../assets/images/nft/nft7.png';
import verifiedIcon from "../../assets/images/icons/verfied-icon.svg";
const PopupListItem = (props) => {
    return (
        <tr>
            <td>
                <div className="star">
                    <img src={starUnchecked}/>
                    <p className="count">351</p>
                </div>
            </td>
            <td>
                <div className="name">
                    <img src={nft7}/>
                </div>
            </td>
            <td>
                <div className="title">{props.name}</div>
            </td>
            <td>
                <div className="title">Tr0x458Bf0d2B1e28...</div>
            </td>
            <td>
                <div className="title">15</div>
            </td>
            <td>
                <div className="title">630</div>
            </td>
            <td>
                <div className="title">59</div>
            </td>
            <td>
                <div className="title">47</div>
            </td>
            <td>
                <div className="title">15-02-2022</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="title">
                    <img src={verifiedIcon} alt="icon"/>
                </div>
                <div className="date">02-15-2022</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="title">
                    <img src={verifiedIcon} alt="icon"/>
                </div>
                <div className="date">02-15-2022</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default PopupListItem;