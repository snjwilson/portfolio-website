import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';

const history = createMemoryHistory();

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
