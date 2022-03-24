import React, { useRef } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import AlltopPD from './AlltopPD';

const TopSave = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const pImgRef = useRef();
    const typeRef = useRef();
    const quantityRef = useRef();

    const handleUser = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const images = pImgRef.current.value;
        const type = typeRef.current.value;
        const quantity = quantityRef.current.value;

        const newProject = { name, price, images, type, quantity }
        console.log(newProject);

        fetch('http://localhost:5000/topSaveInsert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProject)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Items Inserted Successfully')
                    e.target.reset() //for clear form input
                }
            })


        e.preventDefault();
    }
    return (
        <div>
            <AdminNav></AdminNav>
            <div className="container">
                <div className="row">

                    <div className="col-md-">
                        <div className='mt-5 p-5 text-center'>
                            <h2 className=""> Add Top Savers Product</h2>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="border-bottom w-25 text-bottom border-info"></div>
                            </div>
                            <form className='d-flex justify-content-center' action="" onSubmit={handleUser}>
                                {/* <input type="text" ref={nameRef} />
                            <input className="mx-5  " type="email" name='' ref={eamilRef} />
                            <input type="submit" value="Add" /> */}

                                <div class="row w-75">

                                    <div class="col-md mb-3">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Project Name" ref={nameRef} required />
                                        </div>
                                    </div>

                                    <div class="col-md- mb-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="price" id="price" placeholder="Product price" ref={priceRef} required />
                                        </div>
                                    </div>



                                    <div class="col-md-">
                                        <div class="form-group">
                                            <textarea class="form-control" name="type" rows="2" placeholder="Product Type" ref={typeRef} required></textarea>
                                        </div>
                                    </div>

                                    <div class="col-md- mt-3">
                                        <div class="form-group">
                                            <textarea class="form-control" name="quantity" rows="2" placeholder="product quantity" ref={quantityRef} required></textarea>
                                        </div>
                                    </div>

                                    <div class="col-md- mb-3">
                                        <div class="form-group">
                                            <input type="text" class="mt-3 form-control" name="images" id="images" placeholder="Product Image Link" ref={pImgRef} required />
                                        </div>
                                    </div>

                                    <div class="col-md- text-center">
                                        <button type="submit" class="btn bg-primary text-white mt-4">Send Project</button>
                                    </div>
                                </div>

                            </form>


                        </div>
                        <div className="my-5">
                            <AlltopPD></AlltopPD>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default TopSave;
