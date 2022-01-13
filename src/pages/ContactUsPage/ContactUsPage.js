import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

export default function ContactUsPage(){

    

    return (
        <>
        <Container maxWidth="md" m={10}>
            <Box m={10}>
            <Grid item md={12}>
            <FormControl>
              <InputLabel htmlFor="nombre">Nombre</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Tu nombre</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item>
            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Tu email</FormHelperText>
            </FormControl>
            </Grid>
            <Grid md={12}>
            <TextField  label={'escribe tu consulta'} id="margin-normal" margin="normal" />
            </Grid>
            <Grid md={12}>
            <Box m={2}>
            <Button variant="contained" endIcon={<SendIcon />}>
              Enviar
            </Button>
            </Box>
            </Grid>
            </Box>
        </Container>
        </>
    )
}