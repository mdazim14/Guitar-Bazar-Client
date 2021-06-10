import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
const ManageProduct = (props) => {
    // const { price, wight } = props.products;

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleteProduct = (id) => {
        console.log(id)
        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log("deleted successfully")
        })

    }

    return (
        <div>

            <div className=" m-5">
                <ul className="manageProduct text-white">
                    {
                        products.map(product => <li>
                            <div className="d-flex m-3 bg-info">
                                <h5 className="p-3 w-50">Name: {product.name} </h5>
                                <h5 className=" p-3 mr-auto">price: {product.price} $</h5>
                                <button onClick={ () => deleteProduct(product._id)} className=" btn ml-auto btn-danger"> Delete </button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>





        </div>

    );
};

export default ManageProduct;