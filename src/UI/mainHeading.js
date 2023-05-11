import React, { useState } from "react";
import { Box, IconButton, Drawer, Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Sidebar from "./sidebar";
import { Menu } from "@mui/icons-material";


function MainHeading({buttonColor}) {
    const [open, setOpen] = useState(false);

    const toggleSlider = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ display: 'flex' }}>

            <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

                <Drawer open={open} anchor="right" onClose={toggleSlider}>
                    <Sidebar />
                </Drawer>
                <Toolbar>
                    <IconButton size="large" onClick={toggleSlider}>
                        <Menu color={buttonColor}/>
                    </IconButton>
                    <IconButton disabled/>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        align="left"
                        sx={{ flexGrow: 1 }}>
                        Rohirrim Trading
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MainHeading;