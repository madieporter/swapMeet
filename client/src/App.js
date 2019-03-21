import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'

import { Switch, Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile/:_id' component={Profile} />
       </Switch>
      </div>
    );
  }
}

export default App;
