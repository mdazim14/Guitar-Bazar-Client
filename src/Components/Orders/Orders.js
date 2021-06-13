import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import {userContext} from '../../App';
import './Orders.css';

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    useEffect(() => {
        fetch(`http://localhost:5055/allOrder?email=${loggedInUser.email}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [loggedInUser]);

    return (
        <div>
            <h3 className="email-design">Your Email : {order[0]?.email}</h3>
                <hr></hr>
                <h5 style={{textAlign:'center'}}>Your Ordered Items</h5>
                <hr></hr>
                <div className="tableHead">
                    <h4 className="w-25 ml-auto">Name</h4>
                    <h4 className="w-25 ml-auto">Price</h4>
                    <h4 className="w-25 ml-auto">Buying Date</h4>
                </div>

                {
                  // eslint-disable-next-line array-callback-return
                  order.map(orders => {
                        const orderedItems = orders.Product;
                        //  console.log(orderedItems);
                        if(orders!==null){
                            return(
                                <div className="tableRows">
                                  <h6 className="w-25 ml-auto"> {orderedItems.name}</h6>
                                  <h6 className="w-25 ml-auto">{orderedItems.price}$</h6>
                                  <h6 className="w-25 ml-auto">13/06/2021</h6>
                              </div>
                          )
                        }
                  })
                
                  }


            
        </div>
    );
};

export default Orders;