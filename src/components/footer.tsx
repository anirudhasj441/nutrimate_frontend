import React from "react";
import { Box } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box component={'footer'} className="text-white py-3 px-5" bgcolor="primary.main">
            &copy; 2025 NutriMate | Stay Fit. Stay Healthy. 🌿
        </Box>
    );

};

export default Footer;