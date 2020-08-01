import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import PlacesList from './components/PlacesList';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route exact path="/list" render={(props) => <PlacesList {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
