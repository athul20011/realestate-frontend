import React from 'react'
import '../styles/Contact.css'
import { Box, Button, Container, Stack, TextField, ThemeProvider, createTheme } from '@mui/material'

function Contact() {
  
  return (
<div className='contact m-5'>
  <h1 className='hid'>Contact <span style={{color:'red'}}>Us</span></h1>
  <img src="https://www.shareicon.net/data/2016/02/09/716168_envelope_512x512.png" width={'70px'} alt="" />

<Container sx={{height:'100%',width:'100%',display:'flex',justifyContent:'center'}}>
        <Stack spacing={2} height={'100%'} width={'60%'} alignItems={'center'} justifyContent={'center'} >
          <TextField type='email' autoComplete='off'  color='secondary' fullWidth id="outlined-basic" label="Mail id" variant="outlined" />
          <TextField type='number' autoComplete='off' color='secondary' fullWidth id="outlined-basic" label="Phone number" variant="outlined" />
          <TextField type='message' autoComplete='off' color='secondary' fullWidth id="outlined-basic" multiline rows={3} label="Message" variant="outlined" />
          <button className='btn btn-dark'>Submit</button>
        </Stack>
      </Container>
</div>


  )
}

export default Contact