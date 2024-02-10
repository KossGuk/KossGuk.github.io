import React from "react";

import {Accordion, AccordionDetails, AccordionSummary, Box, Rating} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhichFirst from "./Alphabet/WhichFirst";
import FindMissing from "./Alphabet/FindMissing";
import {useSharedState} from "../store/store";

export default function AllScenes() {
    const {
        score: {
            current
        }
    } = useSharedState()
    return (
        <Box>
            <Rating
                name="simple-controlled"
                value={current}
                max={20}
                readOnly
            />
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
        </Box>
    );
}