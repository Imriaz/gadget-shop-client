import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AdminProducts = () => {
    const { register, handleSubmit, formState: { errors }, resetField, setValue } = useForm({ 
        mode: "onChange",
        defaultValues: {
            title: "",
            price: "",
            stock: "",
            imageUrl: ""
        }
    });

    const onSubmit = data => {
        // reset Field
        resetField('title');
        resetField('price');
        resetField('description');
        resetField('imageUrl');

        addProduct(data);
    }

    const addProduct = data => {
        fetch('http://localhost:5000/admin/add-product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <form className='form__style' onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Product</h2>
                <label>Title</label><br />
                <input className='input__field' {...register('title', { 
                    required: true
                })} /><br />

                <label>Price</label><br />
                <input className='input__field' {...register('price', { 
                    required: true
                })} /><br />

                <label>Description</label><br />
                <input className='input__field' {...register('description', { 
                    required: true
                    })} /><br />

                <label>Image URL</label><br />
                <input className='input__field' {...register('imageUrl', { 
                    required: true 
                    })} /><br />

                <input className='submit' type="submit" />
            </form>
        </div>
    );
};

export default AdminProducts;