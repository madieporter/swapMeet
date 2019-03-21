import React from 'react';
import Profile from './Profile'

import React, { Component } from 'react'

export default class DisplayServices extends Component {
  constructor() {
    super()

  }

  //function to go to profile. send results to function
  // () => {<Profile result={this.props.result}
  //
  render() {
    let { minCost, maxCost, service, serviceType } = props.result
    let { firstName, lastName, businessName, city, state } = props.result.swapper[0]
    let result = props.result
    return (
      <div onClick={}>
      <div>{serviceType}</div>
      <div>{service}</div>
      <div>{firstName} {lastName}</div>
      <div>{minCost}-{maxCost}</div>
      <div>{businessName}</div>
      <div>{city}, {state}</div>
    </div>
    )
  }
}


// sunny
// every prop in its own div (except f/l name, cost)
// profile comp shows everything (except id, v)
// on click on parent div, set props in thing

// img service type ternary
