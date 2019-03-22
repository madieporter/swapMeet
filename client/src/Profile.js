import React from 'react';
import { withServices } from './ServiceProvider';

class Profile extends React.Component {

  render() {
    const currentService = this.props.services.find(service => service._id === this.props.match.params._id)
    let { maxCost, minCost, service, serviceType, swapper } = currentService;
    console.log(currentService)
    let { businessName, city, email, firstName, lastName, phoneNumber, serviceDescription, state } = swapper
  

    return (
      <>

        <div>{service}</div>
        <div>{serviceType}</div>
        <div>Cost Range: ${minCost} - ${maxCost}</div>
        <div>{businessName}</div>
        <div>{city}, {state}</div>
        <div>{firstName} {lastName}</div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{serviceDescription}</div>
      </>
    );

  }
};
export default withServices(Profile);