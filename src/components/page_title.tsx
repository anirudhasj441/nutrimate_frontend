import React from "react";
import { Box, Typography } from "@mui/material";

interface IPageTitle {
    title: string,
    subtitle: string
}

const PageTitle: React.FC<IPageTitle> = ( props: IPageTitle ) => {
    
    
    return (
        <Box component='div' className="py-20 px-5">
            <Typography variant="h4" fontWeight={'bold'} color="#4a148c" className="pb-4">{props.title}</Typography>
            <Typography color="#6a1b9a">{props.subtitle}</Typography>
        </Box>
    )
}

export default PageTitle