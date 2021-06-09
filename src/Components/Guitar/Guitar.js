import React from 'react';
import './Guitar.css';

const Guitar = (props) => {
    const { name, imageURL, price, wight } = props.product;
    return (

        <div className=" mainBoxdiv container">

            {/* <div className="imgStyle">
                <img style={{ width: "100%"}} src={imageURL} alt="" />
            </div>
            <div className="d-flex">
                <h5 className="m-3">Name: {name}</h5>
                <h5 className="m-3">price: {price}</h5>
            </div> */}


            <div class="card m-4 p-2" style={{width: "18rem"}}>
                <img class="card-img-top border border-danger" src={imageURL} />
                <div class="card-body d-flex bg-warning">
                    <h6 class="card-title mr-5">{name}</h6>
                    <h6 class="card-text">Price: {price}</h6>
                </div>
            </div>
        </div>
    );
};

export default Guitar;