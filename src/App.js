import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Header/Home/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
           {/* <Route path='/' element={ <Carusels2></Carusels2>}/>
           <Route path='/' element={ <OfferLogo></OfferLogo>}/> */}



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
