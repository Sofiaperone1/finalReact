import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext, useState, Fragment} from "react";
import { ItemContext } from '../../components/CartContext/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';


import "./table.css";
import ReadOnlyRow from "./ReadOnlyRow";

const TableWidget = () => {

    const {cart,setCart, Total} = useContext(ItemContext)
   
    const [contacts, setContacts] = useState(cart);
  
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);

      setCart (newContacts);
    };
  
    return (
      <div className="TableWidget">
      <div className="app-container">
        <form >
          <table>
            <thead >
              <tr className="cartTable">
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                
                    <ReadOnlyRow
                      contact={contact}
                    
                      handleDeleteClick={handleDeleteClick}
                    />
                 
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
  
       
      </div>
  

<TableContainer component={Paper}>

<table>
            <thead>
              <tr className='totalTable'>
                <th>Total:</th>
            
                <th className='tot2'>${Total}</th>
              </tr>
            </thead>
         
          </table>

</TableContainer>



   
</div>


  );
}

export default TableWidget;