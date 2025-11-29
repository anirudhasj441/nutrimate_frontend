import { Box, Container } from "@mui/material";
import React from "react";

interface IPageContent {
    children: React.ReactNode
}

const PageContent: React.FC<IPageContent> = ( props: IPageContent ) => {
    return (
        <Box component={'section'} className="py-20 flex-grow" sx={(theme) => ({
            bgcolor: theme.custom.contentBgColor,
            backdropFilter: 'blur(5px)'
        })}>
            <Container>
            {props.children}
            </Container>
        </Box>
    )
}

export default PageContent;