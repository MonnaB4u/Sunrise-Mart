import React from 'react';
import { useParams } from 'react-router-dom';
import Nav1 from '../Navbar/Nav1';
import Sidebar2 from '../Sidebar/Sidebar2';
import PaymentMain from './PaymentMain';
const Payment = (props) => {
const cart=props

    return (
        <div>
            <Nav1></Nav1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <Sidebar2></Sidebar2>
                    </div>
                    <div className="col-sm-8">
                        <PaymentMain cart={cart}></PaymentMain>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
