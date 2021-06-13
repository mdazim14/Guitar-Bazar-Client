import React, { useEffect, useState } from 'react';
import Guitar from '../Guitar/Guitar';
import {CardColumns} from 'react-bootstrap';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://warm-reaches-72966.herokuapp.com/products')
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
            <CardColumns>
            {
                products.map(product => <Guitar key={product._id} product={product} > </Guitar>)
            }
            </CardColumns>
            
           
        </div>
    );
};

export default Home;