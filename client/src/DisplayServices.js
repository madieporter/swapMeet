import React, { Component } from 'react'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import {withServices} from './ServiceProvider'

class DisplayServices extends Component {
  componentDidMount(){
    this.props.getServices()
  }

  toProfile = () => {
    this.props.history.push(`/profile/${this.props.result._id}`)
  }

  render() {
    let { minCost, maxCost, service, serviceType } = this.props.result
    let { firstName, lastName, businessName, city, state } = this.props.result.swapper
    let result = this.props.result
    return (
      <div onClick={this.toProfile} style={{border: "5px black solid"}}>
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


export default withRouter(withServices(DisplayServices));

// profile comp shows everything (except id, v)
// on click on parent div, set props in function

// img service type ternary
