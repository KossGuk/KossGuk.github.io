import {Box, Button, Grid, Input} from "@mui/material";
import Letter from "../../components/Letter";
import React, {useEffect, useState} from "react";
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
    },
    {
        label: 'fox',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus.jpg'
    },
    {
        label: 'knife',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Damascus_Bowie.jpg/330px-Damascus_Bowie.jpg'
    },
    {
        label: 'house',
        url: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'
    },
    {
        label: 'table',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Writing_table_%28bureau_plat%29_MET_DP105403.jpg/275px-Writing_table_%28bureau_plat%29_MET_DP105403.jpg'
    },
    {
        label: 'pen',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ballpoint-pen-parts.jpg'
    },
    {
        label: 'dress',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Dress_MET_19.181.1_F2.jpeg'
    }
]

export const getNumber = () => Math.floor(Math.random() * (images.length));

const WriteFromPhoto = () => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState(false);
    const [index, setIndex] = useState(getNumber());
    const dispatch = useSharedDispatch();
    const label = images[index].label.toLowerCase();

    useEffect(() => {
        if (error) {
            let utterance = new SpeechSynthesisUtterance('Oh No! Wrong..');
            speechSynthesis.speak(utterance);
            setTimeout(() => {
                setError(false);
            }, 1000)
        }
    }, [error])

    const onInput = (event) => {
        const selected = event.target.value.toLowerCase();
        if (selected.length === label.length) {
            const isCorrect = label === selected;
            if(isCorrect) {
                setSelected(selected);
                dispatch(correctAction)
            } else {
                setError(true);
                return
            }
            let utterance = new SpeechSynthesisUtterance('Correct!');
            speechSynthesis.speak(utterance);
            utterance = new SpeechSynthesisUtterance(label);
            speechSynthesis.speak(utterance);
            setTimeout(() => {
                if (isCorrect) {
                    setIndex(getNumber());
                    setSelected('')
                }
            }, 1000);
        } else {
            const len = selected.length;
            const fromLabel = label[len - 1];
            if (selected[len - 1] === fromLabel) {
                setSelected(selected);
            } else {
                setError(true);
            }
        }


    };
    const onImageClick = () => {
        let utterance = new SpeechSynthesisUtterance(label);
        speechSynthesis.speak(utterance);
    }

    const sx = {};
    if (error) {
        sx.backgroundColor = 'red';
    } else if(label === selected) {
        sx.backgroundColor = 'green' ;
    }
    return (
        <Box>
            <Grid container direction={'row'}>
                <Grid item>
                    <img style={{width: '300px'}} onClick={onImageClick} src={images[index].url}/>
                </Grid>
            </Grid>
            <Input variant={'contained'} value={selected} sx={sx} onChange={onInput} />
        </Box>
    )
}
export default WriteFromPhoto;