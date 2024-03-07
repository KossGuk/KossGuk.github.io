import React, {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";
import Draggable from "react-draggable";

const FollingLetter = ({shaked, letter, y}) => {
    const [isOver, setIsOver] = useState(false);
    const letterRef = useRef();
    const containerRef = useRef();
    const overRef = useRef(false);
    const drugRef = useRef(false);
    const sx = {position: 'relative'};

    const onStop = (e, data) => {
        if (overRef.current) {
            console.log(letter);
        }
        console.log(overRef.current);
        drugRef.current = false
        setIsOver(false)
    }
    const onMouseOver = () => {
        overRef.current = true
    }
    const onMouseOut = () => {
        overRef.current = false;
    }

    if (shaked) {
        const boundies = letterRef?.current?.getBoundingClientRect();
        const currentY = boundies?.y;
        const height = boundies?.height;
        sx.top = `${y - currentY - height}px`;
    }
    const zIndex = isOver ? 0 : 10;
    return (
        <>
            <Box onMouseOver={onMouseOver} onMouseOut={onMouseOut} ref={containerRef} sx={{border: '1px solid black', height: '47px', width: '41px', zIndex: 9}}>
            </Box>
            <Draggable onStop={onStop} onStart={() => setIsOver(true)}>
                <Box ref={letterRef} sx={{border: '1px solid black', borderRadius: '8px', width: '40px', top: '0', ...sx, transition: 'top 0.5s cubic-bezier(0.65, 0, 0.99, 1)', marginLeft: '-42px', zIndex: zIndex}}>
                    {letter}
                </Box>
            </Draggable>
        </>
    )
}

export default FollingLetter;