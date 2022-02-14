import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { useParams } from "react-router-dom"
import ItemCount from '../../components/ItemCount/ItemCount'
import Divider from '@mui/material/Divider';




const ItemDetailContainer = () => {


  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getById = () => {
    db.collection('products').onSnapshot((querySnap) => {


      const docs = [];
      querySnap.forEach((doc) => { docs.push({ ...doc.data(), id: doc.id }) });


       docs.forEach((doc) => {
        if (doc.id === id) {
          setProduct(doc) }
        
     
         

      })
    })
  }


    



  useEffect(() => { getById(); }, [id])

  return (
 
<> 
 { product ?
  <div  className="itemDetailCont">
  <div className="img-detail" >
     <img alt="imagenProducto" src={product.img} />
  </div>
 
 <Divider orientation="vertical" flexItem> </Divider>

  <div className="contDescripDetail">
     <ul>
       <li><h4>{product.name}</h4></li>
       <li><h6>{product.description}</h6> </li>
       <li><h5>${product.price}</h5></li>
     </ul>
     <ItemCount className="contCountDetail" sendData={product} />
   </div>
  </div>
  :
  <h1>Lo sentimos! ese producto no existe en nuestra tienda </h1>
 }
</>

  )
}

export default ItemDetailContainer

