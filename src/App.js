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
          
        </Switch>
    </Router>

  );
}

export default App;
