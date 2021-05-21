import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51IdXMFSCvOGSJ1OEohig097OgiqNZsGYC7PsxfUa7tyVbA7WNTRaXnBn9Bo9JYF6LKazL5rRPrNLsAbSKipYIUEK00NTmU25DO");


function App() {
  const [{cart}, dispatch] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log("User is ", authUser);

        if(authUser){
          // user just logged in / user was logged in
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        }else{
          // user is logged out
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
