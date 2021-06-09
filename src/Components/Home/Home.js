import React, { useEffect, useState } from 'react';
import Guitar from '../Guitar/Guitar';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="">
            {
                products.map(product => <Guitar key={product._id} product={product} > </Guitar>)
            }
        </div>
    );
};

export default Home;