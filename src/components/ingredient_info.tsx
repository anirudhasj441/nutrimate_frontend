import React from "react";  
import MyCard from "./my_card";
import { CardContent, TableBody, TableContainer, Table, TableCell, Typography, TableRow } from "@mui/material";

interface IIngredentInfo {
    ingredient: {
        name: string,
        calories: number,
        protein: number,
        carbohydrates: number,
        fat: number
    }
}

const IngredientInfo: React.FC<IIngredentInfo> = (props: IIngredentInfo) => {
    return (
        <MyCard title={props.ingredient.name} >
            <TableContainer component={CardContent}>
                <Table >
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography>Calories</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{props.ingredient.calories} kcal</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography>Protein</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{props.ingredient.protein} g</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography>Carbohydrates</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{props.ingredient.carbohydrates} g</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography>Fat</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{props.ingredient.fat} g</Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MyCard>
    )
}

export default IngredientInfo