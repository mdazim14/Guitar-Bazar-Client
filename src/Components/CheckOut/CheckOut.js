import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import {userContext} from '../../App';
 
 
const CheckOut = () => {
    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const { _id } = useParams();
    // console.log("this id ID", _id);
    const [guitar, setGuitar] = useState([]);

    useEffect(() => {
        fetch(`https://warm-reaches-72966.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => setGuitar(data));
    }, [_id]);

    const singleData = guitar.find(guitars => guitars._id === _id);
    const email = loggedInUser.email ;
    const  handleCheckOut = () => {
        const oderDetails = { email, Product: singleData};

        fetch(`https://warm-reaches-72966.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(oderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Order Placed successfully');
                history.push('/home');

            }
        })
    }

    return (
        <div>

            <h1>Check Out</h1>
            <div className="border border-danger w-75 m-auto pb-3">
                <div className="d-flex justify-content-around container ">
                    <div className="">
                        <h4 className="m-5 p-2 bg-warning">Description</h4>
                        <h4 className="ml-5">{singleData?.name}</h4>
                        <h4 className="m-5">Total Price =</h4>

                    </div>

                    <div className=" ml-5">
                        <h4 className="m-5 p-2 bg-warning">Quantity</h4>
                        <h4 className="ml-5">01</h4>
                    </div>

                    <div className=" ml-5">
                        <h4 className="m-5 p-2 bg-warning">Price</h4>
                        <h4 className="m-5">{singleData?.price} $</h4>
                        <h4 className="m-5" type="">{singleData?.price} $</h4>
                    </div>
                </div>
                <button onClick={()=>{handleCheckOut()}} className="d-flex justify-content-center m-auto btn btn-primary w-25" type=""> Checkout </button>

            </div>
        </div>
    );
};

export default CheckOut;