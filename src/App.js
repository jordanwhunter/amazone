import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StateProvider } from './contexts/StateContext';
import { AuthProvider } from './contexts/AuthContext';
import reducer, { initialState } from './reducer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PrivateRoute from './components/authentication/PrivateRoute';
import Header from './components/main/Header';
import Home from './components/main/Home';
import Checkout from './components/cart/Checkout';
import CheckoutProduct from './components/cart/CheckoutProduct';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Prime from './components/authentication/YourPrime';
import UpdateProfile from './components/authentication/UpdateProfile';
import ForgotPassword from './components/authentication/ForgotPassword';
import Payment from './components/processing/Payment';
// import Orders from './components/processing/Orders';

// Publishable Stripe test key to tokenize payment information (can't make the API call alone). 
const promise = loadStripe(`${process.env.REACT_APP_STRIPE_TEST_API_KEY}`);

function App() {
  return (
    <Router>
      <AuthProvider>
        <StateProvider 
          initialState={initialState}
          reducer={reducer}
        >
          <div className='app'>
            <Switch>
              {/* Authentication routes */}
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <PrivateRoute path='/your-prime' component={Prime} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />

              {/* Main page route */}
              <Route exact path='/'>
                <Header />
                <Home />
              </Route>

              {/* Checkout route */}
              <Route path='/checkout'>
                <Header />
                <Checkout />
                <CheckoutProduct />
              </Route>

              {/* Payment processing routes */}
              <Elements stripe={promise}>
                <PrivateRoute path='/payment' component={Payment}/>
              </Elements>
              {/* <Route path='/orders' component={Orders}/> */}
            </Switch> 
          </div>
        </StateProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
