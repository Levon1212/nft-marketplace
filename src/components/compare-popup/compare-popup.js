import React, {useEffect, useState} from 'react';
import nft1 from '../../assets/images/nft/nft1.png';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 33,
    height: 17,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#556EE6' : '#556EE6',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#556EE6',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 14,
        height: 14,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
const ComparePopup = (props) => {
    const [checked, setChecked] = React.useState({
        name: false,
        platform: false,
        status: true,
        pricing: true,
        twitter: true,
        instagram: true,
        telegram: false,
        discord: true,
        collection: true,
        confidence: true,
        influential: true,
    });
    const handleChange = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };
    useEffect(()=>{
        props.setCompareHoldersOpen(checked.name)
    },[checked])
    return (
        <div className='compare-popup'>
            <button className='closeButton' onClick={()=>{props.closeHandle(false)}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9L9 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L15 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="popupWrapper">
                <p className="title">Compare Collections</p>
                <p className="subTitle">Compare Collections</p>
                <input type="text" placeholder='Search'/>
                <p className="smallTitle justify-content-between">
                    <div className='w-50'>Add Collection</div>
                    <div className='d-flex w-50 align-items-center position-relative justify-content-end switchIconWrapper'>
                        <p className='me-5 switchTitle'>Compare Graph</p>
                         <FormControlLabel
                             control={<IOSSwitch checked={checked.name} onChange={handleChange} name="name" sx={{ m: 1 }}  />}
                         />
                    </div>
                </p>
                <div className="itemsWrapper customScrollbar">
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.125 1.25C1.79348 1.25 1.47554 1.3817 1.24112 1.61612C1.0067 1.85054 0.875 2.16848 0.875 2.5V3.75C0.875 4.08152 1.0067 4.39946 1.24112 4.63388C1.47554 4.8683 1.79348 5 2.125 5H2.75V16.25C2.75 16.913 3.01339 17.5489 3.48223 18.0178C3.95107 18.4866 4.58696 18.75 5.25 18.75H12.75C13.413 18.75 14.0489 18.4866 14.5178 18.0178C14.9866 17.5489 15.25 16.913 15.25 16.25V5H15.875C16.2065 5 16.5245 4.8683 16.7589 4.63388C16.9933 4.39946 17.125 4.08152 17.125 3.75V2.5C17.125 2.16848 16.9933 1.85054 16.7589 1.61612C16.5245 1.3817 16.2065 1.25 15.875 1.25H11.5C11.5 0.918479 11.3683 0.600537 11.1339 0.366117C10.8995 0.131696 10.5815 0 10.25 0L7.75 0C7.41848 0 7.10054 0.131696 6.86612 0.366117C6.6317 0.600537 6.5 0.918479 6.5 1.25H2.125ZM5.875 6.25C6.04076 6.25 6.19973 6.31585 6.31694 6.43306C6.43415 6.55027 6.5 6.70924 6.5 6.875V15.625C6.5 15.7908 6.43415 15.9497 6.31694 16.0669C6.19973 16.1842 6.04076 16.25 5.875 16.25C5.70924 16.25 5.55027 16.1842 5.43306 16.0669C5.31585 15.9497 5.25 15.7908 5.25 15.625V6.875C5.25 6.70924 5.31585 6.55027 5.43306 6.43306C5.55027 6.31585 5.70924 6.25 5.875 6.25V6.25ZM9 6.25C9.16576 6.25 9.32473 6.31585 9.44194 6.43306C9.55915 6.55027 9.625 6.70924 9.625 6.875V15.625C9.625 15.7908 9.55915 15.9497 9.44194 16.0669C9.32473 16.1842 9.16576 16.25 9 16.25C8.83424 16.25 8.67527 16.1842 8.55806 16.0669C8.44085 15.9497 8.375 15.7908 8.375 15.625V6.875C8.375 6.70924 8.44085 6.55027 8.55806 6.43306C8.67527 6.31585 8.83424 6.25 9 6.25V6.25ZM12.75 6.875V15.625C12.75 15.7908 12.6842 15.9497 12.5669 16.0669C12.4497 16.1842 12.2908 16.25 12.125 16.25C11.9592 16.25 11.8003 16.1842 11.6831 16.0669C11.5658 15.9497 11.5 15.7908 11.5 15.625V6.875C11.5 6.70924 11.5658 6.55027 11.6831 6.43306C11.8003 6.31585 11.9592 6.25 12.125 6.25C12.2908 6.25 12.4497 6.31585 12.5669 6.43306C12.6842 6.55027 12.75 6.70924 12.75 6.875V6.875Z" fill="#EB5757"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nft1} alt="nft" className="icon"/>
                        <div className="ms-2 d-flex flex-column">
                            <p className="title mb-0">
                                CryptoPunks
                                <svg width="16" className='ms-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3_5)">
                                        <path d="M15.3333 8L13.7067 6.14L13.9333 3.68L11.5267 3.13333L10.2667 1L8 1.97333L5.73333 1L4.47333 3.12667L2.06667 3.66667L2.29333 6.13333L0.666667 8L2.29333 9.86L2.06667 12.3267L4.47333 12.8733L5.73333 15L8 14.02L10.2667 14.9933L11.5267 12.8667L13.9333 12.32L13.7067 9.86L15.3333 8ZM6.25333 10.6733L4.66667 9.07333C4.60486 9.01166 4.55583 8.9384 4.52238 8.85775C4.48892 8.7771 4.4717 8.69065 4.4717 8.60333C4.4717 8.51602 4.48892 8.42957 4.52238 8.34892C4.55583 8.26827 4.60486 8.19501 4.66667 8.13333L4.71333 8.08667C4.97333 7.82667 5.4 7.82667 5.66 8.08667L6.73333 9.16667L10.1667 5.72667C10.4267 5.46667 10.8533 5.46667 11.1133 5.72667L11.16 5.77333C11.42 6.03333 11.42 6.45333 11.16 6.71333L7.21333 10.6733C6.94 10.9333 6.52 10.9333 6.25333 10.6733V10.6733Z" fill="#2081E2"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_5">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <div className="subTitle mb-0">
                                <span>Vol:</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                844.614,52
                                <span className='ms-2'>Floor</span>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.97263 8.98462L0.289001 6.81075L3.97038 12.0004L7.65588 6.81075L3.97038 8.98462H3.97263ZM4.02738 0L0.345252 6.11138L4.02738 8.289L7.711 6.11362L4.02738 0Z" fill="#333333"/>
                                </svg>
                                ---
                            </div>
                        </div>
                        <div className="ind">
                            <span>#2</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1.16669V12.8334" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 7H12.8332" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparePopup;