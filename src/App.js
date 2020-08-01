import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import CustomNavbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
