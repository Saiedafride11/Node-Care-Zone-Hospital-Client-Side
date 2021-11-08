import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';

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
              <Route path="/login">
                  <Login></Login>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
