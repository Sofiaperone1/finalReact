
import React, {useState} from "react" ;
import { NavLink} from 'react-router-dom';
import Item from '../Item/Item';

import {db} from '../../firebase';


const Velas = () => {

    
    const [products, setProducts] = useState([]);

    db.collection('products').where('category' , '==' , 'Velas').onSnapshot((querySnapshot) => {
        
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

export default Velas
