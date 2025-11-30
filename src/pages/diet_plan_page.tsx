import PageTitle from "../components/page_title";

import React from "react";
import { Box, Button, CardContent, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import PageContent from "../components/page_content";
import MyCard from "../components/my_card";

const DietPlanPage: React.FC = () => {
    return (
        <>
            <PageTitle
                title="Your Personalized Diet Plan"
                subtitle="Calculate your BMI & daily calories to get an ideal diet recommendation."
            />

            <PageContent>
                <Box component={'div'} className="flex justify-center flex-wrap gap-10" >
                    {/* <h2>Your Personalized Diet Plan</h2>
                    <p>Calculate your BMI & daily calories to get an ideal diet recommendation.</p> */}
                    <MyCard title="BMI Calculator">
                        <CardContent className="gap-4 flex flex-col">
                            <TextField size="small" variant="outlined" 
                            label="Height" fullWidth
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">cm</InputAdornment>
                                }
                            }}
                            />
                            <TextField size="small" variant="outlined" 
                            label="Weight" fullWidth
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                                }
                            }}
                            />
                        </CardContent>
                        <Box className="flex-grow"></Box>
                        <CardContent>
                            <Button variant="contained" fullWidth>Calculate</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard title="Daily Calories Need">
                        <CardContent className="gap-4 flex flex-col">
                            <TextField size="small" variant="outlined" 
                            label="Age" fullWidth
                            />
                            <FormControl fullWidth>
                                <FormLabel sx={{textAlign: 'left'}}>Gender</FormLabel>
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
                    </MyCard>

                    <MyCard title="Recommended Diet Plan">
                        <CardContent>
                            <Typography>Fill details to generate plan...</Typography>
                        </CardContent>
                    </MyCard>
                </Box>
            </PageContent>

        </>
    );
};

export default DietPlanPage;
