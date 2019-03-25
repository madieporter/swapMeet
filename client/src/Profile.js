import React from 'react';
import { withServices } from './ServiceProvider';

import "./Profile.css";

import Auto from "./images/auto.png";
import Crafts from "./images/crafts.png";
import Education from "./images/education.png";
import Events from "./images/events.png";
import ResAndComerc from "./images/resandcomerc.png";
import Wellness from "./images/wellness.png";

class Profile extends React.Component {

  render() {
    const currentService = this.props.services.find(service => service._id === this.props.match.params._id);
    let { maxCost, minCost, service, serviceType, swapper } = currentService;
    let { businessName, city, email, firstName, lastName, phoneNumber, serviceDescription, state } = swapper;
  
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
      <div className="profileContainer">
        
        <div className="profileSwapperName">{firstName} {lastName}</div>
        <div className="profileBisName">{businessName}</div>
        <img src={img} alt=""/>
        <div className="profileService">Specialty: {service}</div>
        <div className="profilePriceRange">Price Range: ${minCost} - ${maxCost}</div>
        <div className="profileDescription">{serviceDescription}</div><br></br>
        <div className="profileLocation">Location: {city}, {state}</div>
        <div className="profilePhoneNumber">{phoneNumber}</div>
        <div className="profileEmail">{email}</div>
        

        {/* <div>{businessName}</div>
        <div>{service}</div>
        <div>{serviceType}</div>
        <div>Cost Range: ${minCost} - ${maxCost}</div>
        <div>{city}, {state}</div>
        <div>{firstName} {lastName}</div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{serviceDescription}</div> */}
        {/* {this.props.token ?
          this.props.swapBucks
        :

        } */}
      </div>
    );

  }
};
export default withServices(Profile);