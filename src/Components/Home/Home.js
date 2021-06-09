import React, { useEffect, useState } from 'react';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className="">
            <h1>now we will do map for products</h1> 
        </div>
    );
};

export default Home;