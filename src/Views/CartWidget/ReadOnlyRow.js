import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.cantidad}</td>
      <td>${contact.price}</td>
      <td>${contact.subT}</td>
      <td>
       
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
         <DeleteIcon></DeleteIcon>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;