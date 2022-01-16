import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Header/Home/Home';
import OrderInventory from './Component/Header/OrderInventory/OrderInventory';
import AllProduct2 from './Component/Header/AllProduct/AllProduct2';
import Payment from './Component/Header/ConfirmOrder/Payment';





function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/orderinventory/:ID' element={<OrderInventory/>} />
          <Route path='/allProduct' element={<AllProduct2/>} />
          <Route path='/orderConfirm/:conID' element={<Payment/>} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
