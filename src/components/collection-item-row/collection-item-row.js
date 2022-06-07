import React from 'react';
import vector1 from '../../assets/images/icons/vector1.png'

const CollectionItemRow = () => {
    return (
        <tr>
            <td>
                <div className="number">20</div>
            </td>
            <td>
                <div className="title">Minted</div>
                <div className="date">02-15-2022</div>
            </td>
            <td className="text-nowrap text-center">---</td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end">
                        <div className="title ">
                            <img src={vector1} alt="vector"
                                 className="mx-2"/>
                            <span>74,3</span>
                        </div>
                        <div className="date mt-2">$237.468,12</div>
                    </div>
                    <div className="progress-up">
                        5.11%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end">
                        <div className="title ">
                            <img src={vector1} alt="vector"
                                 className="mx-1"/>
                            <span>400.568,89</span>
                        </div>
                        <div className="date mt-2">$1.130.433.166,77</div>
                    </div>
                    <div className="progress-down">
                        6.41%
                    </div>
                </div>
            </td>
            <td>
                <div className="title">Ethereum</div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">9999</div>
                    <div className="progress-up">
                        1.01%
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <div className="title">4514</div>
                    <div className="progress-up">1.01%</div>
                </div>
            </td>
        </tr>
    );
};

export default CollectionItemRow;