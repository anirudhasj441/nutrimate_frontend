import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from "react";
import { Outlet } from "react-router-dom";


const MainLayout: React.FC = () => {

    // const location = useLocation();
    // const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );

};

export default MainLayout;