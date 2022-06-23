import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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

const FilterNav = (props) => {
    const [checked, setChecked] = React.useState({
        name: true,
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
    const [active,setActive] = useState('name');
    const handleChange = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };
    useEffect(()=>{
        props.setPage(active)
    },[active])
    return (
        <div className='filterNav'>
            <div onClick={()=>setActive('name')} className={`nav-item ${active === 'name' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.name} onChange={handleChange} name="name" sx={{ m: 1 }}  />}
                    />
                    <p>Name</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('platform')} className={`nav-item ${active === 'platform' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.platform} onChange={handleChange} name="platform" sx={{ m: 1 }}  />}
                    />
                    <p>Platform</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('status')} className={`nav-item ${active === 'status' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.status} onChange={handleChange} name="status" sx={{ m: 1 }}  />}
                    />
                    <p>Status</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('pricing')} className={`nav-item ${active === 'pricing' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.pricing} onChange={handleChange} name="pricing" sx={{ m: 1 }}  />}
                    />
                    <p>Pricing</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('twitter')} className={`nav-item ${active === 'twitter' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.twitter} onChange={handleChange} name="twitter" sx={{ m: 1 }}  />}
                    />
                    <p>Twitter</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('instagram')} className={`nav-item ${active === 'instagram' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.instagram} onChange={handleChange} name="instagram" sx={{ m: 1 }}  />}
                    />
                    <p>Instagram</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('telegram')} className={`nav-item ${active === 'telegram' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.telegram} onChange={handleChange} name="telegram" sx={{ m: 1 }}  />}
                    />
                    <p>Telegram</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('discord')} className={`nav-item ${active === 'discord' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.discord} onChange={handleChange} name="discord" sx={{ m: 1 }}  />}
                    />
                    <p>Discord</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('collection')} className={`nav-item ${active === 'collection' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.collection} onChange={handleChange} name="collection" sx={{ m: 1 }}  />}
                    />
                    <p>Collection Status</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('confidence')} className={`nav-item ${active === 'confidence' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.confidence} onChange={handleChange} name="confidence" sx={{ m: 1 }}  />}
                    />
                    <p>Confidence</p>
                </div>
                <p className="count">1/1</p>
            </div>
            <div onClick={()=>setActive('influential')} className={`nav-item ${active === 'influential' ? 'active' : ''}`}>
                <div className="title">
                    <FormControlLabel
                        control={<IOSSwitch checked={checked.influential} onChange={handleChange} name="influential" sx={{ m: 1 }}  />}
                    />
                    <p>Influential</p>
                </div>
                <p className="count">1/1</p>
            </div>
        </div>
    );
};

export default FilterNav;