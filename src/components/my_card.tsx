import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import type { SxProps, Theme }  from "@mui/material";
interface IMyCard {
    children: React.ReactNode,
    width? : string,
    height?: string,
    title?: string,
    sx?: SxProps<Theme>
}

const MyCard: React.FC<IMyCard> = ( props: IMyCard ) => {
    return (
        <Card className="flex flex-col" elevation={12} sx={{
            width: props.width ?? '300px',
            maxWidth: '100svw',
            // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            // '& .MuiCardContent-root': {
            //     height: props.height ?? 'auto',
            //     textAlign: 'center'
            // },
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