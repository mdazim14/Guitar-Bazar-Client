import React from 'react';
import './Guitar.css';
import {Card} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Guitar = (props) => {
    const { name, imageURL, price, wight, _id } = props.product;
    return (

    <Card className="m-1 w-50">
    <Card.Img variant="top" style={{ height: '300px'}} src={imageURL} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      Price: {price} $
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link  to={`/checkOut/${_id}`}><button className=" w-100 btn btn-primary" type="">
        Buy</button>
    </Link>
    </Card.Footer>
  </Card>








        // <div className=" mainBoxdiv  m-2">
        //     <div className="imgStyle">
        //         <img style={{ width: "100%" }} src={imageURL} alt=""/>

        //         <div className="d-flex bg-warning">
        //             <h5 className="m-3">Name: {name}</h5>
        //             <h5 className="m-3">price: {price}</h5>

                    
        //         </div>
        //     </div>
        // </div>





    );
};

export default Guitar;