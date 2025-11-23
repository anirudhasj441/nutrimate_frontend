import React from "react";
import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import MyCard from "../components/my_card";

const LoginPage: React.FC = () => {
    return (
        <>
            <PageTitle title="Login" subtitle="Login to your account to access your persionalise plans."/>
            <PageContent>
                <Box component={'div'} className="flex justify-center">
                    <MyCard width="500px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Login</Typography>
                        </CardContent>
                        <CardContent className="flex flex-col gap-5">
                            <TextField variant="outlined" size="small" label="username" fullWidth />
                            <TextField variant="outlined" size="small" label="password" fullWidth />
                        </CardContent>
                        <Box component={'div'} className="flex-grow"></Box>
                        <CardContent>
                            <Button variant="contained" fullWidth>Login</Button>
                        </CardContent>
                    </MyCard>
                </Box>
            </PageContent>
        </>
    )
}

export default LoginPage;