import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
import UserProfile from './UserProfile'

import { Switch, Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile/:_id' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/userprofile/:username' component={UserProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
