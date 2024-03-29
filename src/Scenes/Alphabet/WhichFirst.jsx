import {alphabet, getNumber} from "../../shared/alphabet";
import {Box, Grid} from "@mui/material";
import LetterSelection from "../../components/LetterSelection";

const WhichFirst = () => {
    const randomToFindIndexFirst = getNumber();
    let randomToFindIndexSec = getNumber();

    while (randomToFindIndexFirst === randomToFindIndexSec) {
        randomToFindIndexSec = getNumber()
    }

    const letterA = alphabet[randomToFindIndexFirst];
    const letterB = alphabet[randomToFindIndexSec];
  return (
      <>
          <Box sx={{width: '60px', height: '60px', border: '1px solid black'}}>
              {alphabet[randomToFindIndexFirst]}
          </Box>
          <Box sx={{width: '60px', height: '60px', border: '1px solid black'}}>
              {alphabet[randomToFindIndexSec]}
          </Box>
          <Grid container>
              <LetterSelection letter={letterA} index={randomToFindIndexFirst} isCorrect={randomToFindIndexFirst <randomToFindIndexSec} />
              <LetterSelection letter={letterB} index={randomToFindIndexSec} isCorrect={randomToFindIndexFirst >randomToFindIndexSec} />
          </Grid>
      </>
  )
}

export default WhichFirst;