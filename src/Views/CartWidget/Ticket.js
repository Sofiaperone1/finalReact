import { useContext, React } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemContext } from "../../components/CartContext/CartContext";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



const Ticket = () => {

    const {returnId} = useContext(ItemContext);


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="div">
         Felicidades! Te enviamos el comprobante a la casilla de e-mail previamente ingresada.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
   El ID de tu compra es: <strong> {returnId.id} </strong>
          <br />
          {''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Estado de mi compra</Button>
      </CardActions>
    </Card>
  );
}

export default Ticket;