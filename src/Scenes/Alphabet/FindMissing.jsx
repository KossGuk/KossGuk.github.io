import {alphabet, getNumber} from "../../shared/alphabet";
import {Box, Button, Grid, Input} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSharedDispatch} from "../../store/store";
import {correctAction} from "../../store/actions/scoreActions";

const FindMissing = () => {
    const [selected, setSelected] = useState('');
    const [pressed, setPressed] = useState(false);
    const [_alphabet, setAlphabet] = useState([...alphabet])
    const [missingIndex, setMissingIndex] = useState(getNumber());
    const dispatch = useSharedDispatch();
    const missing = _alphabet[missingIndex];
    let __alphabet = [..._alphabet];
    __alphabet[missingIndex] = '';

    const onInput = (event) => {
        const selected = event.target.value.toUpperCase();
        setSelected(selected);
    };
    const onCheck = () => {
        const isCorrect = missing === selected;
        setPressed(true);
        if(isCorrect) {
            setAlphabet([...alphabet]);
            dispatch(correctAction)
        }
        setTimeout(() => {
            setPressed(false);
            if (isCorrect) {
                setMissingIndex(getNumber());
                setSelected('')
            }
        }, 1000)
    };
    const sx = {};
    if (pressed) {
        sx.backgroundColor = missing === selected ? 'green' : 'red';
        if (missing === selected) {
            __alphabet = [...alphabet]
        }
    }
  return (
      <Box>
          <Grid container direction={'row'}>
              {__alphabet.map((letter, i) => {
                  return (
                      <Grid item key={'FM'+letter} sx={{width: '60px', height: '60px', border: '1px solid black', textAlign: 'center',
                          paddingTop: '5px'}}>{letter}</Grid>
                  )
              })}
          </Grid>
          <Input inputProps={{maxLength: 1}} variant={'contained'} value={selected} sx={sx} onChange={onInput} />
          <Button variant={'contained'} onClick={onCheck}>Check</Button>
      </Box>
  )
}

export default FindMissing;