import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import type { SxProps, Theme }  from "@mui/material";
interface IMyCard {
    children: React.ReactNode,
    width? : string,
    title?: string,
    sx?: SxProps<Theme>
}

const MyCard: React.FC<IMyCard> = ( props: IMyCard ) => {
    return (
        <Card className="flex flex-col" elevation={12} sx={{
            width: {xs: '100svw', md: props.width ?? '300px'},
            ...props.sx
        }}>
            {props.title && 
                <CardContent sx={{paddingBottom: 0}}>
                    <Typography variant="h5" gutterBottom fontWeight={'bold'} color="secondary">{props.title}</Typography>
                    <Divider />
                </CardContent>
            }
            {props.children}
        </Card>
    )
}

export default MyCard;