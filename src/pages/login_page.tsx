import React, { useState } from "react";
import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import MyCard from "../components/my_card";
import { Form } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = async ( ) => {

        const baseUrl = import.meta.env.VITE_BACKEND_URL;
        const data = {
            username: username,
            password: password
        }

        const res = await fetch( baseUrl + '/auth/login'    , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        } )

        if (!res.ok) throw new Error("Login failed");

        const response = await res.json();

        console.log( response );
    }

    return (
        <>
            <PageTitle title="Login" subtitle="Login to your account to access your persionalise plans."/>
            <PageContent>
                <Box component={'div'} className="flex justify-center">
                    <MyCard width="500px">
                        <Form onSubmit={login}>
                            <CardContent>
                                <Typography gutterBottom fontSize={'18px'} 
                                fontWeight={'bold'}>Login</Typography>
                            </CardContent>
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
                                <Button type="submit" variant="contained" fullWidth>Login</Button>
                            </CardContent>
                        </Form>
                    </MyCard>
                </Box>
            </PageContent>
        </>
    )
}

export default LoginPage;