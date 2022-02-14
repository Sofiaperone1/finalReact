import React , {useState, createContext} from "react";
import {db} from '../../firebase';
import swal from "sweetalert";

 // 1- Creamos el contexto

export const ItemContext = createContext();

// 2 - creamos el componente provider



// 5 - pasamos props dentro del componente provider 

export const CartContext = ({children}) => { 

       
      
       const [user, setUser] = useState ('');
   
       const  [addBtn, setAddBtn ] = useState(false);

       const [disableBtn2, setDisableBtn2 ] = useState(false);

       const [disableBtn, setDisableBtn ] = useState(false);

       const [Total, setTotal ] = useState(0);
      
       const [cart, setCart] = useState([]);

       const [returnId, setReturnId] = useState([]); 

       const alert = () => {swal({
        title: "Producto agregado al carrito",
        timer :"1300" ,
        icon: "success",
        button: null,
        className: "myClass"
      });}
       const onAdd =  (product,counter) => {
        
            const newProduct = {...product, cantidad: counter, subT: counter*product.price};
           

            setCart ([...cart, newProduct]); 
            setAddBtn(true);
            setDisableBtn2(true);
            alert();
           
            
        }
           
          
    

// 3 - retornamos nuestro context con un provider 
// 4- van dentro de doble llave porque tiene que ser un objeto SI O SI.

return (    

    <ItemContext.Provider value={{disableBtn2, setDisableBtn2,addBtn,setAddBtn, cart,
                                 setCart, onAdd, Total, setTotal, user,setUser,disableBtn,  
                                 setDisableBtn, returnId, setReturnId}} >

        {children}
    </ItemContext.Provider>
            )
};