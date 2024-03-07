import React, {useRef, useState} from "react";
import {Box, Grid} from "@mui/material";
import Draggable from 'react-draggable';
import {alphabet} from "../../shared/alphabet";
import Letter from "../../components/Letter";
import FollingLetter from "./FollingLetter";

const SortTheAlphabet = () => {
    const [shaked, setShaked] = useState(false);
    const ref = useRef();

    const handleDrag = (e, data) => {
        if(e.movementX > 10 || e.movementX < -10) setShaked(true);
    }

    return (
        <Box>
            <Box sx={{height: '20px'}}>
                <Box sx={{height: '20px', width: '100px', margin: '0 auto', fontSize: '20px'}}>
                    <Draggable axis="x" onDrag={handleDrag}>
                        <Box sx={{border: '1px solid black', borderRadius: '8px'}}>Shake me!</Box>
                    </Draggable>
                </Box>
            </Box>
            {shaked}
            <Box ref={ref} sx={{height: '300px', width: '400px'}}>
                <Grid container>
                    {
                       alphabet.map(letter => {
                           const boundies = ref?.current?.getBoundingClientRect();
                           const y = boundies?.y + boundies?.height;
                           return <FollingLetter key={'sta-' + letter} shaked={shaked} letter={letter} y={y} />
                       })
                    }
                </Grid>
            </Box>

        </Box>
    )

}

export default SortTheAlphabet;