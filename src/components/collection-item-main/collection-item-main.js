import React, {useState} from 'react';
import starChecked from '../../assets/images/icons/star-checked.png'
import starUnchecked from '../../assets/images/icons/star-uncheked.png'
import vector4 from '../../assets/images/icons/vector4.svg'
import collection1 from '../../assets/images/collection1.png'
const CollectionItemMain = (props) => {
    const [checked,setChecked] = useState(false)
    return (
        <div className="item">
            <div className="star">
                <img src={checked ? starChecked : starUnchecked} alt="" onClick={()=>{setChecked(!checked)}}/>
                <p className="count">351</p>
            </div>
            <div className="number">1</div>
            <img src={collection1} className="image" alt="CryptoPunks"/>
            <div className="title">
                CryptoPunks
                <p className="date">02-15-2022</p>
            </div>
            <div className="likesWrapper">
                <div className="likesButtons">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.65137 5.2129C7.81543 4.9961 7.90625 4.73047 7.90625 4.45411C7.90625 4.01563 7.66113 3.60059 7.2666 3.36915C7.16503 3.30957 7.04939 3.27822 6.93164 3.27833H4.58984L4.64844 2.07813C4.66211 1.78809 4.55957 1.5127 4.36035 1.30274C4.26258 1.19925 4.14463 1.11691 4.01378 1.06081C3.88294 1.00471 3.74198 0.97604 3.59961 0.97657C3.0918 0.97657 2.64258 1.31837 2.50781 1.80762L1.66895 4.84473H1.66602V9.02442H6.27832C6.36816 9.02442 6.45605 9.00684 6.53711 8.97168C7.00195 8.77344 7.30176 8.31934 7.30176 7.81543C7.30176 7.69239 7.28418 7.57129 7.24902 7.45411C7.41309 7.23731 7.50391 6.97168 7.50391 6.69532C7.50391 6.57227 7.48633 6.45118 7.45117 6.33399C7.61523 6.11719 7.70605 5.85157 7.70605 5.5752C7.7041 5.45215 7.68652 5.33008 7.65137 5.2129V5.2129ZM0.09375 5.15723V8.71192C0.09375 8.88477 0.233398 9.02442 0.40625 9.02442H1.04102V4.84473H0.40625C0.233398 4.84473 0.09375 4.98438 0.09375 5.15723Z" fill="#27AE60"/>
                    </svg>
                    1.2K
                </div>
                <div className="likesButtons">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.348633 4.7871C0.18457 5.0039 0.0937503 5.26952 0.0937503 5.54589C0.0937503 5.98437 0.338867 6.39941 0.733399 6.63085C0.834967 6.69043 0.950608 6.72178 1.06836 6.72167L3.41016 6.72167L3.35156 7.92187C3.33789 8.21191 3.44043 8.4873 3.63965 8.69726C3.73742 8.80075 3.85537 8.88309 3.98622 8.93919C4.11706 8.99529 4.25802 9.02396 4.40039 9.02343C4.9082 9.02343 5.35742 8.68163 5.49219 8.19238L6.33106 5.15527L6.33398 5.15527L6.33399 0.975581L1.72168 0.97558C1.63184 0.97558 1.54395 0.993159 1.46289 1.02832C0.998048 1.22656 0.698243 1.68066 0.698243 2.18456C0.698243 2.30761 0.715821 2.42871 0.750977 2.54589C0.586914 2.76269 0.496094 3.02831 0.496094 3.30468C0.496094 3.42773 0.513672 3.54882 0.548828 3.66601C0.384766 3.88281 0.293946 4.14843 0.293946 4.4248C0.295899 4.54785 0.313477 4.66992 0.348633 4.7871V4.7871ZM7.90625 4.84277L7.90625 1.28808C7.90625 1.11523 7.7666 0.975581 7.59375 0.975581L6.95899 0.975581L6.95898 5.15527L7.59375 5.15527C7.7666 5.15527 7.90625 5.01562 7.90625 4.84277Z" fill="#EB5757"/>
                    </svg>
                    1.2K
                </div>
            </div>
            <img src={vector4} className="icon" alt="icon"/>
        </div>
    );
};

export default CollectionItemMain;