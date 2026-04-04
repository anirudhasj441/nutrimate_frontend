import PageTitle from "../components/page_title";

import React, { useEffect, useState } from "react";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import PageContent from "../components/page_content";
import MyCard from "../components/my_card";

interface IProgressData {
    calories_consumed: number;
    steps: number;
    water_intake: number; // in glasses
}

const TrackProgressPage: React.FC = () => {

    const [calories, setCalories] = useState<number>(0);
    const [steps, setSteps] = useState<number>(0);
    const [waterIntake, setWaterIntake] = useState<number>(0);  
    const [progress, setProgress] = useState<null | IProgressData>(null);

    const clearProgress = async () => {
        console.log("Clear progress clicked");
        
        let url = import.meta.env.VITE_BACKEND_URL + "/auth/fitness_tracker";

        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })

        if (!res.ok) {
            throw new Error("Failed to clear progress data");
        }
        
        // const response = await res.json();
        // console.log("Cleared progress data:", response);
        setProgress({
            calories_consumed: 0,
            steps: 0,
            water_intake: 0
        });
    };

    const getProgressData = async () => {
        // Placeholder for fetching progress data logic
        let url = import.meta.env.VITE_BACKEND_URL + "/auth/fitness_tracker";

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })

        if (!res.ok) {
            throw new Error("Failed to fetch progress data");
        }
        
        const response = await res.json();
        console.log("Fetched progress data:", response);
        // Process and set the fetched data to state here

        return response.payload;
    };

    const saveProgressData = async (data: IProgressData) => {
        // Placeholder for saving progress data logic

        let progress = await getProgressData();

        let method = 'POST';

        let progressData = data;

        if (progress.length > 0) {
            // Existing progress data found, update the entry
            console.log("Existing progress data found, updating entry");
            method = 'PATCH';

            progressData = {
                calories_consumed: progress[0].calories_consumed + data.calories_consumed,
                steps: progress[0].steps + data.steps,
                water_intake: progress[0].water_intake + data.water_intake
            }

        } 

        let url = import.meta.env.VITE_BACKEND_URL + "/auth/fitness_tracker";

        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            },
            body: JSON.stringify(progressData)
        })

        if (!res.ok) {
            throw new Error("Failed to save progress data");
        }
        
        const response = await res.json();
        console.log("Saved progress data:", response);
        // Handle the response after saving data here

        let updatedProgress: IProgressData = {
            calories_consumed: response.payload.calories_consumed,
            steps: response.payload.steps,
            water_intake: response.payload.water_intake
        }

        setCalories(0);
        setSteps(0);
        setWaterIntake(0);

        setProgress(updatedProgress);

        return response;
    };


    useEffect(() => {
        getProgressData().then((response) => {
            // Handle the response data and set it to state
            if (response) {
                console.log("Progress data fetched successfully:", response);

                if ( response.length === 0) {
                    setProgress({
                        calories_consumed: 0,
                        steps: 0,
                        water_intake: 0
                    });
                    return;
                }
                
                let progressResponse: IProgressData = response[0];

                let progress: IProgressData = {
                    calories_consumed: progressResponse.calories_consumed || 0,
                    steps: progressResponse.steps || 0,
                    water_intake: progressResponse.water_intake || 0
                }

                setProgress(progress);

                // Set the fetched data to state here
            } else {
                console.log("No progress data found");
            }

        }).catch((error) => {
            console.error("Error fetching progress data:", error);
        });
    }, []);

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
                        <MyCard title="Calories Consumed 🔥">
                            <CardContent>
                                <TextField value={calories} onChange={(e) => setCalories(Number(e.target.value))} variant="outlined" size="small" fullWidth label="Enter Calories"></TextField>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" fullWidth onClick={() => saveProgressData({
                                    calories_consumed: calories,
                                    steps: 0,
                                    water_intake: 0
                                })}>Save</Button>
                            </CardContent>
                        </MyCard>

                        <MyCard title="Steps Walked 👣">
                            <CardContent>
                                <TextField value={steps} onChange={(e) => setSteps(Number(e.target.value))} variant="outlined" size="small" fullWidth label="Enter Steps"></TextField>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" fullWidth onClick={() => saveProgressData({
                                    calories_consumed: 0,
                                    steps: steps,
                                    water_intake: 0
                                })}>Save</Button>
                            </CardContent>
                        </MyCard>

                        <MyCard title="Water Intake 💧">
                            <CardContent>
                                <TextField value={waterIntake} onChange={(e) => setWaterIntake(Number(e.target.value))} variant="outlined" size="small" fullWidth label="Glasses of water"></TextField>
                            </CardContent>
                            <CardContent className="flex justify-center">
                                <Button variant="contained" fullWidth onClick={() => saveProgressData({
                                    calories_consumed: 0,
                                    steps: 0,
                                    water_intake: waterIntake
                                })}>Save</Button>
                            </CardContent>
                        </MyCard>
                    </Box>
                </Box>

                <Box component={'div'} className="mt-10">
                    <Typography variant="h5" textAlign={'center'}
                        fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>
                        Your Saved Progress 📊
                    </Typography >

                    <Box component={'div'} className="flex justify-center">
                        <MyCard title="Today's Summary">
                            <CardContent>
                                <Box component={'div'} className="flex gap-2">
                                    <Typography fontWeight={'bold'}>Calories: </Typography>
                                    <Typography>{progress?.calories_consumed}</Typography>
                                </Box>
                                <Box component={'div'} className="flex gap-2">
                                    <Typography fontWeight={'bold'}>Steps: </Typography>
                                    <Typography>{progress?.steps}</Typography>
                                </Box>
                                <Box component={'div'} className="flex gap-2">
                                    <Typography fontWeight={'bold'}>Water: </Typography>
                                    <Typography>{progress?.water_intake} glasses</Typography>
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
