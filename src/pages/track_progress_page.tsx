import PageTitle from "../components/page_title";

import React from "react";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import PageContent from "../components/page_content";
import MyCard from "../components/my_card";

const TrackProgressPage: React.FC = () => {

    const clearProgress = () => {
        console.log("Clear progress clicked");
        // Add your logic later
    };

    return (
        <>
            {/* <div className="hero">
                <h2>Track Your Daily Fitness Progress</h2>
                <p>Monitor calories, steps, and water intake. Your health journey starts here!</p>
            </div> */}

            <PageTitle
                title="Track Your Daily Fitness Progress"
                subtitle="Monitor calories, steps, and water intake. Your health journey starts here!"
            />

            <PageContent>
                <Box component={'div'}>
                    <Typography variant="h5" textAlign={'center'}
                        fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>
                        Daily Input 📅
                    </Typography >

                    <Box component={'div'} className="flex flex-wrap justify-center gap-10">
                        <MyCard width="300px">
                            <CardContent>
                                <Typography fontSize={'18px'} fontWeight={'bold'}>Calories Consumed 🔥</Typography>
                            </CardContent>
                            <CardContent>
                                <TextField variant="outlined" size="small" fullWidth label="Enter Calories"></TextField>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" fullWidth>Save</Button>
                            </CardContent>
                        </MyCard>

                        <MyCard width="300px">
                            <CardContent>
                                <Typography fontSize={'18px'} fontWeight={'bold'}>Steps Walked 👣</Typography>
                            </CardContent>
                            <CardContent>
                                <TextField variant="outlined" size="small" fullWidth label="Enter Steps"></TextField>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" fullWidth>Save</Button>
                            </CardContent>
                        </MyCard>

                        <MyCard width="300px">
                            <CardContent>
                                <Typography fontSize={'18px'} fontWeight={'bold'}>Water Intake 💧</Typography>
                            </CardContent>
                            <CardContent>
                                <TextField variant="outlined" size="small" fullWidth label="Glasses of water"></TextField>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" fullWidth>Save</Button>
                            </CardContent>
                        </MyCard>
                    </Box>
                </Box>

                <Box component={'div'} className="mt-10">
                    <Typography variant="h5" textAlign={'center'}
                        fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>
                        Your fullWidth Saved Progress 📊
                    </Typography >

                    <Box component={'div'} className="flex justify-center">
                        <MyCard width="300px">
                            <CardContent>
                                <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Today's Summary</Typography>
                            </CardContent>
                            <CardContent>
                                <Box component={'div'} className="flex gap-2">
                                    <Typography fontWeight={'bold'}>Calories: </Typography>
                                    <Typography>0</Typography>
                                </Box>
                                <Box component={'div'} className="flex gap-2">
                                    <Typography fontWeight={'bold'}>Steps: </Typography>
                                    <Typography>0</Typography>
                                </Box>
                                <Box component={'div'} className="flex gap-2">
                                    <Typography fontWeight={'bold'}>Water: </Typography>
                                    <Typography>{0} glasses</Typography>
                                </Box>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" color="error" onClick={clearProgress} fullWidth>Clear Progress</Button>
                            </CardContent>
                        </MyCard>
                    </Box>
                </Box>

            </PageContent>

        </>
    );
};

export default TrackProgressPage;
