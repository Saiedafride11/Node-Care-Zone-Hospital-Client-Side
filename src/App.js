import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/appointment">
                  <Appointment></Appointment>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
