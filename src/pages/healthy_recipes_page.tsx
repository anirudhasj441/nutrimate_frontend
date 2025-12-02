import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";

import React, { useEffect } from "react";
import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import MyCard from "../components/my_card";
import { useNavigate } from "react-router-dom";

const HealthyRecipesPage: React.FC = () => {
    const navigate = useNavigate();

    const [ recipes, setRecipes ] = React.useState<any[]>([]);

    
    const fetcthRecipes = async (): Promise<any> => {
        const baseUrl = import.meta.env.VITE_BACKEND_URL;

        console.log( "Backend URL:", baseUrl );

        const res = await fetch( baseUrl + '/recipes/', {
            method: 'GET',
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })

        if( !res.ok ) {
            throw new Error("Failed to fetch recipes");
        }

        const response = await res.json();

        return response;
    }

    useEffect(() => {
        console.log( "Fetching recipes..." );

        fetcthRecipes().then((response) => {
            if(response === null ){ return }

            setRecipes( response.recipes );

        })

    }, []);

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
                    {
                        recipes.map((recipe) => (
                            <MyCard title={recipe.title} key={recipe.id}>
                                <CardContent>
                                    <Typography>{recipe.description}</Typography>
                                </CardContent>
                                <Box component={'div'} className="flex-grow" />
                                <CardContent className="flex justify-center">
                                    <Button variant="contained" fullWidth onClick={() => navigate(`/recipe/${recipe.id}`)}>View More</Button>
                                </CardContent>
                            </MyCard>
                        ))
                        
                    }
                </Box>
            </PageContent>
        </>
    );
};

export default HealthyRecipesPage;
