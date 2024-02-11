import {Box, Button, Grid, Input} from "@mui/material";
import Letter from "../../components/Letter";
import React, {useState} from "react";
import {alphabet} from "../../shared/alphabet";
import {correctAction} from "../../store/actions/scoreActions";
import {useSharedDispatch} from "../../store/store";

const images = [
    {
        label: 'cat',
        url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        label: 'dog',
        url: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg'
    }
]

export const getNumber = () => Math.floor(Math.random() * (images.length));

const WriteFromPhoto = () => {
    const [selected, setSelected] = useState('');
    const [pressed, setPressed] = useState(false);
    const [index, setIndex] = useState(getNumber());
    const dispatch = useSharedDispatch();


    const label = images[index].label.toLowerCase();

    const onInput = (event) => {
        const selected = event.target.value.toLowerCase();
        setSelected(selected);
    };
    const onCheck = () => {
        const isCorrect = label === selected;
        setPressed(true);
        if(isCorrect) {
            dispatch(correctAction)
        }
        setTimeout(() => {
            setPressed(false);
            if (isCorrect) {
                setIndex(getNumber());
                setSelected('')
            }
        }, 1000)
    };
    const onImageClick = () => {
        let utterance = new SpeechSynthesisUtterance(label);
        speechSynthesis.speak(utterance);
    }
    const sx = {};
    if (pressed) {
        sx.backgroundColor = label === selected ? 'green' : 'red';
    }
    return (
        <Box>
            <Grid container direction={'row'}>
                <Grid item>
                    <img style={{width: '300px'}} onClick={onImageClick} src={images[index].url}/>
                </Grid>
            </Grid>
            <Input variant={'contained'} value={selected} sx={sx} onChange={onInput} />
            <Button variant={'contained'} onClick={onCheck}>Check</Button>
        </Box>
    )
}
export default WriteFromPhoto;