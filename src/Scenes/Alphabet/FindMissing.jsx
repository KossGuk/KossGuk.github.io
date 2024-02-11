import {alphabet, getNumber} from "../../shared/alphabet";
import {Box, Button, Grid, Input} from "@mui/material";
import React, {useState} from "react";
import Letter from "../../components/Letter";

const FindMissing = () => {
    const [missingIndex, setMissingIndex] = useState(getNumber());

    const onSuccess = () => {
        setMissingIndex(getNumber());
    }
  return (
      <Box>
          <Grid container direction={'row'}>
              {alphabet.map((letter, i) => {
                  return (
                      <Grid item key={'FM'+letter}>
                          <Letter letter={letter} missingIndex={missingIndex} index={i} onSuccess={onSuccess}/>
                      </Grid>
                  )
              })}
          </Grid>
      </Box>
  )
}

export default FindMissing;