import React from "react";

import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, Rating} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhichFirst from "./Alphabet/WhichFirst";
import FindMissing from "./Alphabet/FindMissing";
import {useSharedState} from "../store/store";
import WriteFromPhoto from "./Writing/WriteFromPhoto";
import SortTheAlphabet from "./Alphabet/SortTheAlphabet";

export default function AllScenes() {
    const {
        score: {
            current
        }
    } = useSharedState()
    return (
        <Box>
            <Box
                sx={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999, backgroundColor: 'white'}}
            >
                <Rating
                    name="simple-controlled"
                    value={current}
                    max={20}
                    readOnly
                />
            </Box>

            <Divider sx={{marginTop: '30px'}} />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Which is First?
                </AccordionSummary>
                <AccordionDetails>
                    <WhichFirst />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Find missing letter
                </AccordionSummary>
                <AccordionDetails>
                    <FindMissing />
                </AccordionDetails>
            </Accordion>
            <Accordion hidden>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Sort the alphabet!
                </AccordionSummary>
                <AccordionDetails>
                    <SortTheAlphabet />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Write the picture
                </AccordionSummary>
                <AccordionDetails>
                    <WriteFromPhoto />
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}