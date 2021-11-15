import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const {p_id} = useParams();
    const [product, setProduct] = useState([]);
    const {name, image, price, description} = product;
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const orderedProduct = product;
        data.status = "Pending";
        data.order = orderedProduct;

        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
                alert("Ordered placed successfully !")
                reset();
            }
        })

    };

    const url = `http://localhost:5000/products/${p_id}`

    useEffect( ()=> {
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));
    },[url])

    return (
        <div>
            <h2 className="  my-5">Purchase Product</h2>
                <div className="container">
                        <div className="row">
                            <div className="col col-lg-6"> 
                                <div className="mb-3 row full-container">
                                    <div>
                                        <img className="img-fluid" src={image} alt="" />
                                    </div>
                                    <div className="my-5">
                                        <h4>Product Name: {name}</h4>
                                        <h5>Details: {description}</h5>
                                        <h5>Price: <strong>${price}</strong></h5>
                                        <br /><br />
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 order-form mb-3 row ">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h5 className="pb-3">Fill Up the Form</h5>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input defaultValue={user.displayName} {...register("name")} />
                                    <input defaultValue={user.email} {...register("email")} />
                                    <input placeholder="Address" {...register("address")} />
                                    <input placeholder="Phone" {...register("Phone")} />
                                    
                                    <input className="btn btn-primary" type="submit" />
                                    </form>
                            </div>
                       </div>
                </div>
        </div>
    );
};

export default Purchase;