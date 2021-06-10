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
             products.length === 0 &&  <div class="d-flex justify-content-center mt-5">
             <div class="spinner-border " role="status">
               <span class="sr-only">Loading...</span>
             </div>
           </div>
            }
            <div className="d-flex m-5 border border-danger">
            {
                products.map(product => <Guitar key={product._id} product={product} > </Guitar>)
            }
            </div>
            
           
        </div>
    );
};

export default Home;