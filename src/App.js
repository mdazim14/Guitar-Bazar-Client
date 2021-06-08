import logo from './logo.svg';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';


const App=() => {
  return (
      
      <Router>
        
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
