import React from 'react';
import starChecked from '../../assets/images/icons/star-checked.png'
import vector4 from '../../assets/images/icons/vector4.svg'
import collection1 from '../../assets/images/collection1.png'
const CollectionItemMain = (props) => {
    return (
        <div className="item">
            <div className="star">
                <img src={starChecked} alt=""/>
                <p className="count">351</p>
            </div>
            <div className="number">1</div>
            <img src={collection1} className="image" alt="CryptoPunks"/>
            <div className="title">
                CryptoPunks
                <p className="date">02-15-2022</p>
            </div>
            <img src={vector4} className="icon" alt="icon"/>
        </div>
    );
};

export default CollectionItemMain;