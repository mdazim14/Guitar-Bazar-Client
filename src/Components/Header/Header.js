import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './Header.css';

const Header = () => {
    return (

            <Navbar className="pl-5 pr-5" collapseOnSelect expand="lg" bg="info">
                <Navbar.Brand className="bg-dark text-info rounded p-2 font-weight-bold" to="#home">Guitar Bazar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link mr-5 p-3 bg-warning rounded font-weight-bold text-dark" to="/home">Home</Link>
                        <Link className="nav-link mr-5 ml-5 p-3 bg-warning rounded font-weight-bold text-dark" to="">Orders</Link>
                    </Nav>
                    <Nav className="pr-5">
                        <Link className="nav-link mr-5 ml-5 p-3 bg-warning rounded font-weight-bold text-dark" to="">Admin</Link>

                        <Link className="nav-link bg-warning text-white mr-5 ml-5 p-3 bg-dark rounded font-weight-bold text-white" to="/login">
                            Login
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


    );
};

export default Header;