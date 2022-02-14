import TableWidget from "./TableWidget"
import React, { useState, useContext } from "react";
import { ItemContext } from "../../components/CartContext/CartContext";
import Button from '@mui/material/Button';
import WidgetForm from "../../components/Forms/WidgetForm"
import {db} from '../../firebase';
import Ticket from "./Ticket"

const CartWidget = () => {

const {cart, setTotal, disableBtn, disableBtn2, returnId, setReturnId} = useContext (ItemContext)

const [check, setCheck] = useState(false);


 

const subtotal=[0];


cart.map((c) => { return subtotal.push (c.subT)})

const reducer = (previousValue, currentValue) => previousValue + currentValue;
const total = subtotal.reduce(reducer) ;

setTotal (total);

      const finalize = async () => { 

      const subProducts = {cart};
       
      await db.collection('compras').doc().set(subProducts);
  
      setCheck(true);
     
      db.collection('compras').limit(1).onSnapshot((querySnapshot) => {
        
           querySnapshot.forEach ((doc) => { 
        
                setReturnId ( { ...doc.data(), id: doc.id } ) ; 
               
            
            }) } 
               
               ) ; }


              
            
               //<p>El ID de su compra es : <strong> {returnId.id} </strong> </p>
 
return (

  <div className="cartWidget">
    
   
            <WidgetForm/>
          
      
      <div className="tableWidget">
   
   { check ? <Ticket/> :  <TableWidget/>  } 
   { disableBtn && disableBtn2 ?  <Button  className="finalizarButton" onClick={finalize} variant="outlined">Finalizar compra</Button>  :  <Button disabled className="finalizarButton" onClick={finalize} variant="outlined">Finalizar compra</Button>  }
   </div>
     
 
           
</div>
  
)

    
}

export default CartWidget;
