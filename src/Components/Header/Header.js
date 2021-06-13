import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './Header.css';
import { userContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { displayName, photoURL, email } = loggedInUser;


    console.log(loggedInUser);

    return (

        <Navbar className="pl-5 pr-5" collapseOnSelect expand="lg" bg="info">
            <Navbar.Brand className="bg-dark text-info rounded p-2 font-weight-bold" to="#home">Guitar Bazar</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link mr-5 ml-5 p-3 bg-warning rounded font-weight-bold text-dark" to="/home">Home</Link>
                    <Link className="nav-link mr-5 ml-5 p-3 bg-warning rounded font-weight-bold text-dark" to="/orders">Orders</Link>
                </Nav>
                <Nav className="">
                    <Link className="nav-link mr-5 ml-5 p-3 bg-warning rounded font-weight-bold text-dark" to="/admin">Admin</Link>

                    { 
                    displayName && <h6 className="nav-link pt-3  text-white  bg-danger rounded">{displayName}</h6> 
                    }

                    {displayName ? <Link className="nav-link mr-5 ml-5 p-3 bg-warning text-white  bg-dark rounded font-weight-bold" to="/login" onClick={() => setLoggedInUser({})}> Log Out </Link> :
                        <Link className="nav-link mr-5 ml-5 p-3 bg-warning bg-dark rounded font-weight-bold text-white" to="/login" >Login</Link>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default Header;