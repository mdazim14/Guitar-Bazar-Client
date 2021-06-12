import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './ManageProduct.css';
const ManageProduct = (props) => {
    // const history = useHistory(); 
    // const { price, wight } = props.products;

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://warm-reaches-72966.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleteProduct = (id) => {
        fetch(`https://warm-reaches-72966.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {

        })
    }

    return (
        <div>
            <h1>Manage Product :</h1>
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