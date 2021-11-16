import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        axios.post('https://obscure-plains-97206.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Product added successfully !');
                reset();
            }
        })

    };
    return (
        <div>
            <h2>Add Product</h2>
            <div className="add-package-form container mb-5">
            <h4>Package Details Form</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" {...register("name")} />
                    <input placeholder="Description" {...register("description")} />
                    <input placeholder="Price" type="number" {...register("price")} />
                    <input  placeholder="Image Url" {...register("image")} />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;