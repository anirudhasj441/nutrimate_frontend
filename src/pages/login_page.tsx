import {userContext} from "../core/User/user_provider";
import PageContent from "../components/page_content";
import PageTitle from "../components/page_title";
import MyCard from "../components/my_card";

import React, { useContext, useEffect, useState } from "react";
import { Box, Button, CardContent, TextField } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import type { IUser } from "../core/User/types";
import { useAlert } from "../components/my_alert/alert_provider";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const user = useContext<IUser>( userContext );
    const alert = useAlert();

    const navigate = useNavigate();

    const login = async ( ) => {
        setLoading( true );
        const res = await user.login( username, password );
        console.log( res ? "LOgin successfull": "login failed");
        console.log( user.userData )
        if( res ){
            alert.showAlert(  `Welcome back, ${res.first_name}!` );
        } else {
            alert.showAlert("Login failed. Please check your credentials.", "error" )
        }
        setLoading(false);
    }

    useEffect( () => {
        if( user.isAuthenticated ) {
            navigate('/');
        }
    }, [user.isAuthenticated])

    return (
        <>
            <PageTitle title="Login" subtitle="Login to your account to access your persionalise plans."/>
            <PageContent>
                <Box component={'div'} className="flex justify-center">
                    <MyCard title="Login" width="500px">
                        <Form onSubmit={login}>
                            <CardContent className="flex flex-col gap-5">
                                    <TextField variant="outlined" size="small"
                                    label="username" fullWidth value={username} 
                                    onChange={ 
                                        evt => setUsername(evt.target.value)
                                    } 
                                    />
                                    <TextField variant="outlined" size="small" 
                                    label="password" fullWidth value={password} 
                                    onChange={
                                        evt => setPassword(evt.target.value)
                                    } />
                            </CardContent>
                            <Box component={'div'} className="flex-grow"></Box>
                            <CardContent>
                                <Button loading={loading} type="submit" variant="contained" fullWidth>Login</Button>
                            </CardContent>
                        </Form>
                    </MyCard>
                </Box>
            </PageContent>
        </>
    )
}

export default LoginPage;