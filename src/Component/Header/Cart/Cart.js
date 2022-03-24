import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Cart = (props) => {

   const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if (total >= 200) {
        shipping = 0;
    } else if (total >= 100) {
        shipping = 50;
    } else if (total >= 150) {
        shipping = 20;
    }

    const tax = (total / 10).toFixed(2)
    const grandTotals = (total + shipping + Number(tax))
    const grandTotal = grandTotals.toFixed(2)

    const { ID } = useParams();
    const findId = cart.find(product => product._id.toString() === ID)
    const navigation = useNavigate()

    const handlePd = () => {
        if (cart.length === 0) {
            alert("Please Add to Cart First Before Confirm You Order ")
        } else {
            navigation(`/orderConfirm/${findId._id}`)

        }
    }

    return (
        <div className="mr-4 mt-5">
            <div className="row">
                <small className="h6 font-bold textcolor">{cart.length}</small>
                <div className="col-sm ">
                    <small className="font-bold">Product Price: </small>
                </div>
                <div className="col-sm  ">
                    <p className="text-end ">${total}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <small className="font-bold">Shipping Cost:</small>
                </div>
                <div className="col-sm ">
                    <p className="text-end ">${shipping}</p>
                </div>
            </div>
            <div className="row border-bottom ">
                <div className="col-sm ">
                    <small className="font-bold">Tax+Vat: </small>
                </div>
                <div className="col-sm  ">
                    <p className="text-end ">${tax}%</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm ">
                    <small className="font-bold">Total Price: </small>
                </div>
                <div className="col-sm  ">
                    <p className="text-end ">${grandTotal}</p>
                </div>
            </div>
            <div className="text-center my-3">
                <button onClick={() => handlePd()} className="btn border text-white bg-sky-700 rounded-full">Order Procedure</button>

            </div>
            <div className="mt-5 border-top"></div>
        </div>
    );
};

export default Cart;
