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
                title="Welcome to Nutrimate!"
                subtitle="Your one-stop platform for personalized fitness, 
                    nutrition, and healthy living."
            />

            <PageContent>
                <Box component={'section'} className="flex
                    justify-center gap-10 flex-wrap"
                >
                    <MyCard title="Meal Plan 🍽️" >
                        <CardContent>
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

                    <MyCard title="Healthy Recipes 🥗" >
                        <CardContent>
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

                    <MyCard title="Track Progress 📊" >
                        <CardContent>
                            <Typography>Monitor your daily calories, steps, and fitness milestones.</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth onClick={() => navigate('/track-progress')}>Start Tracking</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard title="Diet Plan 🥤" >
                        <CardContent>
                            <Typography>Choose a diet that suits your lifestyle — keto, vegan, or balanced.</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent>
                            <Button variant="contained" fullWidth onClick={() => navigate('/diet-plan')}>View Diets</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard title="User Registration 👤" >
                        <CardContent>
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