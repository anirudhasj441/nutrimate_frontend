import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";

import React from "react";
import { Typography, CardContent, TextField, Box, Button } from "@mui/material";
import MyCard from "../components/my_card";

const UserRegistrationPage: React.FC = () => {

    // const checkStrength = () => {
    //     console.log("Checking strength... (add logic)");
    // };

    // const registerUser = () => {
    //     console.log("Register user... (add logic)");
    // };

    // // const clearUser = () => {
    // //     console.log("Clear user... (add logic)");
    // // };

    return (
        <>
        <PageTitle title="Create Your Account" subtitle="Enter your details to generate a personalized fitness and diet plan." />

        <PageContent>
            <Box component={'div'} className="flex justify-center">
                <MyCard width="500px">
                    <CardContent>
                        <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Registration Form</Typography>
                    </CardContent>
                    <CardContent className="flex flex-col gap-5">
                        <TextField variant="outlined" size="small" label="Name" fullWidth />
                        <TextField variant="outlined" size="small" label="Email" fullWidth />
                        <TextField variant="outlined" size="small" label="Password" fullWidth />
                        <TextField variant="outlined" size="small" label="Age" fullWidth />
                        <TextField variant="outlined" size="small" label="Height" fullWidth />
                        <TextField variant="outlined" size="small" label="Goal" fullWidth />
                    </CardContent>
                    <CardContent>
                        <Button variant="contained" fullWidth>Register</Button>
                    </CardContent>
                </MyCard>
            </Box>
        </PageContent>
        </>
    );
};

export default UserRegistrationPage;
