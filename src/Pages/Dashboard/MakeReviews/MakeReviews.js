import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './MakeReviews.css';

const MakeReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user}= useAuth();
    
    const onSubmit = data => {
        console.log(data)
        axios.post('https://obscure-plains-97206.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Review given successfully !');
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
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email")} />
                    <input placeholder="Ratings (0-5)" type="number" {...register("rating")} />
                    <input  placeholder="Remarks" {...register("remark")} />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeReviews;