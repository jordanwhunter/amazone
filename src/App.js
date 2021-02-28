import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/main/Header';
import Home from './components/main/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <h1>Hello world! I'm testing output for the Checkout component.</h1>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
};

export default App;
