import { Typography, Box, Table, TableContainer, TableRow, TableCell, TableBody, Divider, Card, CardContent } from '@mui/material';
import PageContent from '../components/page_content';
import PageTitle from '../components/page_title';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const RecipePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [recipe, setRecipe] = useState<any>({});

    const [ nutritions, setNutritions ] = useState<{key: string, value: string}[]>([]);

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
        console.log( "Fetching recipe..." );

        fetchRecipe().then((response) => {
            if(response === null ){ return }
            setRecipe( response.recipe );

            // Prepare nutrition rows
            console.log( response.recipe );
            const rows = [];
            rows.push( { key: 'Calories', value: response.recipe.calories.toString() } );
            rows.push( { key: 'Protein', value: response.recipe.protein.toString() } );
            rows.push( { key: 'Carbohydrates', value: response.recipe.carbohydrates.toString() } );
            rows.push( { key: 'Fat', value: response.recipe.fat.toString() } );

            setNutritions( rows );
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
                        {recipe.description}
                    </Typography>
                </Box>
                <Box component={'div'} className='' sx={{
                    minWidth: '300px'
                }}>
                    {/* <Typography variant='h5' color='secondary' fontWeight={'bold'} gutterBottom>
                        Nutritions
                    </Typography>
                    <Divider sx={{
                        marginBottom: '2rem'
                    }} /> */}
                    <Card elevation={12}>
                        {/* <CardContent>
                        </CardContent> */}
                        <TableContainer component={CardContent}>
                            <Typography variant='h6' gutterBottom color='' fontWeight={'bold'} >
                                Nutritions
                            </Typography>
                        <Table>
                            <TableBody>
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