import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const addData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price,
            wight: data.wight
        };
        const url = `http://localhost:5055/addData`;

        fetch( url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
        .then(res => console.log('server site response', res))

    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f27839f08225b36317aef128553ae1bc');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });



        
    }
    return (
        <div>
            <form className="border border-danger p-5 m-2"  onSubmit={handleSubmit(onSubmit)}>
                <h5>Product Name</h5>
                <input defaultValue="Enter Name" type="text" {...register("name")} />
                <br></br>
                <br></br>
                <h5>Add Price</h5>
                <input defaultValue="Enter Price" type="text"{...register("price")} />
                <br></br>
                <br></br>
                <h5>Wight</h5>
                <input defaultValue="Enter Name" type="text" {...register("wight")} />
                <br></br>
                <br></br>
                <input type="file" onChange={handleImageUpload} {...register} />
                <br></br>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;