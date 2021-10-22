import React, {useContext, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ItemContext} from "../CartContext/CartContext"
import Alert from '@mui/material/Alert';

const WidgetForm = () => {

    const { user, setUser , setDisableBtn, setAddBtn} = useContext(ItemContext);
   
    const [name, setName] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");

    const handleName = (e) => setName(e.target.value);
    const handleEmail1 = (e) => setEmail1(e.target.value);
    const handleEmail2 = (e) => setEmail2(e.target.value);

    const verification = (name, email1, email2) => {
        if (email1 === email2 && name != "" ) {
            setUser({
                name: name,
                email: email1 })
    console.log ("es igual")
    setDisableBtn (true);
        }else {
            alert("Porfavor revise su informacion de contacto");
        }
    };
   

return (
        <div className="cartWidgetForm">
             <div >
                 {user.name ? <h6>Bienvenidx! Finalize la compra y reciba su comprobante </h6> : <h6>Ingrese sus datos para continuar</h6>}
                
                 {user.name ?
                <div className="userName">
                <Alert onClose={() => {setAddBtn(false)}}>Tus datos se enviaron exitosamente!</Alert>
                </div>
            :
                <div className="CWFcontent">
                    <Box 
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" onChange={handleName} label="Nombre y Apellido" variant="outlined" />
                    <TextField id="outlined-basic" onChange={handleEmail1} label="Email" variant="outlined" />
                    <TextField id="outlined-basic" onChange={handleEmail2} label="Verifique email" variant="outlined" />
                   
                    <Button onClick={() => {verification(name, email1 , email2)}}>Ingresar datos</Button>
                    </Box>
                </div>
            }
 
     
    </div>
        </div>
    )
}

export default WidgetForm
