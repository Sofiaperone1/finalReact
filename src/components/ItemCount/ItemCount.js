import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {useState} from "react"

import { ItemContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

import Button from '@mui/material/Button';


const ItemCount = ({sendData}) => {
 

const {onAdd, addBtn, setAddBtn} = useContext(ItemContext)

const [counter, setCounter] = useState (0); 

const mostrarAlert = () => {console.log("alert")}

const sumarUno = () => {
    if (counter < 3 ) {
    setCounter(counter + 1); 
  
    }
  };
  const restarUno = () => {
    if (counter > 0 ) { 
      setCounter (counter - 1) 
   
                        }};

  
  return (
    <div className="ItemCount">
     
      <div className="Contador">
      <Fab id="addButton" onClick={sumarUno} color="primary" aria-label="add" size="small">
        <AddIcon />
      </Fab>
      <p  id="InitalCount"> {counter } </p>
      <Fab id="removeButton" onClick={restarUno} color="primary" aria-label="remove" size="small">
        <RemoveIcon />
      </Fab>
      </div>
    
     <div className="addToCart"> 
    
     {counter === 0 ? <Button disabled onClick={()=> onAdd (sendData,counter)} > Agregar al carrito</Button> : <Button onClick={()=> onAdd (sendData,counter)} > Agregar al carrito</Button>}
   
  
                    
   <NavLink to={"/cartWidget"}> <Button> Ir al carrito </Button> </NavLink>
     
     </div>
    </div>
    
  );
};

export default ItemCount;
