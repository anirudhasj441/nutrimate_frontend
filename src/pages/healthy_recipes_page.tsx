import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";

import React from "react";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import MyCard from "../components/my_card";
import { useNavigate } from "react-router-dom";

const HealthyRecipesPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* <div className="hero">
                <h2>Explore Healthy & Delicious Recipes</h2>
                <p>Search or filter recipes based on your mood, cravings, or fitness goals.</p>
            </div> */}

            <PageTitle 
                title="Explore Healthy & Delicious Recipes"
                subtitle="Search or filter recipes based on your mood, 
                cravings, or fitness goals."
            />

            <PageContent>
                <Typography variant="h5" textAlign={'center'} 
                fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>
                    Search Recipes 🔍
                </Typography >
                <Box component={'div'} className="w-full md:w-1/2 mx-auto">
                    <TextField variant="outlined" label="Search for recipes" size="small" fullWidth />
                </Box>
                
                <Box component={'div'}  className="my-10">
                    <Typography variant="h5" textAlign={'center'} 
                        fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>Filter by Category 🍽️</Typography>
                    <Box component={'div'} className="flex flex-wrap gap-5 justify-center">
                        <Button variant="contained">Breakfast</Button>
                        <Button variant="contained">Lunch</Button>
                        <Button variant="contained">Dinner</Button>
                        <Button variant="contained">High Protein</Button>
                        <Button variant="contained">Low Carbs</Button>
                        <Button variant="contained">All</Button>
                    </Box>
                </Box>

                <Box component={'div'} className="flex flex-wrap justify-center gap-10">
                    <MyCard title="Protein Oats">
                        <CardContent>
                            <Typography>Oats + banana + whey + nuts</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent className="flex justify-center">
                            <Button variant="contained" fullWidth onClick={() => navigate('/recipe/1')}>View More</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard title="Grilled Chicken Salad">
                        <CardContent>
                            <Typography>Lean protein with fresh greens</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent className="flex justify-center">
                            <Button variant="contained" fullWidth>View More</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard title="Veggie Stir Fry">
                        <CardContent>
                            <Typography>Colorful vegetables sautéed lightly</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent className="flex justify-center">
                            <Button variant="contained" fullWidth>View More</Button>
                        </CardContent>
                    </MyCard>

                    <MyCard title="Fruit Smoothie Bowl">
                        <CardContent>
                            <Typography>Blended fruits with toppings</Typography>
                        </CardContent>
                        <Box component={'div'} className="flex-grow" />
                        <CardContent className="flex justify-center">
                            <Button variant="contained" fullWidth>View More</Button>
                        </CardContent>
                    </MyCard>
                </Box>
            </PageContent>
        </>
    );
};

export default HealthyRecipesPage;
