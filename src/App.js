import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css';

import Home from "./Views/Home/Home"
import Contact from "./Views/Contact/Contact"
import CartWidget from './Views/CartWidget/CartWidget';
import Products from './Views/Products/Products';
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
     <Route  path="/contact" component={Contact}></Route>
     <Route   path="/cartWidget" component={CartWidget}></Route>
     <Route path="/productos" component={Products}></Route>
     <Route path="/detail/:id" component={ItemDetailContainer} ></Route>
     
     </Switch>
    </div>
    </Router>
    </CartContext>
  );
}

export default App;
