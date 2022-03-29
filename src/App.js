import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Header/Home/Home';
import OrderInventory from './Component/Header/OrderInventory/OrderInventory';
import AllProduct2 from './Component/Header/AllProduct/AllProduct2';
import Payment from './Component/Header/Payment/Payment';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import OrderConfirem from './Component/Header/OrderConfirem/OrderConfirem';
import AdminHome from './Component/Admin/AdminHome/AdminHome';
import AddAllpd from './Component/Admin/AddAllpd/AddAllpd';
import TopSave from './Component/Admin/TopSave/TopSave';
import Trending from './Component/Header/Trending/Trending';
import AddTrending from './Component/Admin/Trending/AddTrending';
import Orders from './Component/Admin/Orders/Orders';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([])


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}></Home>} />
          <Route path='/orderinventory/:ID' element={<OrderInventory cart={cart} setCart={setCart} />} />
          <Route path='/allProduct' element={<AllProduct2 />} />
          <Route path='/login' element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path='/orderConfirm/:conID' element={<Payment cart={cart} />} />
            <Route path='/orderConfirm/:conID/orderSucess/:id' element={<OrderConfirem></OrderConfirem>} />
            <Route path='/admin' element={<AdminHome />} />
            <Route path='/addAllPD' element={<AddAllpd />} />
            <Route path='/topSave' element={<TopSave />} />
            <Route path='/trending' element={<AddTrending />} />
            <Route path='/orders' element={<Orders></Orders>} />
          </Route>
        </Routes>
      </BrowserRouter>


    </UserContext.Provider>
  );
}

export default App;
