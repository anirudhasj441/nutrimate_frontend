import User from "../core/User";
import userContext from "../core/User/user_provider";

import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";
import MyCard from "../components/my_card";

import React, { useContext, useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Typography, CardContent, TextField, Box, Button, InputAdornment, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import dayjs from "dayjs";
import { Form } from "react-router-dom";
import type { IUserData } from "../core/User/types";

const UserRegistrationPage: React.FC = () => {

    // const checkStrength = () => {
    //     console.log("Checking strength... (add logic)");
    // };

    const user = useContext<User>( userContext );

    const registerUser = async () => {
        const data: IUserData = {
            username: username,
            first_name: firstName,
            last_name: lsatName,
            password: password,
            email: email,
            birth_date: birthDate?.format('YYYY-MM-DD') ?? '',
            height: height,
            weight: weight,
            goal: goal,
        }
        console.log("Register user... (add logic)", data);

        const res = await user.signup( data );

        console.log( res ? "signup successfull": "signup failed");
        
    };

    // // const clearUser = () => {
    // //     console.log("Clear user... (add logic)");
    // // };

    const [firstName, setFirstName ] = useState<string>('');
    const [lsatName, setLastName ] = useState<string>('');
    const [username, setUsername ] = useState<string>('');
    const [email, setEmail ] = useState<string>('');
    const [password, setPassword ] = useState<string>('');
    const [birthDate, setBirthDate ] = useState<Dayjs | null >(dayjs());
    const [height, setHeight ] = useState<number>(50);
    const [weight, setWeight ] = useState<number>(20);
    const [goal, setGoal ] = useState<string>("GM");

    return (
        <>
        <PageTitle title="Create Your Account" subtitle="Enter your details to generate a personalized fitness and diet plan." />

        <PageContent>
            <Box component={'div'} className="flex justify-center">
                <MyCard width="500px">
                    <Form onSubmit={registerUser}>

                    <CardContent>
                        <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Registration Form</Typography>
                    </CardContent>
                    <CardContent className="flex flex-col gap-5">
                        <Box component={'div'} className="flex gap-5 flex-col md:flex-row">
                            <TextField required id="first-name" variant="outlined" size="small" label="First Name" value={firstName} onChange={evt => setFirstName(evt.target.value)} fullWidth />
                            <TextField required id="last-name" variant="outlined" size="small" label="Last Name" value={lsatName} onChange={evt => setLastName(evt.target.value)} fullWidth />
                        </Box>
                        <TextField required id="username" variant="outlined" size="small" label="Username" fullWidth value={username} onChange={evt => setUsername(evt.target.value)} />
                        <TextField required id="email" type="email" variant="outlined" size="small" label="Email" fullWidth value={email} onChange={evt => setEmail(evt.target.value)} />
                        <TextField required id="password" variant="outlined" size="small" label="Password" fullWidth value={password} onChange={evt => setPassword(evt.target.value)} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Birth Date" value={birthDate} 
                            format="DD/MM/YYYY" 
                            onChange={
                                (value) => setBirthDate(value)
                            } 
                            slotProps={{
                                textField: {size: "small"}
                            }} />
                        </LocalizationProvider>
                        <TextField required variant="outlined" type="number" size="small" value={height}
                        onChange={(value)=> setHeight( Number(value.target.value) )} label="Height" fullWidth slotProps={{
                            input: {endAdornment: <InputAdornment position="end">cm</InputAdornment>},
                            htmlInput: {
                                step: 'any',
                                min: 50
                            }
                        }} />
                        <TextField required variant="outlined" type="number" size="small" value={weight} onChange={value => setWeight(Number(value.target.value))} label="Weight" fullWidth slotProps={{
                            input: {endAdornment: <InputAdornment position="end">kg</InputAdornment>},
                            htmlInput: {
                                step: 'any',
                                min: 20
                            }
                        }} />
                        <FormControl required fullWidth size="small">
                            <InputLabel>Goal</InputLabel>
                            <Select fullWidth size="small" className="text-left" value={goal} onChange={(value) => setGoal(value.target.value)} label="Goal">
                                <MenuItem value="LW">Lose Weight</MenuItem>
                                <MenuItem value="GM">Gain Muscle</MenuItem>
                                <MenuItem value="MW">Maintain Weight</MenuItem>
                                <MenuItem value="IE">Improve Indurance</MenuItem>
                                <MenuItem value="IF">Increase Flexibility</MenuItem>
                                <MenuItem value="FL">Fat Loss</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <TextField variant="outlined" size="small" label="Goal" fullWidth /> */}
                    </CardContent>
                    <CardContent>
                        <Button type="submit" variant="contained" fullWidth>Register</Button>
                    </CardContent>
                    </Form>
                </MyCard>
            </Box>
        </PageContent>
        </>
    );
};

export default UserRegistrationPage;
