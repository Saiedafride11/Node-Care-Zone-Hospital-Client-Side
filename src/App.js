import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/appointment">
                        <Appointment></Appointment>
                    </PrivateRoute>
                    <PrivateRoute path="/dashBoard">
                        <DashBoard></DashBoard>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
