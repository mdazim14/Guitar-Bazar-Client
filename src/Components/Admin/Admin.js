import React from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Admin = () => {
    return (
        <div className="d-flex justify-content-start align-items-start">
            <Router>
                <div className=" d-flex flex-column col-2 border border-danger" style={{ height: '100vh', backgroundColor: 'brown' }}>
                    <Link className="text-white font-weight-bold p-3" to='/manageProduct'>Manage Product</Link>
                    <Link className="text-white font-weight-bold p-3" to='/addProduct'>Add Product</Link>
                    <Link className="text-white font-weight-bold p-3" to=''>Edit Product</Link>
                </div>

                <div className="col-9">

                    <Switch>
                        <Route path="/admin">
                        <ManageProduct></ManageProduct>

                        </Route>
                        <Route path="/addProduct">
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path="/manageProduct">
                            <ManageProduct></ManageProduct>
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>
    );
};

export default Admin;