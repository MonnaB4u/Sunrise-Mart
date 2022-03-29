import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const Orders = () => {
    const [pd, setData] = useState([])
    // const { ID } = useParams()
    // const [urls, setUrl] = useState()
console.log(pd)
    useEffect(() => {
        const url = `https://nameless-shelf-98595.herokuapp.com/order`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    // const [buttonText, setButtonText] = useState("+Add");
    // const [buttonText2, setButtonText2] = useState("-Delete");
    return (
        <div>
            <div className="">
                <div className="row">
                    <AdminNav></AdminNav>
                    <div className="col-sm-2">

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
                                    <td className="" >{ }</td>
                                    <td className="row">
                                        <div className="col-sm border">
                                            <img src={pd.owner} className="img-fluid w-20 " alt="" />
                                        </div>
                                        <div className="col-sm">
                                            <p className=" font-bold justify-text text-start ">{pd.owner}</p>
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

                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Orders;
