import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <AppBar position="sticky" component={'footer'}>
            <Toolbar>
            &copy; 2025 NutriMate | Stay Fit. Stay Healthy. 🌿
            </Toolbar>
        </AppBar>
    );

};

export default Footer;