import {Box} from "@mui/material";

const Letter = ({letter}) => {
    const onLetterClick = () => {
        let utterance = new SpeechSynthesisUtterance(letter.toLowerCase());
        speechSynthesis.speak(utterance);
    }
    return (
        <Box sx={{
            cursor: 'pointer',
                width: '60px',
                height: '60px',
                border: '1px solid black',
                textAlign: 'center',
                paddingTop: '5px',
            }}
             onClick={onLetterClick}
        >
            {letter}
        </Box>
    )
}

export default Letter;