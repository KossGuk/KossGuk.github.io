import {Box, Input} from "@mui/material";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {correctAction} from "../store/actions/scoreActions";
import {useSharedDispatch} from "../store/store";

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const Letter = ({letter, missingIndex, index, onSuccess}) => {
    const dispatch = useSharedDispatch();
    const [selected, setSelected] = useState('');

    const rotation = useMemo(() => randomIntFromInterval(-20, 20), [missingIndex])

    const isMissing = missingIndex === index;

    const onInput = (event) => {
        const selected = event.target.value.toUpperCase();
        setSelected(selected);
        const isCorrect = letter === selected;
        if(isCorrect) {
            let utterance = new SpeechSynthesisUtterance("Correct!");
            speechSynthesis.speak(utterance);
            utterance = new SpeechSynthesisUtterance(letter.toLowerCase());
            speechSynthesis.speak(utterance);
            dispatch(correctAction);
        } else {
            let utterance = new SpeechSynthesisUtterance('Oh No!!! Wrong.');
            speechSynthesis.speak(utterance);
        }
        setTimeout(() => {
            setSelected('');
            if (isCorrect) onSuccess();
        }, 1000)
    };

    const onLetterClick = () => {
        if (isMissing) return;
        let utterance = new SpeechSynthesisUtterance(letter.toLowerCase());
        speechSynthesis.speak(utterance);
    }

    const sx = {};
    if (selected) {
        sx.backgroundColor = letter === selected ? 'green' : 'red';
    }

    return (
        <Box sx={{
            ...sx,
            cursor: 'pointer',
                width: '60px',
                height: '60px',
                borderRadius: '8px',
                border: '1px solid black',
                textAlign: 'center',
                paddingTop: '5px',
                userSelect: 'none',
                transform: `rotate(${rotation}deg)`,
                transition: `transform 1s`
            }}
             onClick={onLetterClick}
        >
            {missingIndex === index ? (
                <Input sx={{
                    fontSize: '40px',
                    height: '100%',
                    paddingLeft: '15px'
                }} inputProps={{maxLength: 1}} variant={'contained'} value={selected} onChange={onInput} />
            ) : letter }

        </Box>
    )
}

export default Letter;