import React from "react";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <>
            <Box component={'header'}>
                <Box component="div" className="header flex items-center gap-5 px-5 py-2">
                    <img src="/logo.png" alt="" width={70}/>
                    <Typography variant="h4" sx={(theme) => ({
                        color: theme.palette.secondary.main,
                        fontWeight: 'bold'
                    })}>NutriMate - Your Smart Diet Planner</Typography>
                </Box>
                <Box component="nav" className="flex flex-wrap" sx={(theme) => ({
                        bgcolor: 'primary.main', color: 'white', '& a': {
                            padding: '14px 25px',
                            '&:hover': {
                                bgcolor: theme.custom.hoverColor
                            },
                            '&.active': {
                                bgcolor: theme.palette.secondary.main,
                                fontWeight: 'bold'
                            }
                        }

                    })}>

                    <Typography component={NavLink} to="/" end >Home</Typography>
                    <Typography component={NavLink} to="/meal-plan" end  >Meal Plan</Typography>
                    <Typography component={NavLink} to="/healthy-recipes" end >Healthy Recipes</Typography>
                    <Typography component={NavLink} to="/track-progress" end >Track Progress</Typography>
                    <Typography component={NavLink} to="/diet-plan" end >Diet Plan</Typography>
                    <div className="flex-1"></div>
                    <Typography component={NavLink} to="/login" end >Log in</Typography>
                    <Typography component={NavLink} to="/user-registration" end >Sign Up</Typography>
                </Box>
            </Box>
        </>
    );
};

export default Navbar;