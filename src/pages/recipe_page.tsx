import { Typography, Box, Table, TableContainer, TableRow, TableCell, TableBody, Divider, Card, CardContent } from '@mui/material';
import PageContent from '../components/page_content';
import PageTitle from '../components/page_title';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const RecipePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [recipe, setRecipe] = useState<any>({});

    const [ nutritions, setNutritions ] = useState<{key: string, value: string}[]>([]);
    const [ ingredients, setIngredients ] = useState<{name: string, quantity: number, unit: string}[]>([]);


    const fetchRecipe = async () : Promise<any> => {
        const baseUrl = import.meta.env.VITE_BACKEND_URL;

        const res = await fetch( baseUrl + `/recipes/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })

        if( !res.ok ) {
            throw new Error("Failed to fetch recipe");
        }

        const response = await res.json();
        return response;

    }

    useEffect(() => {
        fetchRecipe().then((response) => {
            if(response === null ){ return }
            setRecipe( response.recipe );

            // Prepare nutrition rows
            const nutritionRows = [
                { key: 'Calories', value: response.recipe.calories.toString() },
                { key: 'Protein', value: response.recipe.protein.toString() },
                { key: 'Carbohydrates', value: response.recipe.carbohydrates.toString() },
                { key: 'Fat', value: response.recipe.fat.toString() },
            ];

            setNutritions( nutritionRows );

            // Prepare ingredients
            const ingredientList = response.recipe.recipe_ingredients.map( (ing: any) => ({
                name: ing.ingredient.name,
                quantity: ing.quantity,
                unit: ing.unit
            }) );

            setIngredients( ingredientList );
        })     
    }, []);

    return (
        <>
        <PageTitle title='Recipe Page' subtitle='This is sampple Recipe' />
        <PageContent >
            <Typography variant='h5' fontWeight={'bold'} color='secondary' gutterBottom>
                {recipe.title}
            </Typography>
            <Divider sx={{
                // marginBottom: '2rem'
            }} />
            <Box component='div' className='flex md:flex-row flex-col gap-5 py-10' >
                <Box component='div' className='flex-grow'>
                    <Typography>
                        {recipe.instructions}
                    </Typography>
                </Box>
                <Box component={'div'} className='flex flex-col gap-5' sx={{
                    minWidth: '300px'
                }}>
                    <Card elevation={12}>
                        <TableContainer component={CardContent}>
                            {/* <Typography variant='h6' gutterBottom color='' fontWeight={'bold'} >
                                Ingredients
                            </Typography> */}
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component={'th'}>
                                        <Typography fontWeight={'bold'}>
                                            Preparation Time
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {recipe.prep_time} minutes
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component={'th'}>
                                        <Typography fontWeight={'bold'}>
                                            Cooking Time
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {recipe.cook_time} minutes
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Card>

                    <Card elevation={12}>
                        <TableContainer component={CardContent}>
                            <Typography variant='h6' gutterBottom color='' fontWeight={'bold'} >
                                Ingredients
                            </Typography>
                        <Table>
                            <TableBody>
                            {ingredients.map((row) =>(
                                <TableRow key={row.name}>
                                    <TableCell component={'th'}>
                                        <Typography fontWeight={'bold'}>
                                            {row.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {row.quantity}
                                        </Typography>
                                    </TableCell>
                                    <TableCell width={'max-content'}>
                                        <Typography>
                                            {row.unit}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Card>



                    <Card elevation={12}>
                        <TableContainer component={CardContent}>
                            <Typography variant='h6' gutterBottom color='' fontWeight={'bold'} >
                                Nutritions
                            </Typography>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography fontWeight={'bold'}>
                                            Serving Size
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {recipe.servings}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            {nutritions.map((row) =>(
                                <TableRow key={row.key}>
                                    <TableCell component={'th'}>
                                        <Typography fontWeight={'bold'}>
                                            {row.key}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {row.value}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Card>

                    
                </Box>
            </Box>
        </PageContent>
        </>
    )
}

export default RecipePage;