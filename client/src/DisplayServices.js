import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {withServices} from './ServiceProvider'

import "./DisplayServices.css";

import Auto from "./images/auto.png";
import Crafts from "./images/crafts.png";
import Education from "./images/education.png";
import Events from "./images/events.png";
import ResAndComerc from "./images/resandcomerc.png";
import Wellness from "./images/wellness.png";

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
    let result = this.props.result;
    let img = ''
    if (serviceType === "auto") {
      img = Auto
    } else if (serviceType === "Crafts") {
      img = Crafts
    } else if (serviceType === "Education") {
      img = Education
    } else if (serviceType === "Events") {
      img = Events
    } else if (serviceType === "home") {
      img = ResAndComerc
    } else if (serviceType === "Wellness") {
      img = Wellness
    }

    return (
      <>
        <div className="searchCard" onClick={this.toProfile}>
          <div className="serviceType">{serviceType}</div><br></br>
          <img src={img} alt=""/>
          <div className="bisName">{businessName}</div>
          <div className="swapperName">Swapper: {firstName} {lastName}</div>
          <div className="specialty">Specialty: {service}</div>
          <div className="price">Price Range: ${minCost} - ${maxCost}</div>
          <div className="location">Location: {city}, {state}</div>
        </div>
      </>
    )
  }
}


export default withRouter(withServices(DisplayServices));

