import { Typography, Box, Table, TableContainer, TableRow, TableCell, TableBody, Paper, Divider, Card, CardContent } from '@mui/material';
import PageContent from '../components/page_content';
import PageTitle from '../components/page_title';
import React from 'react';
// import { useParams } from 'react-router-dom';


const RecipePage: React.FC = () => {
    const rows = [
        {key: 'Colories', value: '330'},
        {key: 'Protein', value: '25'},
        {key: 'Carbohydrate', value: '250'},
        {key: 'Fat', value: '30'},
    ]

    return (
        <>
        <PageTitle title='Recipe Page' subtitle='This is sampple Recipe' />
        <PageContent >
            <Typography variant='h5' fontWeight={'bold'} color='secondary' gutterBottom>
                Recipe Name
            </Typography>
            <Divider sx={{
                // marginBottom: '2rem'
            }} />
            <Box component='div' className='flex md:flex-row flex-col gap-5 py-10' >
                <Box component='div' className='flex-grow'>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nesciunt? Consequatur repudiandae, omnis est aperiam consequuntur cumque culpa molestiae, expedita cum ratione voluptate, velit mollitia. Eos fuga natus exercitationem ab!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio ea, magnam, et ratione modi error quo in odio magni sunt dignissimos! Dolorem, optio. Fugit nulla exercitationem nemo dolor corrupti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam dolorum suscipit cupiditate mollitia voluptates at? Aliquid ab, ea necessitatibus consectetur ut nesciunt et unde harum debitis, pariatur, ullam sint?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, sapiente aspernatur dicta nostrum, iste nisi ipsum fuga saepe quod ut sequi officia enim corporis dolorem aut fugiat quas, repudiandae sunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus a harum temporibus sed alias. Ipsam eius totam suscipit, minus excepturi quis tempore quaerat dignissimos libero ducimus repellat et qui!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima libero ullam tempore, sequi veritatis, dolore, repellat porro eveniet doloremque error accusamus ex velit minus. Rem quasi quae repellendus. Vitae, reprehenderit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente magnam sit minus provident quos repellendus explicabo repellat aliquam voluptatibus pariatur quasi illum, vero voluptate, dolores facere! Sapiente, ipsum minima?
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
                            {rows.map((row) =>(
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