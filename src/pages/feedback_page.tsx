import React from "react";
import PageTitle from "../components/page_title";
import PageContent from "../components/page_content";
import { Box, Button, CardContent, Rating, TextField, Typography } from "@mui/material";
import MyCard from "../components/my_card";
import { Form } from "react-router-dom";

const FeedbackPage: React.FC = () => {
    return (
        <>
            <PageTitle title="Your Feedback" subtitle="We appreciate your valuable feedback!"/>
            <PageContent>
                <Box component={'div'} className="flex justify-center" >
                    <MyCard title="Share Your Thoughts" width="500px">
                        <Form>
                            <CardContent>
                                <Typography>How much effort did it take for you to achieve your goal?</Typography>
                                <Rating size="large" />
                            </CardContent>
                            <CardContent>
                                <Typography>Do you have any suggestions to help us improve our website?</Typography>
                                <TextField fullWidth multiline minRows={2} />
                            </CardContent>
                            <CardContent>
                                <Button loading={false} type="submit" variant="contained" fullWidth>Submit</Button>
                            </CardContent>
                        </Form>
                    </MyCard>
                </Box>
            </PageContent>
        </>
    )
}

export default FeedbackPage;