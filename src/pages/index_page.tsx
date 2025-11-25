import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";
import MyCard from "../components/my_card";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CardContent, Typography } from "@mui/material";

const IndexPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* <div className="hero">
                <h2>Welcome to NutriMate!</h2>
                <p>Your one-stop platform for personalized fitness, nutrition, and healthy living.</p>
            </div> */}

            <PageTitle
                title="Welcom to Nutrimate"
                subtitle="Your one-stop platform for personalized fitness, 
                    nutrition, and healthy living."
            />

            <PageContent>
                <Box component={'section'} className="flex
                    justify-center gap-10 flex-wrap"
                >
                    <MyCard width="250px" sx={{
                        width: {xs: '100%', md: '250px'}
                    }}>
                        <CardContent>
                            <Typography gutterBottom fontWeight={'bold'}
                                align="center" fontSize={18}>Meal Plan 🍽️</Typography>
                            <Typography>
                                Get a customized weekly meal plan designed
                                by nutrition experts.
                            </Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth
                                onClick={() => navigate('/meal-plan')}>
                                View Plans
                            </Button>
                        </CardContent>
                    </MyCard>

                    <MyCard width="250px" sx={{
                        width: {xs: '100%', md: '250px'}
                    }}>
                        <CardContent>
                            <Typography gutterBottom fontWeight={'bold'}
                                align="center" fontSize={18}>
                                Healthy Recipes 🥗
                            </Typography>
                            <Typography>
                                Discover simple, tasty, and healthy recipes that
                                support your goals.
                            </Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth
                                onClick={() => navigate('/healthy-recipes')}>
                                Explore Recipes
                            </Button>
                        </CardContent>
                    </MyCard>

                    <MyCard width="250px" sx={{
                        width: {xs: '100%', md: '250px'}
                    }}>
                        <CardContent>
                            <Typography gutterBottom fontWeight={'bold'} align="center" fontSize={18}>Track Progress 📊</Typography>
                            <Typography>Monitor your daily calories, steps, and fitness milestones.</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth onClick={() => navigate('/track-progress')}>Start Tracking</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard width="250px" sx={{
                        width: {xs: '100%', md: '250px'}
                    }}>
                        <CardContent>
                            <Typography gutterBottom fontWeight={'bold'} align="center" fontSize={18}>Diet Plan 🥤</Typography>
                            <Typography>Choose a diet that suits your lifestyle — keto, vegan, or balanced.</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth onClick={() => navigate('/diet-plan')}>View Diets</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard width="250px" sx={{
                        width: {xs: '100%', md: '250px'}
                    }}>
                        <CardContent>
                            <Typography gutterBottom fontWeight={'bold'} align="center" fontSize={18}>User Registration 👤</Typography>
                            <Typography>Fill in your personal info — age, height, weight & goals — to get a personalized plan.</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth onClick={() => navigate('/user-registration')}>Register Now</Button>
                        </CardContent>
                    </MyCard>
                </Box>
            </PageContent>

        </>
    );
};

export default IndexPage;