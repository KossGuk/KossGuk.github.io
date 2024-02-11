import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react";
import {Box, Button, Grid} from '@mui/material';
import Letter from "./components/LetterSelection";
import {StateProvider} from "./store/store";
import AllScenes from "./Scenes";

function App() {

  return (
      <div style={{fontSize: '40px'}}>
          <StateProvider>
            <AllScenes />
          </StateProvider>
      </div>
  )

  // return (
  //   <div className="App" style={{fontSize: '40px'}}>
  //     <Box sx={{width: '60px', height: '60px', border: '1px solid black'}}>
  //         {alphabet[randomToFindIndexFirst]}
  //     </Box>
  //     <Box sx={{width: '60px', height: '60px', border: '1px solid black'}}>
  //         {alphabet[randomToFindIndexSec]}
  //     </Box>
  //     <Grid container>
  //         <Letter letter={letterA} index={randomToFindIndexFirst} isCorrect={randomToFindIndexFirst <randomToFindIndexSec} />
  //         <Letter letter={letterB} index={randomToFindIndexSec} isCorrect={randomToFindIndexFirst >randomToFindIndexSec} />
  //     </Grid>
  //     <Box>
  //       <Button onClick={() => setA(!a)}>
  //         Refresh
  //       </Button>
  //     </Box>
  //
  //   </div>
  // );
}

export default App;
