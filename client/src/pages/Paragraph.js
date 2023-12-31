import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse, Card, } from "@mui/material";

const Paragraph = () => {
    const theme = useTheme();
    //media
    const isNotMobile = useMediaQuery("(min-width: 1000px)");
    // states
    const [text, setText] = useState("");
    const [paragraph, setPararaph] = useState("");
    const [error, setError] = useState("");

    //register ctrl
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://server-3fxh.onrender.com/api/v1/openai/paragraph", { text });
            setPararaph(data);
        } catch (err) {
            console.log(error);
            if (err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    const loggedIn = JSON.parse(localStorage.getItem('authToken'));
    return (
        loggedIn ? (
            <Box width={isNotMobile ? "40%" : "80%"} p={"2rem"} m={"2rem auto"} borderRadius={5} sx={{ boxShadow: 5 }} backgroundColor={theme.palette.background.alt}>
                <Collapse in={error}>
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                </Collapse>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h3">Generate Paragraph</Typography>
                    <TextField placeholder="add your text" multiline={true} type="text" required margin="normal" fullWidth value={text} onChange={(e) => { setText(e.target.value); }} />
                    <Button type="submit" fullWidth variant="contained" size="large" sx={{ color: "white", mt: 2 }}>Generate</Button>
                    <Typography mt={2}>Not this Tool? <Link to="/">Go Back</Link></Typography>
                </form>
                {
                    paragraph ? (
                        <Card sx={{ mt: 4, border: 1, boxShadow: 0, height: '500px', borderRadius: 5, borderColor: 'natural.medium', bgcolor: 'background.deault' }}>
                            <Typography p={2}>{paragraph}</Typography>
                        </Card>
                    ) : (
                        <Card sx={{ mt: 4, border: 1, boxShadow: 0, height: '500px', borderRadius: 5, borderColor: 'natural.medium', bgcolor: 'background.deault' }}>
                            <Typography variant="h5" color='natural.main' sx={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '450px' }}>Your paragraph will appear here...</Typography>
                        </Card>
                    )
                }
            </Box>)
            : (
                <Box textAlign={'center'} p={20}>
                    <Typography variant='h3' fontWeight={'bold'}>Please Login to use the services</Typography>
                    <Box display={'flex'} flexDirection={'row'} sx={{ justifyContent: 'center' }}>
                        <Link to='/login'>
                            <Button type="submit" variant="contained" size="large" sx={{ color: "white", mt: 2 }}>login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button type="submit" variant="contained" size="large" sx={{ color: "white", mt: 2 }}>register</Button>
                        </Link>
                    </Box>
                </Box>
            )
    );
};

export default Paragraph;