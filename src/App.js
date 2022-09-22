import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const user = true
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/products' element={<ProductList/>} />
      <Route path='/products/:categories' element={<ProductList/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={user?<Navigate to='/'/>:<Login/>} />
      <Route path='/register' element={user?<Navigate to='/'/>:<Register/>} />
    </Routes>
  );
}

export default App;
