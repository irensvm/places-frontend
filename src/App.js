import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import EditPlace from './components/EditPlace';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route path='/edit/:id' render={(props) => <EditPlace {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
