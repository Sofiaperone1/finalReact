
import { NavLink } from 'react-router-dom';
import Item from '../Item/Item';
import React, {useState, useEffect} from "react" ;



import {db} from '../../firebase';


const ItemList = () => {
   
const [products, setProducts] = useState([]);



const getProducts = () => {
    
    db.collection('products').onSnapshot((querySnapshot) => {
        
        const docs = [];
    
        
        querySnapshot.forEach ((doc) => { 
        
            docs.push ( { ...doc.data(), id: doc.id } ) ;


      
              }) ;  setProducts (docs); } 
             
             ) ; };
            
 
                      

const getCategory1 = () => {   

    db.collection('products').where('category' , '==' , 'Sahumerios').onSnapshot((querySnapshot) => {
        
        const docs = [];

        querySnapshot.forEach ((doc) => { 
        
            docs.push ( { ...doc.data(), id: doc.id } ) ;


      
              }) ;  setProducts (docs); } 
             
             ) ; 
        
  }             
             
const getCategory2 = () => {   

    db.collection('products').where('category' , '==' , 'Carbones').onSnapshot((querySnapshot) => {
        
        const docs = [];

        querySnapshot.forEach ((doc) => { 
        
            docs.push ( { ...doc.data(), id: doc.id } ) ;


      
              }) ;  setProducts (docs); } 
             
             ) ; 
  }    

const getCategory3 = () => {   

    db.collection('products').where('category' , '==' , 'Velas aromaticas').onSnapshot((querySnapshot) => {
        
        const docs = [];

        querySnapshot.forEach ((doc) => { 
        
            docs.push ( { ...doc.data(), id: doc.id } ) ;


      
              }) ;  setProducts (docs); } 
             
             ) ; 
  }    
  
const getCategory4 = () => {   

    db.collection('products').where('category' , '==' , 'Sales').onSnapshot((querySnapshot) => {
        
        const docs = [];

        querySnapshot.forEach ((doc) => { 
        
            docs.push ( { ...doc.data(), id: doc.id } ) ;


      
              }) ;  setProducts (docs); } 
             
             ) ; 
  }      
  

useEffect (() => {getProducts();},[])


return(

<div  >

 <div >{products.map ((product) =>  { return (     
    
    <NavLink to={`/detail/${product.id}`}>
    <Item key={product.id} data={product} />  
    </NavLink>
    
    )})}
</div>

</div> 


    
)
}

export default ItemList
