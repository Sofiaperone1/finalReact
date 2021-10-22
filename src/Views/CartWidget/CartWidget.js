import TableWidget from "./TableWidget"
import React, { useState, useContext } from "react";
import { ItemContext } from "../../components/CartContext/CartContext";
import Button from '@mui/material/Button';
import WidgetForm from "../../components/Forms/WidgetForm"
import {db} from '../../firebase';

const CartWidget = () => {

const {cart, setTotal, disableBtn, disableBtn2} = useContext (ItemContext)

const [check, setCheck] = useState(false);



const subtotal=[0];


cart.map((c) => { subtotal.push (c.subT)})

const reducer = (previousValue, currentValue) => previousValue + currentValue;
const total = subtotal.reduce(reducer) ;

setTotal (total);

      const finalize = async () => { 

      const subProducts = {cart};
       
      await db.collection('compras').doc().set(subProducts);
  
      setCheck(true);  }
 
return (

  <div className="cartWidget">
   
       <div className="section1CW">
            <WidgetForm/>
           { disableBtn && disableBtn2 ?  <Button  className="finalizarButton" onClick={finalize} variant="outlined">Finalizar compra</Button>  :  <Button disabled className="finalizarButton" onClick={finalize} variant="outlined">Finalizar compra</Button>  }
      </div>
 
      <div>
           { check ?  <p>el comprobante de su compra es</p>  : <TableWidget/>  } 
      </div>
 
</div>
  
)


    
}

export default CartWidget;
