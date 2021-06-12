import logo from './logo.svg';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';
import { createContext, useState } from 'react';

export const userContext=createContext();


const App=() => {

  const [loggedInUser, setLoggedInUser] = useState([]); 
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
      <Router>
        <Header></Header>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/checkOut/:_id">
            <CheckOut />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
    </Router>
    </userContext.Provider>

  );
}

export default App;
