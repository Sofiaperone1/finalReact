
import React, {useState} from "react" ;
import { NavLink} from 'react-router-dom';
import Item from '../Item/Item';

import {db} from '../../firebase';


const Sahumerios = () => {

    
    const [products, setProducts] = useState([]);

    db.collection('products').where('category' , '==' , 'Sahumerios').onSnapshot((querySnapshot) => {
        
        const docs = [];

        querySnapshot.forEach ((doc) => { 
        
            docs.push ( { ...doc.data(), id: doc.id } ) ;


      
              }) ;  setProducts (docs); } 
             
             ) ; 

    return (
        <div className="ItemListCarts">{products.map ((product) =>  { return (     
    
            <NavLink to={`/detail/${product.id}`}>
            <Item key={product.id} data={product} />  
            </NavLink>
        
            )})}
        </div>
        
    )
}

export default Sahumerios
