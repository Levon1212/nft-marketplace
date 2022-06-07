import React from 'react';
import dashboardIcon from '../../assets/images/icons/dashboard-icon.svg'
import portfolioIcon from '../../assets/images/icons/portfolio-icon.svg'
import walletIcon from '../../assets/images/icons/wallet-icon.svg'
import collectionIcon from '../../assets/images/icons/collection-icon.svg'
import customiseIcon from '../../assets/images/icons/customise-icon.svg'
import nfts from '../../assets/images/icons/nfts.svg'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TabsMain = () => {
    const [itemsCount, setItemsCount] = React.useState(20);

    const handleChange = (event) => {
        setItemsCount(event.target.value);
    };
    return (
        <div className='tabs-main'>
            <div className="content">
                <div className="tabs">
                    <div className="item">
                        <img src={dashboardIcon} alt=""/>
                        Dashboard
                    </div>
                    <div className="item active">
                        <img src={collectionIcon} alt=""/>
                        Collections
                    </div>
                    <div className="item">
                        <img src={nfts} alt=""/>
                        NFTs
                    </div>
                    <div className="item">
                        <img src={walletIcon} alt=""/>
                        Wallets
                    </div>
                    <div className="item">
                        <img src={portfolioIcon} alt=""/>
                        Portfolio
                    </div>
                </div>
                <div className="filter">
                    <p className="label">Show rows</p>
                    <div className="select">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={itemsCount}
                                    label={false}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                    <MenuItem value={40}>40</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="customiseButton">
                        <img src={customiseIcon} alt=""/>
                        Customise
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsMain;