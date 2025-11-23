import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";


const MainLayout: React.FC = () => {

    // const location = useLocation();
    // const navigate = useNavigate();

    return (
        <>
        <div className="flex flex-col h-svh">
            <Navbar />
            <Box component="main" sx={{
                backgroundImage: 'url(/bg.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                overflowY: 'auto'
            }} className="flex-1">
                <Outlet />
            </Box>
            <Footer />
        </div>
        </>
    );

};

export default MainLayout;