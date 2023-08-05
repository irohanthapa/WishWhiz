import React from 'react'
import { Box, Typography, Card, Stack, Button } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import DescriptionRounded from '@mui/icons-material/DescriptionRounded'
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined'
import Image from '@mui/icons-material/Image'
import Chat from '@mui/icons-material/Chat'


const Homepage = () => {
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem('authToken'));
    return (
        loggedIn ? (
            <Box display={'flex'} flexDirection={'row'} sx={{ justifyContent: 'center' }}>
                <Box p={2} textAlign={'center'}>
                    <Typography variant='h5' mb={2} fontWeight={'bold'}>Summarise Text</Typography>
                    <Card onClick={() => navigate("/summary")} sx={{ boxShadow: 3, borderRadius: 5, height: 225, width: 225, "&:hover": { border: 2, boxShadow: 0, borderColor: "primary.dark", cursor: "pointer" } }}>
                        <DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2 }} />
                        <Stack p={3} pt={0} >
                            <Typography fontWeight="bold" variant="h6">Summary</Typography>
                            <Typography variant="p">Summarize long text into short one</Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2} textAlign={'center'}>
                    <Typography variant='h5' mb={2} fontWeight={'bold'}>Paragraphs Generator</Typography>
                    <Card onClick={() => navigate("/paragraph")} sx={{ boxShadow: 3, borderRadius: 5, height: 225, width: 225, "&:hover": { border: 2, boxShadow: 0, borderColor: "primary.dark", cursor: "pointer" } }}>
                        <FormatAlignLeftOutlined sx={{ fontSize: 80, color: "primary.main", mt: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h6">Paragraph</Typography>
                            <Typography variant="p">Generate paragraphs with words</Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2} textAlign={'center'}>
                    <Typography variant='h5' mb={2} fontWeight={'bold'}>AI Chatbot</Typography>
                    <Card onClick={() => navigate("/chatbot")} sx={{ boxShadow: 3, borderRadius: 5, height: 225, width: 225, "&:hover": { border: 2, boxShadow: 0, borderColor: "primary.dark", cursor: "pointer" } }}>
                        <Chat sx={{ fontSize: 80, color: "primary.main", mt: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h6">Genie</Typography>
                            <Typography variant="p">Generate paragraphs with words</Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2} textAlign={'center'}>
                    <Typography variant='h5' mb={2} fontWeight={'bold'}>Sci-Fi Image Generator</Typography>
                    <Card onClick={() => navigate("/sci-image")} sx={{ boxShadow: 3, borderRadius: 5, height: 225, width: 225, "&:hover": { border: 2, boxShadow: 0, borderColor: "primary.dark", cursor: "pointer" } }}>
                        <Image sx={{ fontSize: 80, color: "primary.main", mt: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h6">Imagator</Typography>
                            <Typography variant="p">Generate Sci-Fi images from here</Typography>
                        </Stack>
                    </Card>
                </Box>
            </Box>)
            : (
                <>

                    <Box textAlign="center" padding={15}>
                        <Typography variant="h4" fontWeight="bold">
                            Welcome to Wish-Whiz:
                        </Typography>
                        <Typography variant="h4" fontWeight="bold">
                            Where Wishes Meet Wizardry
                        </Typography>
                        <Typography variant="h5">
                            Unleash AI Magic for Effortless Summaries,
                        </Typography>
                        <Typography variant="h5">
                            Inspiring Content, and Chat with Genie!
                        </Typography>
                    
                        <Box display={'flex'} flexDirection={'row'} sx={{ justifyContent: 'center' }}>
                            <Link to='/login'>
                                <Button type="submit" variant="contained" size="large" sx={{ color: "white", mt: -2 }}>login</Button>
                            </Link>
                            <Link to='/register'>
                                <Button type="submit" variant="contained" size="large" sx={{ color: "white", mt: -2 }}>register</Button>
                            </Link>
                        </Box>
                    </Box>
                </>
            )
    );
};

export default Homepage