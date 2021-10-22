import TableWidget from "./TableWidget"
import React, { useState, useContext } from "react";
import { ItemContext } from "../../components/CartContext/CartContext";
import Button from '@mui/material/Button';
import WidgetForm from "../../components/Forms/WidgetForm"
import {db} from '../../firebase';

const CartWidget = () => {

const {cart, setTotal, disableBtn, disableBtn2} = useContext (ItemContext)

const [check, setCheck] = useState(false);

const [returnId, setReturnId] = useState([]);


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
        
                setReturnId ( { ...doc.data(), id: doc.id } ) ; }) } 
               
               ) ; }

               
 
return (

  <div className="cartWidget">
   
       <div className="section1CW">
            <WidgetForm/>
           { disableBtn && disableBtn2 ?  <Button  className="finalizarButton" onClick={finalize} variant="outlined">Finalizar compra</Button>  :  <Button disabled className="finalizarButton" onClick={finalize} variant="outlined">Finalizar compra</Button>  }
      </div>
 
      <div>
      </div>
 
           { check ?  <p>el id de su compra es : <strong> {returnId.id} </strong> </p>  : <TableWidget/>  } 
</div>
  
)

    
}

export default CartWidget;
