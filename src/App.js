import logo from './logo.svg';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import AddProduct from './Components/AddProduct/AddProduct';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import ManageProduct from './Components/Guitar/ManageProduct/ManageProduct';

const App=() => {
  return (
      
      <Router>
        
        <Header></Header>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/addProduct">
            <AddProduct />
          </Route>

          <Route path="/manageProduct">
            <ManageProduct />
          </Route>

          <Route path="/orders">
            <Orders />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
    </Router>

  );
}

export default App;
