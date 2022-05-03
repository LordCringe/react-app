import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal'
import '../node_modules/animate.css/animate.css'
import React from 'react';

function App() {
    return (
        <div>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<ProductList/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Default/>}/>
          </Routes>
          
        <Modal/>
        </div>
    );
}

export default App;