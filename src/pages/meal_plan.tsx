import PageTitle from "../components/page_title";

import React from "react";
import { Box, CardContent, Typography } from "@mui/material";
import PageContent from "../components/page_content";
import MyCard from "../components/my_card";

const MealPlanPage: React.FC = () => {
    return (
        <>
            {/* <div className="hero">
                <h2>Your Weekly Meal Plan</h2>
                <p>Balanced, nutritious, and personalized meals to keep you energized and healthy.</p>
            </div> */}
            
            <PageTitle 
                title="Your Weekly Meal Plan"
                subtitle="Balanced, nutritious, and personalized meals to keep 
                    you energized and healthy."
            />

            <PageContent>
                <Typography variant="h5" textAlign={'center'} 
                fontWeight={'bold'} color="#7e57c2" marginBottom={'20px'}>
                    Weekly Meal Overview 🍽️
                </Typography >
                <Box component={'div'} className="flex flex-wrap gap-10 justify-center">
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Monday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Oatmeal with fruits</Typography>
                            <Typography marginY={'16px'}>Lunch: Grilled chicken salad</Typography>
                            <Typography marginY={'16px'}>Dinner: Veggie stir-fry</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Tuesday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Poha</Typography>
                            <Typography marginY={'16px'}>Lunch: Veg biryani</Typography>
                            <Typography marginY={'16px'}>Dinner: Soup + salad</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Wednesday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Poha</Typography>
                            <Typography marginY={'16px'}>Lunch: Veg biryani</Typography>
                            <Typography marginY={'16px'}>Dinner: Soup + salad</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Thursday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Dosa + chutney</Typography>
                            <Typography marginY={'16px'}>Lunch: Grilled fish + veggies</Typography>
                            <Typography marginY={'16px'}>Dinner: Quinoa bowl</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Friday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Idli + sambar</Typography>
                            <Typography marginY={'16px'}>Lunch: Rajma + rice</Typography>
                            <Typography marginY={'16px'}>Dinner: Sprouts salad</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Saturday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Upma</Typography>
                            <Typography marginY={'16px'}>Lunch: Chicken curry + roti</Typography>
                            <Typography marginY={'16px'}>Dinner: Pasta (wheat)</Typography>
                        </CardContent>
                    </MyCard>
                    <MyCard width="250px">
                        <CardContent>
                            <Typography gutterBottom fontSize={'18px'} fontWeight={'bold'}>Sunday</Typography>
                        </CardContent>
                        <CardContent sx={{padding: '0 1.5rem !important', textAlign: 'left !important'}}>
                            <Typography marginY={'16px'}>Breakfast: Paratha + curd</Typography>
                            <Typography marginY={'16px'}>Lunch: Veg thali</Typography>
                            <Typography marginY={'16px'}>Dinner: Light khichdi</Typography>
                        </CardContent>
                    </MyCard>
                </Box>
            </PageContent>
        </>
    );
};

export default MealPlanPage;

