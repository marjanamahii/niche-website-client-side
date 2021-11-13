import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://rocky-badlands-36902.herokuapp.com/addservice', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form className='addService' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Name' />
                <input {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Image' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input type="submit" />
            </form>
        </div>
    );
};


export default AddProduct;