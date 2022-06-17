import React from 'react';
import starUnchecked from "../../assets/images/icons/star-uncheked.png";
import nft7 from "../../assets/images/nft/nft7.png";
import verifiedIcon from "../../assets/images/icons/verfied-icon.svg";

const PopupTableItem = () => {
    return (
        <tr>
            <td>
                <div className="title">24-Nov-2021</div>
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

export default PopupTableItem;