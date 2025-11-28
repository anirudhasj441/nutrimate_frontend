import {userContext} from "../core/User/user_provider";

import PageContent from "../components/page_content";
import PageTitle from "../components/page_title";
import MyCard from "../components/my_card";

import React, { useContext, useState } from "react";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import type { IUser } from "../core/User/types";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const user = useContext<IUser>( userContext );

    const login = async ( ) => {
        const res = await user.login( username, password );
        console.log( res ? "LOgin successfull": "login failed");
        console.log( user.userData )
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