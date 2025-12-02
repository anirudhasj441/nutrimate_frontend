import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../core/User/user_provider";
import { Outlet, useNavigate } from "react-router-dom";
import { useAlert } from "../components/my_alert/alert_provider";

const ProtectedRoute: React.FC = () => {
    const user = useContext( userContext );
    const navigate = useNavigate();
    const alert = useAlert();
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        if ( !user.checked ) return;

        if ( !user.isAuthenticated ){
            navigate('/login');
            alert.showAlert( "Oops! Please log in to access this content.", "warning");
        } else {
            setChecked( true );
        }
    }, [ user.isAuthenticated, user.checked ]);


    return(
        <>
            { checked ? 
                <Outlet/> :
                null
            }
        </>
    );
}

export default ProtectedRoute;