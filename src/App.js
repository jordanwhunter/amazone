import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/main/Header';
import Home from './components/main/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>Hello world! I'm testing output for the Checkout component.</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
};

export default App;
