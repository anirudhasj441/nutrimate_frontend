import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";

import React, { useEffect, useState } from "react";
import { Box, Button, CardContent, Typography } from "@mui/material";
import MyCard from "../components/my_card";
import { useNavigate } from "react-router-dom";

const HealthyRecipesPage: React.FC = () => {
    const navigate = useNavigate();

    const [ recipes, setRecipes ] = React.useState<any[]>([]);

    const [selectedFilter, setSelectedFilter ] = useState<string>( 'ALL' );

    const fetcthRecipes = async (): Promise<any> => {
        const baseUrl = import.meta.env.VITE_BACKEND_URL;

        const res = await fetch( baseUrl + '/recipes/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })

        if( !res.ok ) {
            throw new Error("Failed to fetch recipes");
        }

        const response = await res.json();

        return response;
    }

    const filterRecipes = async ( filter: string ) => {
        const baseUrl = import.meta.env.VITE_BACKEND_URL;
        
        const url = new URL(baseUrl + "/recipes/");

        if (filter !== "ALL") {
            url.searchParams.set("category", filter);
        }

        const res = await fetch( url.toString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })

        if( !res.ok ) {
            throw new Error("Failed to fetch recipes");
        }

        const response = await res.json();

        setRecipes( response.recipes )

        setSelectedFilter( filter );

        return response;
    }

    useEffect(() => {

        fetcthRecipes().then((response) => {
            if(response === null ){ return }

            setRecipes( response.recipes );

        })

    }, []);

    return (
        <>
            <PageTitle 
                title="Explore Healthy & Delicious Recipes"
                subtitle="Search or filter recipes based on your mood, 
                cravings, or fitness goals."
            />

            <PageContent>
                <Box component={'div'}  className="my-10">
                    <Typography variant="h5" textAlign={'center'} 
                        fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>Filter by Category 🍽️</Typography>
                    <Box component={'div'} className="flex flex-wrap gap-5 justify-center">
                        <Button variant="contained" onClick={() => filterRecipes("ALL")} color={selectedFilter == "ALL" ? 'secondary' : 'primary'}>All</Button>
                        <Button variant="contained" onClick={() => filterRecipes("BF")} color={selectedFilter == "BF" ? 'secondary' : 'primary'}>Breakfast</Button>
                        <Button variant="contained" onClick={() => filterRecipes("LU")} color={selectedFilter == "LU" ? 'secondary' : 'primary'}>Lunch</Button>
                        <Button variant="contained" onClick={() => filterRecipes("DI")} color={selectedFilter == "DI" ? 'secondary' : 'primary'}>Dinner</Button>
                        <Button variant="contained" onClick={() => filterRecipes("SN")} color={selectedFilter == "SN" ? 'secondary' : 'primary'}>Snacks</Button>
                        <Button variant="contained" onClick={() => filterRecipes("DE")} color={selectedFilter == "DE" ? 'secondary' : 'primary'}>Dessert</Button>
                        <Button variant="contained" onClick={() => filterRecipes("BE")} color={selectedFilter == "BE" ? 'secondary' : 'primary'}>Beverage</Button>
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
