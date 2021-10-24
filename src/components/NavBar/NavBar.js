import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';


import Breadcrumbs from '@mui/material/Breadcrumbs';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
   
   <div>
<AppBar id="Navbar" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
         
         
         <NavLink id="logoGea" to="/"> Gea Aromas </NavLink>
          
          </Typography>
         
         <Breadcrumbs aria-label="breadcrumb" className="linkContainerNav">
        
          <NavLink to="/productos" className="Productos" >Productos</NavLink>
          <NavLink to="/contact" className="Contactanos" >Contactanos</NavLink>
          <NavLink to="/cartWidget" className="ShoppingCart " ><ShoppingCartIcon/></NavLink>
         
          </Breadcrumbs>
         
        </Toolbar>
      </AppBar>
 
    </div>
  );
}

