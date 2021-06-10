import React from 'react';
import './Guitar.css';

const Guitar = (props) => {
    const { name, imageURL, price, wight } = props.product;
    return (
        <div className=" mainBoxdiv container m-2">
            <div className="imgStyle">
                <img style={{ width: "100%" }} src={imageURL} alt="" />

                <div className="d-flex bg-warning">
                    <h5 className="m-3">Name: {name}</h5>
                    <h5 className="m-3">price: {price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Guitar;