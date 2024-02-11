import {Box, Button, Grid} from "@mui/material";
import React, {useState} from "react";

export default function LetterSelection (props) {
    // const
    const {letter, index, isCorrect} = props
    const [bg, setBg] = useState({})
    const onClick = () => {
        if (isCorrect) {
            setBg({background: 'green !important'})
        } else {
            setBg({background: 'red !important'})
        }
        setTimeout(() => {
            setBg({})
        }, 1000)
    }
    return <Grid

            item
        >
            <Button
                sx={{
                    ...bg
                }}
                variant="contained"
                onClick={onClick}>
                {letter}
            </Button>

        </Grid>
}