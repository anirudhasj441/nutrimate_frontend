import React from "react";
import { Card } from "@mui/material";

interface IMyCard {
    children: React.ReactNode,
    width? : string,
    height?: string
}

const MyCard: React.FC<IMyCard> = ( props: IMyCard ) => {
    return (
        <Card className="flex flex-col" sx={{
            width: props.width ?? 'auto',
            maxWidth: '100svw',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            '& .MuiCardContent-root': {
                height: props.height ?? 'auto',
                textAlign: 'center'
            }
        }}>
            {props.children}
        </Card>
    )
}

export default MyCard;