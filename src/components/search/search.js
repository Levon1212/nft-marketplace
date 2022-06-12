import React, {useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import timeIcon from '../../assets/images/icons/time-icon.svg';
import vector1 from '../../assets/images/icons/vector1.png';
import linkIcon from '../../assets/images/icons/link-icon.svg';
import closeIcon from '../../assets/images/icons/close-icon.png';
import nft1 from '../../assets/images/nft/nft1.png';
import nft2 from '../../assets/images/nft/nft2.png';
import nft3 from '../../assets/images/nft/nft3.png';
import nft4 from '../../assets/images/nft/nft4.png';
import iconR from '../../assets/images/icons/icon-r.svg';
import iconBoat from '../../assets/images/icons/icon-boat.svg';
import groupNfts from '../../assets/images/icons/gruop-nfts.png';
import twitterIcon from '../../assets/images/icons/twtitter-icon.png';
import instagramIcon from '../../assets/images/icons/instagram-icon.png';
import nft5 from '../../assets/images/nft/nft5.png';
import nft6 from '../../assets/images/nft/nft6.png';
import nft7 from '../../assets/images/nft/nft7.png';

const Search = () => {
    const [focused,setFocused] = useState(false);
    return (
        <div className='search'>
            <OutsideClickHandler
                onOutsideClick={() => {setFocused(false)}}>
                <input type="text"
                       onFocus={()=>{setFocused(true)}}
                       className={focused ? 'focusedSearch' : ''}
                       placeholder='Search'/>
                {
                    focused ? <button className='closeButton' onClick={()=>{setFocused(false)}}>
                        <img src={closeIcon} alt="close icon"/>
                    </button> : ''
                }
                {
                    focused ? <div className="searchDropdown customScrollbar">
                        <div className="searchTitle"><img src={timeIcon} alt="time icon"/>Recent Searches</div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image checked">
                                    <img src={nft6} alt="nft image"/>
                                </div>
                                <div className="des">
                                    <p className="title">Decentraland</p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>
                                                xt83hdgxnns..
                                                <img src={linkIcon} alt=""/>
                                            </p>
                                        </div>
                                        <div className="column">
                                            <p>Vol: <img src={vector1} alt=""/> <span>844.614,52</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Floor Price: <img src={vector1} alt=""/> <span>4.74</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="closeButtonWrapper">
                                <span>#2</span>
                                <button className='closeButtonItem'>
                                    <img src={closeIcon} alt="close icon"/>
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image checked">
                                    <img src={nft7} alt="nft image"/>
                                </div>
                                <div className="des">
                                    <p className="title">Mutant Ape Yatch Club</p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>xt83hdgxnns..</p>
                                        </div>
                                        <div className="column">
                                            <p>Vol: <img src={vector1} alt=""/> <span>844.614,52</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Floor Price: <img src={vector1} alt=""/> <span>89</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="closeButtonWrapper">
                                <span>#3</span>
                                <button className='closeButtonItem'>
                                    <img src={closeIcon} alt="close icon"/>
                                </button>
                            </div>

                        </div>
                        <div className="searchTitle">Collection</div>
                        <div className="item">
                           <div className="wrapper">
                               <div className="image checked">
                                   <img src={nft1} alt="nft image"/>
                               </div>
                               <div className="des">
                                   <p className="title">Crypto Punks</p>
                                   <div className="ad">
                                       <div className="column">
                                           <p>xt83hdgxnns..</p>
                                       </div>
                                       <div className="column">
                                           <p>Vol: <img src={vector1} alt=""/> <span>844.614,52</span></p>
                                       </div>
                                       <div className="column">
                                           <p>Floor Price: <img src={vector1} alt=""/> <span>---</span></p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft2} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">Bored Ape Yatch Club</p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>xt83hdgxnns..</p>
                                        </div>
                                        <div className="column">
                                            <p>Vol: <img src={vector1} alt=""/> <span>844.614,52</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchTitle">Items</div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft3} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">Bored Ape Yacht Club #7894</p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>xt83hdgxnns..</p>
                                        </div>
                                        <div className="column">
                                            <p>Platform: <img src={iconR} alt=""/> <img src={iconBoat} alt=""/> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchTitle">Wallet</div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft4} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">Garyvee</p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>xt83hdgxnns..</p>
                                        </div>
                                        <div className="column">
                                            <p>NFTs: <img src={groupNfts} alt=""/> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchTitle">Social</div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft4} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={twitterIcon} alt="nft image" className='me-1'/>
                                        Garyvee
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@garyvee</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft5} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={instagramIcon} alt="nft image" className='me-1'/>
                                        beeple_crap
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@beeple</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 2.5m</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 955</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft4} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={twitterIcon} alt="nft image" className='me-1'/>
                                        Garyvee
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@garyvee</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft5} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={instagramIcon} alt="nft image" className='me-1'/>
                                        beeple_crap
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@beeple</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 2.5m</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 955</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft4} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={twitterIcon} alt="nft image" className='me-1'/>
                                        Garyvee
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@garyvee</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft5} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={instagramIcon} alt="nft image" className='me-1'/>
                                        beeple_crap
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@beeple</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 2.5m</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 955</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft4} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={twitterIcon} alt="nft image" className='me-1'/>
                                        Garyvee
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@garyvee</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft5} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={instagramIcon} alt="nft image" className='me-1'/>
                                        beeple_crap
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@beeple</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 2.5m</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 955</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft4} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={twitterIcon} alt="nft image" className='me-1'/>
                                        Garyvee
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@garyvee</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 66.631</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <img src={nft5} alt="nft image" />
                                </div>
                                <div className="des">
                                    <p className="title">
                                        <img src={instagramIcon} alt="nft image" className='me-1'/>
                                        beeple_crap
                                    </p>
                                    <div className="ad">
                                        <div className="column">
                                            <p>@beeple</p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 2.5m</span></p>
                                        </div>
                                        <div className="column">
                                            <p>Followers: <span className='dl-flex ms-1'> 955</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }
            </OutsideClickHandler>

        </div>
    );
};

export default Search;