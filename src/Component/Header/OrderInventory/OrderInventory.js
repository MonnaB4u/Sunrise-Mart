import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import index2 from '../../Data/index2'
import Cart from '../Cart/Cart';
import Nav1 from '../Navbar/Nav1';
import Sidebar2 from '../Sidebar/Sidebar2';
import './orderInventory.css'
const OrderInventory = () => {
    const { ID } = useParams()
    const finddata = index2.find(data => data.id.toString() === ID)

    const [cart, setCart] = useState([])
    const handlecart = ((product) => {
        // setData(cart + 1)
        // console.log(product)
        const pd = [...cart, product]
        setCart(pd)
    })

    const navigate = useNavigate()
    return (
        <div className="">
            <div className="row">
                <Nav1 cart={cart}></Nav1>
                <div className="col-sm-2">
                    <Sidebar2></Sidebar2>
                </div>
                <div className="col-sm-8 py-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="" >{Cart.length}</td>
                                <td className="row">
                                        <div className="col-sm border">
                                            <img src={finddata.images} className="img-fluid w-20 " alt="" />
                                        </div>
                                        <div className="col-sm">
                                            <p className=" font-bold justify-text text-start ">{(finddata.name).toUpperCase()}</p>
                                        </div>
                                </td>
                                <td>
                                    <span id="spnUnitPrice">
                                        <span class="sp_currencysyb mx-1">৳</span>
                                        <span class="sp_amt">{finddata.price}</span>
                                    </span>
                                </td>
                                <td>{finddata.quantity}</td>
                                <td> <span id="spnUnitPrice"><span class="sp_currencysyb">৳</span> <span class="sp_amt">{finddata.price}</span></span></td>
                                <td>
                                    <button onClick={() => handlecart(finddata)} className="btn bg-green-600 rounded-full text-white">Add to Cart</button>
                                    <button onClick={() => navigate('/')} className="btn bg-red-600 rounded-full text-white mx-1">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col-sm-2 border-l">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default OrderInventory;
