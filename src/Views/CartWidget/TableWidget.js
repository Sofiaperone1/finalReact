import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext} from "react";
import { ItemContext } from '../../components/CartContext/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const TableWidget = () => {

    const {cart, Total} = useContext(ItemContext)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
<div className="TableWidget">

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right"><DeleteIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.subT}</TableCell>
              <TableCell align="right"> <Checkbox {...label} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 

<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Total:</TableCell>
      <TableCell align="right"></TableCell>
      <TableCell align="right"></TableCell>
      <TableCell align="right"></TableCell>
      <TableCell align="right">{Total}</TableCell>
    </TableRow>
  </TableHead>
  
</Table>
</TableContainer>

</div>


  );
}

export default TableWidget;