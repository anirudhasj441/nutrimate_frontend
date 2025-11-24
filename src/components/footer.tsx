import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <AppBar position="sticky" component={'footer'} className="text-white">
            <Toolbar>
            &copy; 2025 NutriMate | Stay Fit. Stay Healthy. 🌿
            </Toolbar>
        </AppBar>
    );

};

export default Footer;