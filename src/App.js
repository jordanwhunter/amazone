import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/main/Header';
import Home from './components/main/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
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
