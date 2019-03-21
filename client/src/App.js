import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import NavBar from "./NavBar";
import Home from "./Home.js";
import Auto from "./Auto.js";
import Crafts from "./Crafts.js";
import Education from "./Education";
import Events from "./Events";
import ResidentialandCommercial from "./ResidentialAndCommercial";
import Wellness from "./Wellness";



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

       <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path="/auto" component={Auto}/>
          <Route path="/crafts" component={Crafts}/>
          <Route path="/education" component={Education}/>
          <Route path="/events" component={Events}/>
          <Route path="/residentialandcommercial" component={ResidentialandCommercial}/>
          <Route path="/wellness" component={Wellness}/>
       </Switch>
      </div>
    );
  }
}

export default App;
