import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StateProvider } from './contexts/StateContext';
import reducer, { initialState } from './reducer';
import Header from './components/main/Header';
import Home from './components/main/Home';
import Checkout from './components/cart/Checkout';
import CheckoutProduct from './components/cart/CheckoutProduct';
import Login from './components/authentication/Login';

function App() {
  return (
    <Router>
      <StateProvider 
        initialState={initialState}
        reducer={reducer}
      >
        <div className='app'>
          <Switch>
            {/* Authentication routes */}
            <Route path='/login' component={Login} />

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
          </Switch> 
        </div>
      </StateProvider>
    </Router>
  );
};

export default App;
