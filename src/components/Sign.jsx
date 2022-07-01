import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { signInWithGoogle } from "../config/fireBaseInit";

function Sign() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Button variant='contained' sx={{color: 'white', backgroundColor:'green'}} onClick={signInWithGoogle}>
                <GoogleIcon sx={{mr:2}}/>Sign In
            </Button>
        </Box>

    )
}

export default Sign