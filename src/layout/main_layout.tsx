import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import userContext from "../core/User/context";


const MainLayout: React.FC = () => {

    // const location = useLocation();
    // const navigate = useNavigate();

    const user = useContext( userContext );

    const mounted = useRef(false);

    useEffect(() => {
        if( mounted.current ) return;
        user.checkUserAuthenticated().then( result => {
            console.log( "isAuthenticated: ", result );

            console.log( user.userData );
        })

        console.log( "isAuthenticated: ", user.checkUserAuthenticated() );

        return () => {
            mounted.current = true;
        }
    }, [])

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
                <Footer />
            </Box>
        </div>
        </>
    );

};

export default MainLayout;