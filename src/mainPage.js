import React, { useState } from "react";
import { Typography, Button, AppBar, Drawer, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import MainHeading from "./UI/mainHeading";
import GraphCarousel2 from "./components/GraphCarousel2";
import TopNews from "./util/TopNews";

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
        <div className="background">
            <div className="grid"></div>
            <div className="circles"></div>
            <div className="lines"></div>
            <ThemeProvider theme={mainTheme}>
                <AppBar position="static">
                    <MainHeading buttonColor='textPrimary' />
                </AppBar>
                <GraphCarousel2/>
                <TopNews/>
            </ThemeProvider>
        </div>
    )
}

export default MainPage;