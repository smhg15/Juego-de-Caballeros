import React from 'react'
import { useDispatch } from 'react-redux'
import { translateToCordobez, translateToEnglish, translateToSpanish } from '../store/stateSlice'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

 function Translate() {
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="Basic button group" color='error'>
        <Button
          title='Cordobés'
          aria-label="Cordobeceala"
          onClick={() => dispatch(translateToCordobez())}
          sx={{backgroundColor:'#19191971'}}
        >
          Cor
        </Button>
        <Button
          title='Español'
          aria-label="español"
          onClick={() => dispatch(translateToSpanish())}      
          sx={{backgroundColor:'#19191971'}}
        >
          Es
        </Button>
        <Button
          title='English'
          aria-label="te-time"
          onClick={() => dispatch(translateToEnglish())}
          sx={{backgroundColor:'#19191971'}}
        >
          En
        </Button>      
      </ButtonGroup>
    </Box>

  )
}
export default Translate
