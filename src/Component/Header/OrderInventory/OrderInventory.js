import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Sidebar2 from '../Sidebar/Sidebar2';
import './orderInventory.css'
import Nav2 from '../Navbar/Nav2';

const OrderInventory = (props) => {

    const [pd, setData] = useState([])
    const { ID } = useParams()
    const [urls, setUrl] = useState()

console.log(ID)
    useEffect(() => {
        const url = `http://localhost:5000/dataCollection/${ID}`
        const url2 = `http://localhost:5000/topSave/${ID}`
        const url3 = `http://localhost:5000/trending/${ID}`

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url2)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url3)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const { cart, setCart } = props
    const handlecart = ((product) => {
        const pd = [...cart, product]
        setCart(pd)
    })

    const handleDcart = e => {
        const newPost = [...cart];
        newPost.splice(0, 1);
        setCart(newPost);
    }

    const [buttonText, setButtonText] = useState("+Add");
    const [buttonText2, setButtonText2] = useState("-Delete");

    return (
        <div className="">
            <div className="row">
                <Nav2></Nav2>
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
                                <td className="" ></td>
                                <td className="row">
                                    <div className="col-sm border">
                                        <img src={pd.images} className="img-fluid w-20 " alt="" />
                                    </div>
                                    <div className="col-sm">
                                        <p className=" font-bold justify-text text-start ">{(pd.name)}</p>
                                    </div>
                                </td>
                                <td>
                                    <span id="spnUnitPrice">
                                        <span class="sp_currencysyb mx-1">৳</span>
                                        <span class="sp_amt">{pd.price}</span>
                                    </span>
                                </td>
                                <td>{pd.quantity}</td>
                                <td> <span id="spnUnitPrice"><span class="sp_currencysyb">৳</span> <span class="sp_amt">{pd.price}</span></span></td>
                                <td className="text-center ">
                                    <button onClick={() => {
                                        handlecart(pd)
                                        setButtonText("Added");
                                        setTimeout(() => {
                                            setButtonText("+Add");
                                        }, 1000);
                                    }} className="btn bg-green-600 rounded-full text-white mx-2">{buttonText}</button>

                                    <button
                                        onClick={() => {
                                            handleDcart(pd)
                                            setButtonText2("Deleted");
                                            setTimeout(() => {
                                                setButtonText2("-Delete");
                                            }, 1000);
                                        }}
                                        className="btn bg-green-600 rounded-full text-white ">{buttonText2}</button>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className="col-sm-2 border-l">
                    <Cart cart={cart} setCart={setCart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default OrderInventory;
