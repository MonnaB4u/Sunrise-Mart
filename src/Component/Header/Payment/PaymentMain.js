import React, { useContext, useState } from 'react';
import './Payment.css'
import data from '../../Data/index2'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const PaymentMain = (props) => {
    const cart = props
    const bigata = cart.cart.cart
    console.log(bigata)
    const { conID } = useParams()
    const finddata = bigata.find(pd => pd._id.toString() === conID)
    var total = bigata.map(bill => bill.price).reduce((total, product) => product + total);

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

    const [order, setOrder] = useState([])
    const [cNumber, setCnumner] = useState([])
    const [date, setDate] = useState([])
    const [cvCode, setCvvCode] = useState([])
    // const [name, setName] = useState([])
    // const [price, setPrice] = useState([])
    const [location, setlocation] = useState([])
    const [cardName, setCardname] = useState([])
    const [ownerName, setownerName] = useState([])

    const hCnumner = (e) => {
        setCnumner(e.target.value)
    }
    const hsetDate = (e) => {
        setDate(e.target.value)
    }
    const hsetCvvCode = (e) => {
        setCvvCode(e.target.value)
    }

    const hsetCardname = (e) => {
        setCardname(e.target.value)
    }

    const hsetlocation = (e) => {
        setlocation(e.target.value)
    }

    const hsetownerName = (e) => {
        setownerName(e.target.value)
    }

    const hsetOrder = (e) => {
        e.preventDefault();
        setOrder([...order, { date: date, owner: ownerName, price: grandTotal, pname: finddata.name, cardNum: cNumber, cvCode: cvCode, location: location, cardName: cardName }])
        &&
        fetch('https://nameless-shelf-98595.herokuapp.com/ordersInsert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([...order, { date: date, owner: ownerName, price: grandTotal, pname: finddata.name, cardNum: cNumber, cvCode: cvCode, location: location, cardName: cardName }])
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Items Inserted Successfully')
                }
            })
    }
    // navigate(`orderSucess/${finddata.id}`)
    console.log(order)
    const navigate = useNavigate()
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);

    const [od, setOd] = useState([])


    const clicks = () => {

        fetch('https://nameless-shelf-98595.herokuapp.com/ordersInsert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([order])
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Items Inserted Successfully')
                }
            })
    }




    return (
        <div>
            <div class="container my-4 flex text-center m-3">
                <div class="row">
                    <div class="col-lg-4 mb-lg-0 mb-3">

                        <div class="cardx p-3">
                            <div class="img-box w-25"> <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" /> </div>
                            <div class="number"> <label class="fw-bold" for="">**** **** **** 1060</label> </div>
                        </div>

                    </div>

                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="cardx p-3">
                            <div class="img-box w-25"> <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png" alt="" /> </div>
                            <div class="number"> <label class="fw-bold">**** **** **** 1060</label> </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="cardx p-3">
                            <div class="img-box w-25"> <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png" alt="" /> </div>
                            <div class="number"> <label class="fw-bold">**** **** **** 1060</label> </div>
                        </div>
                    </div>

                    <div class="col-12 mt-4">
                        <div class="card p-3">
                            <p class="mb-0 fw-bold h4">Payment Methods</p>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card p-3">
                            <div class="card-body border p-0">

                                <div class="collapse show p-3 pt-0" id="collapseExample">
                                    <form action="" class="form mt-2" onSubmit={hsetOrder}>
                                        <div class="row">

                                            <div class="col-lg-5 mb-lg-0 mb-3">
                                                <p class="h4 mb-0">Summary</p>
                                                <p class="mb-0"><span class="fw-bold">Product Name:</span><span class="c-green" > {(finddata.name)} </span> </p>
                                                <p class="mb-0"> <span class="fw-bold">Main Price:</span> <span class="c-green" >: ${finddata.price} </span> </p>
                                                <p class="mb-0"> <span class="fw-bold">You have ordered: {bigata.length} </span> <span class="c-green" >: ${total} </span> </p>
                                                <p class="mb-0"> <span class="fw-bold">Shipping Price:</span> <span class="c-green" >: ${shipping}</span> </p>
                                                <p class="mb-0 border-bottom"> <span class="fw-bold">Tax Price:</span> <span class="c-green">: ${tax}</span> </p>
                                                <p class="mb-0"> <span class="fw-bold">Toal Price:</span> <span class="c-green">: ${grandTotal}</span> </p>
                                                <p class="mb-0 justify-text text-start">Upon receipt of your order, the services will be performed to you in accordance with the terms applicable to the services that you purchased. The nature of the services you purchased and the date of your purchase may impact the timing of the performance of the services. The services will be deemed to be successfully delivered to you upon the performance of the services</p>
                                            </div>

                                            <div class="col-lg-7">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form__div"> <input type="number" class="form-control" placeholder=" " value={cNumber} onChange={hCnumner} required /> <label for="" class="form__label">Card Number</label> </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form__div"> <input type="date" class="form-control" placeholder=" " value={date} onChange={hsetDate} required />  </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form__div"> <input type="password" class="form-control" placeholder=" " value={cvCode} onChange={hsetCvvCode} required /> <label for="" class="form__label">cvv code</label> </div>
                                                    </div>

                                                    <div class="col-9  form__div" >
                                                        <select value={cardName} onChange={hsetCardname} class="form-select" aria-label="Default select example" required>
                                                            <option selected>Open this select menu</option>
                                                            <option value="Visa" >Visa</option>
                                                            <option value="Master Card" >Master Card</option>
                                                            <option value="Discover" >Discover</option>
                                                        </select>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="form__div"> <input type="text" class="form-control" placeholder={loggedInuser.name} value={ownerName} onChange={hsetownerName} /> <label for="" class="form__label">Full Name Recipent</label> </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form__div"> <input type="text" class="form-control" placeholder=" " value={location} onChange={hsetlocation} /> <label for="" class="form__label">Set Your Location</label> </div>
                                                    </div>
                                                    <div class="col-12">

                                                        {
                                                            order.length < 1 ?
                                                                <button class="btn sbtn border rounded-full w-75 text-white bg-sky-700" type="submit">Submit </button>
                                                                :
                                                                <button style={{ display: "none" }} class="btn sbtn border rounded-full w-75 text-white bg-sky-700" type="submit">Submit </button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <div className="">
                            <div className="col-sm-">
                                {order.length === 0 ?
                                    <div className="text-center border my-3">
                                        <p className="h3">Oder Grand Summery </p>
                                    </div>


                                    :

                                    <div className="row flex text-center" >
                                        {
                                            order.map((each, i) =>

                                                <>
                                                    <div class=" mb-3 border my-3">
                                                        <div className="p-3">
                                                            <p class="h4 mb-0">{each.date} </p>
                                                            <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green" > {each.pname} </span> </p>
                                                            <p class="mb-0"> <span class="fw-bold">Total Price:</span> <span class="c-green" >: ${each.price}</span> </p>
                                                            <p class="mb-0 "> <span class="fw-bold">Card: number</span> <span class="c-green">: ${each.cardNum}</span> </p>
                                                            <p class="mb-0"> <span class="fw-bold">Cvv Code:</span> <span class="c-green">: ${each.cvCode}</span> </p>
                                                            <p class="mb-0"> <span class="fw-bold">Bank Card Name:</span> <span class="c-green">: ${each.cardName}</span> </p>
                                                            <p class="mb-0"> <span class="fw-bold">Recipent Name:</span> <span class="c-green">: ${each.owner}</span> </p>
                                                            <p class="mb-0"> <span class="fw-bold">Location :</span> <span class="c-green">: ${each.location}</span> </p>
                                                            <button onClick={clicks} class="btn sbtn border rounded-full text-white bg-sky-700" type="submit">Confirm Order </button>

                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        }
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PaymentMain;
