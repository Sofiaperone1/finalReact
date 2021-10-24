import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css';

import Home from "./Views/Home/Home"
import Contact from "./Views/Contact/Contact"
import CartWidget from './Views/CartWidget/CartWidget';
import Products from './Views/Products/Products';
import Error404 from './Views/Error404/Error404';
import { BrowserRouter as Router , Switch, Route  } from 'react-router-dom';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';

import {CartContext} from './components/CartContext/CartContext'



function App() {
  return (

    <CartContext>
    <Router>
     <div className="App">
      <NavBar/>
    <Switch>
     <Route path="/" exact component={Home}></Route>
     <Route path="/contact" exact component={Contact}></Route>
     <Route path="/cartWidget" exact component={CartWidget}></Route>
     <Route path="/productos" exact component={Products}></Route>

     <Route path="/detail/:id"  component={ItemDetailContainer} ></Route>
     <Route path="*"  component={Error404} ></Route>


     </Switch>
    </div>
    </Router>
    </CartContext>
  );
}

export default App;
