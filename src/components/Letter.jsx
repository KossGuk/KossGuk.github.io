import {Box, Button, Grid} from "@mui/material";
import React, {useState} from "react";

export default function Letter (props) {
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
        }, 5000)
    }
    return <Grid

            item
        >
            <Button
                sx={{
                    // border: '1px solid black',
                    // width: '30px',
                    // height: '30px',
                    ...bg
                }}
                variant="contained"
                onClick={onClick}>
                {letter}
            </Button>

        </Grid>
}