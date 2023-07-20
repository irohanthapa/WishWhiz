import React from 'react'
import { Box, Typography, useTheme, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { themeSettings } from '../theme';

const Navbar = () => {
    const theme = useTheme();
    const myTheme = themeSettings();
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem('authToken'));
    //handle logout
    const handleLogoout = async () => {
        try {
            await axios.post('/api/v1/auth/logout')
            localStorage.removeItem('authToken')
            localStorage.removeItem('username')
            toast.success('Logged Out Successfully!')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box width={'100%'} backgroundColor={myTheme.palette.neutral.medium} p='1rem 6%' sx={{ boxShadow: 3, mb: 2 }}>
            <Typography variant='h1' color='primary' fontWeight='bold' textAlign={'center'}>Wish Whiz</Typography>
            {
                loggedIn ? (
                    <>
                        <Box textAlign={'center'}>
                            <Link to='/' p={1} ><Button sx={{ "&:hover": { border: 0.5, boxShadow: 5, borderColor: "primary.dark", cursor: "pointer" } }}>Home</Button></Link>
                            <Link to='/login' p={1} onClick={handleLogoout}><Button sx={{ "&:hover": { border: 0.5, boxShadow: 5, borderColor: "primary.dark", cursor: "pointer" } }}>Logout</Button></Link>
                            <Typography variant='h6' color='primary' fontWeight='bold' textAlign={'end'} sx={{ mt: 0, mb: 0 }}>Welcome, {localStorage.getItem('username')}</Typography>
                        </Box>
                    </>
                ) : (
                    <><Box textAlign={'center'}>
                        <Link to='/' p={1}><Button sx={{ "&:hover": { border: 0.5, boxShadow: 5, borderColor: "primary.dark", cursor: "pointer" } }}>Home</Button></Link>
                    </Box>
                    </>
                )
            }
        </Box>
    );
};

export default Navbar