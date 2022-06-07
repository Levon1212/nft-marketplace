import React from 'react';

const StatisticHeader = () => {
    return (
        <div className='statistic-header'>
            <div className="main-container py-0">
                <div className="item">
                    Collections: <span>50,722</span>
                </div>
                <div className="item">
                    Wallets: <span>1,020,891</span>
                </div>
                <div className="item">
                    Platform: <span>15</span>
                </div>
                <div className="item">
                    24h Vol: <span>$225,769,360,819</span>
                </div>
                <div className="item">
                    ETH Gas:<span>28 gwei</span>
                </div>
                <div className="item">
                    ETH Price: <span>$3,500</span>
                </div>
                <div className="item">
                    SOL Price :  <span>$135</span>
                </div>
            </div>
        </div>
    );
};

export default StatisticHeader;