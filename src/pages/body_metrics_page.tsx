import PageTitle from "../components/page_title";

import React from "react";
import { useState } from "react";
import { Box, Button, CardContent, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import PageContent from "../components/page_content";
import PlaceIcon from "@mui/icons-material/Place";
import MyCard from "../components/my_card";
import { Form } from "react-router-dom";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BalanceIcon from '@mui/icons-material/Balance';

const BodyMetricsPage: React.FC = () => {
    const [bmi, setBmi] = React.useState<number | null>(null);
    const [maintenanceKcal, setMaintenanceKcal] = React.useState<number>(0);
    const [height, setHeight] = React.useState<number>(150);
    const [weight, setWeight] = React.useState<number>(50);
    const [age, setAge] = useState<number>(20);
    const [gender, setGender ] = useState<string>('male')
    const [activity, setActivity ] = useState<string>('sedentary')

    const minBmi: number = 10;
    const maxBmi: number = 40;

    const calculateBmi = (heightCm: number, weightKg: number) => {
        const heightM = heightCm / 100;
        const bmiValue = weightKg / (heightM * heightM);
        return bmiValue;
    }

    const calculateBmr = ( height: number, weight: number, age: number, 
            gender: string ) => 
    {
        // calculating bmr

        if( "male" == gender ){
            return (10 * weight) + ( 6.25 * height ) - ( 5 * age ) + 5;
        }

        return (10 * weight) + ( 6.25 * height ) - ( 5 * age ) - 161;

    }

    const bmiToPercentage =  ( bmi: number ) => {
        return ((bmi - minBmi) / ( maxBmi - minBmi )) * 100;
    }

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        const activityMultipliers = {
            'sedentary': 1.2,
            'light_exercise': 1.375,
            'moderate_exercise': 1.55,
            'heavy_exercise': 1.725,
            'athlete': 1.9
        }


        const bmi = calculateBmi( height, weight );
        const bmr = calculateBmr( height, weight, age, gender );

        const maintenanceKcal = bmr * activityMultipliers[activity as keyof typeof activityMultipliers]

        setBmi( bmi );
        setMaintenanceKcal( Math.round(maintenanceKcal) );
    }
    
    return (
        <>
            <PageTitle
                title="Body Metrics"
                subtitle="Analyze your BMI, daily calorie needs, and key health
                    indicators."
            />

            <PageContent>
                <Box component={'div'} className="flex justify-center flex-wrap 
                gap-10" >
                    {/* <h2>Your Personalized Diet Plan</h2>
                    <p>Calculate your BMI & daily calories to get an ideal diet recommendation.</p> */}
                    <MyCard title="Personal Information">
                        <Form onSubmit={handleSubmit}>
                            <CardContent className="gap-4 flex flex-col">
                                <TextField 
                                    size="small" 
                                    variant="outlined" 
                                    value={height}
                                    type="number" 
                                    onChange={(e) => setHeight(Number(e.target.value))}
                                    label="Height" fullWidth
                                    slotProps={{
                                        input: {
                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>
                                        },
                                        htmlInput: {
                                            step: "any",
                                            min: 20,
                                            max: 1000
                                        }
                                    }}
                                />
                                <TextField size="small" variant="outlined"
                                    label="Weight" fullWidth
                                    type="number"
                                    
                                    value={weight} 
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                    slotProps={{
                                        input: {
                                            endAdornment: <InputAdornment position="end">kg</InputAdornment>
                                        },
                                        htmlInput: {
                                            step: "any",
                                            min: 20,
                                            max: 200
                                        }
                                    }}
                                    
                                />
                                <TextField type="number" size="small" variant="outlined"
                                    label="Age" fullWidth 
                                    value={age}
                                    onChange={(e) => setAge( Number(e.target.value) )}
                                    slotProps={{
                                        input: {
                                            endAdornment: <InputAdornment position="end">Years</InputAdornment>
                                        },
                                        htmlInput: {
                                            min: 2,
                                            max: 200
                                        }
                                    }}
                                />
                                <FormControl fullWidth>
                                    <FormLabel sx={{ textAlign: 'left' }}>Gender</FormLabel>
                                    <RadioGroup row value={gender} name="gender" onChange={(e) => setGender( e.target.value )} >
                                        <FormControlLabel value={"male"} control={<Radio />} label="Male" />
                                        <FormControlLabel value={"female"} control={<Radio />} label="Female" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="activity-level-label">Activity Level</InputLabel>
                                    <Select label="Activity Level" id="activity-level" labelId="activity-level-label" value={activity} onChange={(e) => setActivity(e.target.value)}>
                                        <MenuItem value="sedentary">Sedentary</MenuItem>
                                        <MenuItem value="light_exercise">Light Exercise</MenuItem>
                                        <MenuItem value="moderate_exercise">Moderate Exercise</MenuItem>
                                        <MenuItem value="heavy_exercise">Heavy Exercise</MenuItem>
                                        <MenuItem value="athlete">Athlete</MenuItem>
                                    </Select>
                                </FormControl>
                            </CardContent>
                            <Box className="flex-grow"></Box>
                            <CardContent>
                                <Button variant="contained" type="submit" fullWidth>Calculate</Button>
                            </CardContent>
                        </Form>
                    </MyCard>

                    {/* <MyCard title="Daily Calories Need">
                        <CardContent className="gap-4 flex flex-col">
                            <TextField size="small" variant="outlined"
                                label="Age" fullWidth
                            />
                            <FormControl fullWidth>
                                <FormLabel sx={{ textAlign: 'left' }}>Gender</FormLabel>
                                <RadioGroup row>
                                    <FormControlLabel value={"male"} control={<Radio />} label="Male" />
                                    <FormControlLabel value={"female"} control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl fullWidth size="small">
                                <InputLabel id="activity-level-label">Activity Level</InputLabel>
                                <Select label="Activity Level" id="activity-level" labelId="activity-level-label" value={"sedentary"}>
                                    <MenuItem value="sedentary">Sedentary</MenuItem>
                                    <MenuItem value="light_active">Light Active</MenuItem>
                                    <MenuItem value="light_active">Light Active</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                        <Box className="flex-grow"></Box>
                        <CardContent >
                            <Button variant="contained" fullWidth>Calculate</Button>
                        </CardContent>
                    </MyCard> */}

                    {/* <MyCard title="Recommended Diet Plan">
                        <CardContent>
                            <Typography>Fill details to generate plan...</Typography>
                        </CardContent>
                    </MyCard> */}

                    <MyCard title="Result" sx={{position: 'relative'}}>
                        { bmi == null ?
                        <Box component={'div'} className="absolute w-full z-60"
                            sx={{
                                height: '90%',
                                bottom: 0,
                                backdropFilter: "blur(5px)",
                                backgroundColor: "rgba(255,255,255,0.2)"

                            }}
                        >
                        <Box component={'div'} className="absolute w-full h-full flex justify-center items-center p-5" sx={{
                        }} >
                            <Typography variant="h6" color="secondary">🔍 Enter your details and click Calculate to see result</Typography>
                        </Box>
                        </Box> :
                        <></>
                         }
                        <CardContent>
                            <Typography variant={"h6"} color="secondary" fontWeight={'bold'}>Body Mass Index</Typography>
                            <Box component={'div'} className="py-8">
                                <Box
                                    className="rounded-full bg-red-200"
                                    sx={{
                                        position: 'relative',
                                        height: '10px',
                                        width: '100%'
                                    }}
                                >
                                    <Box component={'div'} className="flex h-full bg-red-600 rounded-full overflow-hidden"
                                    sx={{
                                        position: 'relative',
                                        '& div': {
                                            position: 'absolute'
                                        }
                                    }}
                                    >
                                        <Box component={'div'} className="h-full" sx={{
                                            width: `${bmiToPercentage( 18.5 )}%`,
                                            backgroundColor: 'skyblue',
                                            top: 0,
                                            left: 0,
                                            zIndex: 50
                                        }}>
                                        </Box>
                                        <Box component={'div'} className="h-full" sx={{
                                            width: `${bmiToPercentage( 24.9 )}%`,
                                            backgroundColor: 'green',
                                            top: 0,
                                            left: 0,
                                            zIndex: 40
                                        }}></Box>
                                        <Box component={'div'} className="h-full" sx={{
                                            width: `${bmiToPercentage( 29.9 )}%`,
                                            backgroundColor: 'yellow',
                                            top: 0,
                                            left: 0,
                                            zIndex: 30
                                        }}></Box>
                                    </Box>
                                    <PlaceIcon color="secondary" sx={{
                                        position: 'absolute',
                                        left: bmi !== null ? `${bmiToPercentage(bmi)}%` : '0%' ,
                                    
                                        // width: '10px',
                                        // aspectRatio: '1',
                                        // backgroundColor: 'gray',
                                        top: '0',
                                        transform: 'translate(-50%, -100%)'

                                    }}></PlaceIcon>
                                    <Typography sx={{
                                        position: 'absolute',
                                        left: bmi !== null ? `${bmiToPercentage( bmi )}%` : '0%' ,
                                        transform: 'translateX(-50%)'
                                    }}>
                                        {bmi?.toFixed( 2 )}
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{paddingY: '2px'}} />
                            
                            <Typography variant="h6" color="secondary" fontWeight={'bold'}>Daily calories requiement</Typography>
                            <Grid container spacing={2} sx={{py:2}}>
                            <Grid size={4}>
                                <Paper sx={{ p:1, textAlign:'center', bgcolor:"#ffebee" }}>
                                    <TrendingDownIcon color="error" />
                                <Typography variant="subtitle2">Lose Weight</Typography>
                                <Typography variant="h6">{maintenanceKcal - 300} kcal</Typography>
                                </Paper>
                            </Grid>

                            <Grid size={4}>
                                <Paper sx={{ p:1, textAlign:'center', bgcolor:"#e8f5e9" }}>
                                <BalanceIcon color="warning"/>
                                <Typography variant="subtitle2">Maintain Weight</Typography>
                                <Typography variant="h6">{maintenanceKcal} kcal</Typography>
                                </Paper>
                            </Grid>

                            <Grid size={4}>
                                <Paper sx={{ p:1, textAlign:'center', bgcolor:"#e3f2fd" }}>
                                <TrendingUpIcon color="success" />
                                <Typography variant="subtitle2">Gain Muscle</Typography>
                                <Typography variant="h6">{maintenanceKcal + 300} kcal</Typography>
                                </Paper>
                            </Grid>
                            </Grid>
                        </CardContent>
                        
                    </MyCard>
                </Box>
            </PageContent>

        </>
    );
};

export default BodyMetricsPage;
