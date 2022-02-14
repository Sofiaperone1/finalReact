import * as React from 'react';
import Box from '@mui/material/Box';
import contacto1 from "../../Imagenes/contacto1.jpg"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Contact = () => {
   
    

        return (
         <div className="contactView">
           
       <div className="contactForm">
       <Box 
            className="formBox"
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: '23ch' },
              }}
              noValidate
              autoComplete="off"
            >
        <div className="formInputs">
                 <TextField  required id="standard-basic" label="Nombre y Apellido" variant="standard" />
                 <TextField type="number" required id="standard-basic" label="Edad" variant="standard" 
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/> 
             
               <TextField  required id="standard-basic" label="Numero de telefono" variant="standard" />
                <TextField  type="email" required id="standard-basic" label="Email" variant="standard" />
  
          
         </div>   
          <div className="coments">
               <TextField 
          id="outlined-multiline-static"
          label="Escriba su comentario aqui:"
          multiline
          rows={5}
          
          defaultValue="Hola Gea, queria consultar "
        />
                <Stack direction="row" spacing={2}>
                    <Button id="sendFContact" variant="outlined">Enviar</Button>
                </Stack>

             </div>
             </Box>
             </div>
           
            <img className="contactImg"  alt="img-contacto" src={contacto1} width="32%" height="45%" ></img> 
            </div>
           
      

          );
    
}

export default Contact