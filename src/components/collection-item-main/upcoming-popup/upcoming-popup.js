import React from 'react';
import nft1 from '../../../assets/images/nft/nft1.png';
const UpcomingPopup = (props) => {
    return (
        <div className='upcoming-popup'>
            <button className='closeButton' onClick={()=>{props.closeHandle(false)}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9L9 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L15 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="left-side">
                <div className="desWrapper">
                    <div className="titleWrapper">
                        <div className="title">How do you feel about BAYC?</div>
                        <div className="subtitle">Help the community make a decision on this collection. </div>
                    </div>
                    <div className="likesWrapper">
                        <button className="likeButton">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3027 9.42384C15.6309 8.99025 15.8125 8.459 15.8125 7.90626C15.8125 7.02931 15.3223 6.19923 14.5332 5.73634C14.3301 5.61719 14.0988 5.55448 13.8633 5.5547H9.17969L9.29688 3.15431C9.32422 2.57423 9.11914 2.02345 8.7207 1.60353C8.52517 1.39655 8.28926 1.23188 8.02757 1.11967C7.76588 1.00747 7.48395 0.950127 7.19922 0.951186C6.18359 0.951186 5.28516 1.63478 5.01563 2.6133L3.33789 8.68751H3.33203V17.0469H12.5566C12.7363 17.0469 12.9121 17.0117 13.0742 16.9414C14.0039 16.5449 14.6035 15.6367 14.6035 14.6289C14.6035 14.3828 14.5684 14.1406 14.498 13.9063C14.8262 13.4727 15.0078 12.9414 15.0078 12.3887C15.0078 12.1426 14.9727 11.9004 14.9023 11.666C15.2305 11.2324 15.4121 10.7012 15.4121 10.1484C15.4082 9.90236 15.373 9.65822 15.3027 9.42384V9.42384ZM0.1875 9.31251V16.4219C0.1875 16.7676 0.466797 17.0469 0.8125 17.0469H2.08203V8.68751H0.8125C0.466797 8.68751 0.1875 8.96681 0.1875 9.31251Z" fill="white"/>
                            </svg>
                        </button>
                        <button className="unLikeButton">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.697266 8.57616C0.369141 9.00975 0.187501 9.541 0.187501 10.0937C0.187501 10.9707 0.677735 11.8008 1.4668 12.2637C1.66993 12.3828 1.90122 12.4455 2.13672 12.4453L6.82031 12.4453L6.70312 14.8457C6.67578 15.4258 6.88086 15.9765 7.2793 16.3965C7.47483 16.6034 7.71074 16.7681 7.97243 16.8803C8.23412 16.9925 8.51605 17.0499 8.80078 17.0488C9.81641 17.0488 10.7148 16.3652 10.9844 15.3867L12.6621 9.31249L12.668 9.31249L12.668 0.953115L3.44336 0.953114C3.26367 0.953114 3.08789 0.988271 2.92578 1.05858C1.9961 1.45507 1.39649 2.36327 1.39649 3.37108C1.39649 3.61718 1.43164 3.85936 1.50195 4.09374C1.17383 4.52733 0.992189 5.05858 0.992189 5.61132C0.992189 5.85741 1.02734 6.0996 1.09766 6.33397C0.769532 6.76757 0.587891 7.29882 0.587891 7.85155C0.591798 8.09764 0.626953 8.34178 0.697266 8.57616V8.57616ZM15.8125 8.68749L15.8125 1.57812C15.8125 1.23241 15.5332 0.953115 15.1875 0.953115L13.918 0.953115L13.918 9.31249L15.1875 9.31249C15.5332 9.31249 15.8125 9.03319 15.8125 8.68749Z" fill="#EB5757"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <textarea placeholder="Describe yourself here..."></textarea>
                <div className="d-flex w-100 justify-content-end mt-4">
                    <button className="buttonSend">Post</button>
                </div>
            </div>
            <div className="right-side">
                <div className="sortingWrapper">
                    <p>Sort By: </p>
                    <div className="buttonSortItem">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8737 2.28575C16.2319 2.28575 16.5422 2.39887 16.8037 2.62506C17.0654 2.85125 17.1962 3.11907 17.1963 3.42866V14.8572C17.1963 15.1665 17.0653 15.4345 16.8035 15.6607C16.542 15.8869 16.2317 16 15.8734 16H1.32287C0.96449 16 0.654503 15.8869 0.392731 15.6607C0.130922 15.4344 0 15.1665 0 14.8572V3.42869C0 3.11919 0.130922 2.85125 0.392731 2.62509C0.65454 2.3989 0.964526 2.28579 1.32287 2.28579H2.64556V1.42861C2.64556 1.03583 2.80757 0.699467 3.13135 0.419737C3.4552 0.139944 3.84449 0 4.29919 0H4.96054C5.41534 0 5.8046 0.139944 6.12838 0.419737C6.45223 0.699499 6.61421 1.03583 6.61421 1.42861V2.28579H10.5824V1.42861C10.5824 1.03583 10.7443 0.699467 11.0682 0.419737C11.3921 0.139944 11.7813 0 12.2361 0H12.8973C13.3522 0 13.7412 0.139944 14.0652 0.419705C14.389 0.699467 14.551 1.0358 14.551 1.42858V2.28575H15.8737ZM11.9979 1.22337C11.936 1.27682 11.9052 1.34534 11.9052 1.42874V4.00007C11.9052 4.08344 11.936 4.1518 11.9979 4.20544C12.0598 4.25901 12.1391 4.28574 12.2357 4.28574H12.8969C12.9936 4.28574 13.0726 4.25888 13.1347 4.20544C13.1967 4.15184 13.2277 4.08344 13.2277 4.00007V1.42874C13.2277 1.34543 13.1967 1.27691 13.1347 1.22337C13.0726 1.16977 12.9936 1.14307 12.8969 1.14307H12.2357C12.1391 1.14307 12.0598 1.16987 11.9979 1.22337ZM3.96835 1.42874C3.96835 1.34534 3.9993 1.27682 4.0613 1.22337C4.12334 1.16987 4.20251 1.14307 4.299 1.14307H4.96035C5.05688 1.14307 5.13619 1.16977 5.19805 1.22337C5.25998 1.27691 5.29108 1.34543 5.29108 1.42874V4.00007C5.29108 4.08344 5.26013 4.15193 5.19805 4.20544C5.13605 4.25888 5.05688 4.28574 4.96035 4.28574H4.299C4.20251 4.28574 4.12323 4.25901 4.0613 4.20544C3.99944 4.1518 3.96835 4.08344 3.96835 4.00007V1.42874ZM1.32281 14.8571H15.8734V5.71436H1.32281V14.8571Z" fill="#666666"/>
                        </svg>
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 7L0.468911 1.75L6.53109 1.75L3.5 7Z" fill="#666666"/>
                        </svg>
                    </div>
                    <div className="buttonSortItem">
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 7L0.468911 1.75L6.53109 1.75L3.5 7Z" fill="#666666"/>
                        </svg>
                    </div>
                </div>
                <div className="itemsWrapper customScrollbar">
                    <div className="items">
                        <div className="description">
                            <img src={nft1} className='nftImage'/>
                            <div className="titlesWrapper">
                                <div className="title">
                                    Trx6345jn..d32
                                    <svg width="12" height="13" className='me-4 ms-2' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 0.875V2.125H1.33333V10.875H10.6667V7.75H12V11.5C12 11.6658 11.9298 11.8247 11.8047 11.9419C11.6797 12.0592 11.5101 12.125 11.3333 12.125H0.666667C0.489856 12.125 0.320286 12.0592 0.195262 11.9419C0.0702379 11.8247 0 11.6658 0 11.5V1.5C0 1.33424 0.0702379 1.17527 0.195262 1.05806C0.320286 0.940848 0.489856 0.875 0.666667 0.875H4.66667ZM9.724 2.125H6.66667V0.875H12V5.875H10.6667V3.00875L6 7.38375L5.05733 6.5L9.724 2.125Z" fill="#333333"/>
                                    </svg>
                                    <p className='me-2'>Wallet value:</p>
                                    <svg className='me-2' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                    </svg>
                                    221
                                    <svg className='ms-2' width="11" height="11" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ms-1'>2</p>
                                </div>
                                <div className="subTitle">
                                    5 Mins Ago
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                    <div className="items">
                        <div className="description">
                            <img src={nft1} className='nftImage'/>
                            <div className="titlesWrapper">
                                <div className="title">
                                    Trx6345jn..d32
                                    <svg width="12" height="13" className='me-4 ms-2' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 0.875V2.125H1.33333V10.875H10.6667V7.75H12V11.5C12 11.6658 11.9298 11.8247 11.8047 11.9419C11.6797 12.0592 11.5101 12.125 11.3333 12.125H0.666667C0.489856 12.125 0.320286 12.0592 0.195262 11.9419C0.0702379 11.8247 0 11.6658 0 11.5V1.5C0 1.33424 0.0702379 1.17527 0.195262 1.05806C0.320286 0.940848 0.489856 0.875 0.666667 0.875H4.66667ZM9.724 2.125H6.66667V0.875H12V5.875H10.6667V3.00875L6 7.38375L5.05733 6.5L9.724 2.125Z" fill="#333333"/>
                                    </svg>
                                    <p className='me-2'>Wallet value:</p>
                                    <svg className='me-2' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                    </svg>
                                    221
                                    <svg className='ms-2' width="11" height="11" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ms-1'>2</p>
                                </div>
                                <div className="subTitle">
                                    5 Mins Ago
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                    <div className="items">
                        <div className="description">
                            <img src={nft1} className='nftImage'/>
                            <div className="titlesWrapper">
                                <div className="title">
                                    Trx6345jn..d32
                                    <svg width="12" height="13" className='me-4 ms-2' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 0.875V2.125H1.33333V10.875H10.6667V7.75H12V11.5C12 11.6658 11.9298 11.8247 11.8047 11.9419C11.6797 12.0592 11.5101 12.125 11.3333 12.125H0.666667C0.489856 12.125 0.320286 12.0592 0.195262 11.9419C0.0702379 11.8247 0 11.6658 0 11.5V1.5C0 1.33424 0.0702379 1.17527 0.195262 1.05806C0.320286 0.940848 0.489856 0.875 0.666667 0.875H4.66667ZM9.724 2.125H6.66667V0.875H12V5.875H10.6667V3.00875L6 7.38375L5.05733 6.5L9.724 2.125Z" fill="#333333"/>
                                    </svg>
                                    <p className='me-2'>Wallet value:</p>
                                    <svg className='me-2' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                    </svg>
                                    221
                                    <svg className='ms-2' width="11" height="11" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ms-1'>2</p>
                                </div>
                                <div className="subTitle">
                                    5 Mins Ago
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                    <div className="items">
                        <div className="description">
                            <img src={nft1} className='nftImage'/>
                            <div className="titlesWrapper">
                                <div className="title">
                                    Trx6345jn..d32
                                    <svg width="12" height="13" className='me-4 ms-2' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 0.875V2.125H1.33333V10.875H10.6667V7.75H12V11.5C12 11.6658 11.9298 11.8247 11.8047 11.9419C11.6797 12.0592 11.5101 12.125 11.3333 12.125H0.666667C0.489856 12.125 0.320286 12.0592 0.195262 11.9419C0.0702379 11.8247 0 11.6658 0 11.5V1.5C0 1.33424 0.0702379 1.17527 0.195262 1.05806C0.320286 0.940848 0.489856 0.875 0.666667 0.875H4.66667ZM9.724 2.125H6.66667V0.875H12V5.875H10.6667V3.00875L6 7.38375L5.05733 6.5L9.724 2.125Z" fill="#333333"/>
                                    </svg>
                                    <p className='me-2'>Wallet value:</p>
                                    <svg className='me-2' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                    </svg>
                                    221
                                    <svg className='ms-2' width="11" height="11" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ms-1'>2</p>
                                </div>
                                <div className="subTitle">
                                    5 Mins Ago
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                    <div className="items">
                        <div className="description">
                            <img src={nft1} className='nftImage'/>
                            <div className="titlesWrapper">
                                <div className="title">
                                    Trx6345jn..d32
                                    <svg width="12" height="13" className='me-4 ms-2' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 0.875V2.125H1.33333V10.875H10.6667V7.75H12V11.5C12 11.6658 11.9298 11.8247 11.8047 11.9419C11.6797 12.0592 11.5101 12.125 11.3333 12.125H0.666667C0.489856 12.125 0.320286 12.0592 0.195262 11.9419C0.0702379 11.8247 0 11.6658 0 11.5V1.5C0 1.33424 0.0702379 1.17527 0.195262 1.05806C0.320286 0.940848 0.489856 0.875 0.666667 0.875H4.66667ZM9.724 2.125H6.66667V0.875H12V5.875H10.6667V3.00875L6 7.38375L5.05733 6.5L9.724 2.125Z" fill="#333333"/>
                                    </svg>
                                    <p className='me-2'>Wallet value:</p>
                                    <svg className='me-2' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                    </svg>
                                    221
                                    <svg className='ms-2' width="11" height="11" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ms-1'>2</p>
                                </div>
                                <div className="subTitle">
                                    5 Mins Ago
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                    <div className="items">
                        <div className="description">
                            <img src={nft1} className='nftImage'/>
                            <div className="titlesWrapper">
                                <div className="title">
                                    Trx6345jn..d32
                                    <svg width="12" height="13" className='me-4 ms-2' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 0.875V2.125H1.33333V10.875H10.6667V7.75H12V11.5C12 11.6658 11.9298 11.8247 11.8047 11.9419C11.6797 12.0592 11.5101 12.125 11.3333 12.125H0.666667C0.489856 12.125 0.320286 12.0592 0.195262 11.9419C0.0702379 11.8247 0 11.6658 0 11.5V1.5C0 1.33424 0.0702379 1.17527 0.195262 1.05806C0.320286 0.940848 0.489856 0.875 0.666667 0.875H4.66667ZM9.724 2.125H6.66667V0.875H12V5.875H10.6667V3.00875L6 7.38375L5.05733 6.5L9.724 2.125Z" fill="#333333"/>
                                    </svg>
                                    <p className='me-2'>Wallet value:</p>
                                    <svg className='me-2' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                    </svg>
                                    221
                                    <svg className='ms-2' width="11" height="11" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 1C3.09313 1 1 3.15216 1 5.80685C1 10.6137 6.525 14.9836 9.5 16C12.475 14.9836 18 10.6137 18 5.80685C18 3.15216 15.9069 1 13.325 1C11.744 1 10.3458 1.80712 9.5 3.04248C9.06891 2.41112 8.49622 1.89586 7.8304 1.54033C7.16458 1.1848 6.42525 0.999456 5.675 1Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ms-1'>2</p>
                                </div>
                                <div className="subTitle">
                                    5 Mins Ago
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpcomingPopup;