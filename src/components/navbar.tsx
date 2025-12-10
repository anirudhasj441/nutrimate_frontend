// import type User from "../core/User";

import {userContext} from "../core/User/user_provider";

import React, { useCallback, useContext, useState} from "react";
import Typography from '@mui/material/Typography'
import { 
    AppBar, Box, Button, Drawer, IconButton, List, ListItem, 
    ListItemButton, ListItemIcon, ListItemText, Menu, 
    MenuItem, Toolbar 
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import type { IUser } from "../core/User/types";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar: React.FC = () => {
    const [ open, setOpen ] = useState<boolean>( false )
    const user = useContext<IUser>( userContext );

    const navigate = useNavigate();

    const [userMenuAnchor, setUserMenuAnchor ] = 
            useState<HTMLElement | null>(null);

    const logout = useCallback( () => {
        user.logout();
        setUserMenuAnchor(null);
    }, [user]);

    return (
        <>
            <Box component={'header'}>
                <Box component="div" 
                className="header flex items-center gap-5 px-5 py-2">
                    <img src="/logo.png" alt="" width={70}/>
                    <Box component={'div'} className="flex gap-2">
                    <Typography variant="h4" sx={(theme) => ({
                        color: theme.palette.secondary.main,
                        fontWeight: 'bold'
                    })}>NutriMate</Typography>
                    <Typography variant="h4" sx={(theme) => ({
                        display: {xs: 'none', md:'block'},
                        color: theme.palette.secondary.main,
                        fontWeight: 'bold'
                    })}>
                        - Your Smart Diet Planner
                    </Typography>
                    </Box>
                    <Box component={'div'} className="flex-grow"></Box>
                    <IconButton onClick={()=>setOpen(true)} sx={{
                        display: {xs: 'block', md: 'none'}
                    }}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                </Box>
                <AppBar position="relative" sx={{
                    display: {xs: 'none', md: 'block'}
                }}>
                    <Toolbar component={'nav'} className="items-center" 
                    sx={( theme )=> ({
                        height: { xs: '48px', md: '64px'},
                        padding: '0 !important',
                        '& a': {
                            paddingX: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            '&:hover': {
                                bgcolor: theme.custom.hoverColor
                            },
                            '&.active': {
                                bgcolor: theme.palette.secondary.main,
                                fontWeight: 'bold'
                            }
                        }
                    })}>
                        <Typography component={NavLink} to="/" end >
                            Home
                        </Typography>
                        <Typography component={NavLink} to="/meal-plan" end  >
                            Meal Plan
                        </Typography>
                        <Typography component={NavLink} to="/healthy-recipes" end >
                            Healthy Recipes
                        </Typography>
                        <Typography component={NavLink} to="/track-progress" end >
                            Track Progress
                        </Typography>
                        <Typography component={NavLink} to="/diet-plan" end >
                            Diet Plan
                        </Typography>
                        <div className="flex-1"></div>
                        { user.isAuthenticated ?
                            <>
                                <Button variant="text" 
                                color="inherit" 
                                endIcon={
                                    <ArrowDropDownIcon/>
                                }
                                onClick={ 
                                    evt => setUserMenuAnchor(evt.currentTarget) 
                                }>
                                    {user.userData?.first_name}
                                </Button>
                            </>
                             :
                            <>
                                <Typography component={NavLink} to="/login" end >Log in</Typography>
                                <Typography component={NavLink} to="/user-registration" end >Sign Up</Typography>
                            </>
                        }
                    </Toolbar>
                </AppBar>

                <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
                    <Box component={'div'} role="presentation" 
                    className="w-60 h-full"
                    onClick={() => setOpen(false)} 
                    sx={(theme) => ({
                        bgcolor: theme.palette.primary.main,
                        color: "white"
                    })}  >
                        <List sx={(theme) => ({
                            '& a': {
                                '&.active': {
                                    bgcolor: theme.palette.secondary.main + ' !important'
                                }
                            }
                        })}>
                            <ListItem disablePadding>
                                <ListItemButton component={NavLink} to="/" end selected={true}>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                                {/* <Typography component={NavLink} to={'/'} end>Home</Typography> */}
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={NavLink} to="/meal-plan" end >
                                    <ListItemText primary="Meal Plan" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={NavLink} to="/healthy-recipes" end >
                                    <ListItemText primary="Healthy Recipes" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={NavLink} to="/track-progress" end >
                                    <ListItemText primary="Track Progress" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={NavLink} to="/diet-plan" end >
                                    <ListItemText primary="Diet Plan" />
                                </ListItemButton>
                            </ListItem>
                            {
                                user.isAuthenticated ? 
                                <ListItem disablePadding>
                                    <ListItemButton color="inherit" onClick={evt => { evt.stopPropagation(); setUserMenuAnchor(evt.currentTarget)}}>
                                        <ListItemText>{user.userData?.first_name}</ListItemText>
                                        <ListItemIcon color="white"><ArrowDropDownIcon sx={{color: "white"}} color="inherit"/></ListItemIcon>
                                    </ListItemButton>
                                </ListItem> :
                                <>
                                    <ListItem disablePadding>
                                        <ListItemButton component={NavLink} to="/login" end >
                                            <ListItemText primary="Log in" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component={NavLink} to="/user-registration" end >
                                            <ListItemText primary="Sign Up" />
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            }
                        </List>
                    </Box>
                </Drawer>
            </Box>
            
            {/* User Menu */}
            <Menu anchorEl={userMenuAnchor} onClick={() => setUserMenuAnchor(null)} anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }} open={Boolean(userMenuAnchor)} onClose={() => setUserMenuAnchor(null)}>
                <MenuItem onClick={() => {navigate("/feedback")} }>
                    <ListItemIcon>
                        <FeedbackOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Feedback</ListItemText>
                </MenuItem>
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};

export default Navbar;