import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StateProvider } from './contexts/StateContext';
import reducer, { initialState } from './reducer';
import Header from './components/main/Header';
import Home from './components/main/Home';
import Checkout from './components/cart/Checkout';

function App() {
  return (
    <Router>
      <StateProvider 
        initialState={initialState}
        reducer={reducer}
      >
        <div className='app'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
          </Switch> 
        </div>
      </StateProvider>
    </Router>
  );
};

export default App;
