import React, { Component } from 'react';
import './App.css';
import Home from './Home'

import { Switch, Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
        <Home />
       <Switch>

       </Switch>
      </div>
    );
  }
}

export default App;
