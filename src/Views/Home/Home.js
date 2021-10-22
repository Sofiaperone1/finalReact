import React from 'react'
import ImageSlider from '../../components/Carousel/ImageSlider'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Home = () => {
    
    return (
     <div>
<ImageSlider />
    
<Divider className="divider" />

<div className="CardsHomeContainer">
   
    <Card variant="outlined" className="somosCard" sx={{ maxWidth: 345 }}>
    <CardContent   className="CardContentSomos">
      <Typography gutterBottom variant="h5" component="div">
      Quienes somos?
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      
      <Button size="small">Contactanos</Button>
    </CardActions>
  </Card>

  <Card variant="outlined"className="prodCard" sx={{ maxWidth: 345 }}>
   

   
    <CardContent className="CardContentProd">
      <Typography gutterBottom variant="h5" component="div">
     Nuestros productos:
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      
      <Button size="small">Ir a productos</Button>
    </CardActions>
  </Card>
  </div>
  </div>
    )
}

export default Home
