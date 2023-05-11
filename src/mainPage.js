import React, { useState } from "react";

import { Typography, Button, AppBar, Drawer, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import MainHeading from "./UI/mainHeading";
import Carousel from "./components/GraphCarousel";


function MainPage() {
    const mainTheme = createTheme({
        components: {
        },
        palette: {
            mode: 'dark',
            primary: {
                main: '#a06bd4',
            },
            secondary: {
                main: '#221dc5',
            },
            text: {
                primary: '#dddac2',
            },
            typography: {
                fontFamily: 'Raleway',
            },
        },

    });

    
    return (
        <ThemeProvider theme={mainTheme}>
            <AppBar position="static">
                <MainHeading buttonColor='textPrimary' />
            </AppBar>

        </ThemeProvider>
    )
}

export default MainPage;