import React from 'react';
import { withServices } from './ServiceProvider';

class Profile extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentService: {
        minCost: "",
        maxCost: "",
        service: "",
        serviceType: "",
        swapper: []
      }
    }
  }

  componentDidMount() {
    const currentService = this.props.services.find(service => service._id === this.props.match.params._id)
    this.setState({
      currentService
    })
  }

  render() {
    console.log(this.state.currentService)
    let { maxCost, minCost, service, serviceType } = this.state.currentService;
    const mappedSwapper = this.state.currentService.swapper.map(swap => {
     let { businessName, city, email, firstName, lastName, phoneNumber, serviceDescription, state } = swap
     return (
      <>
        <div>{businessName}</div>
        <div>{city}, {state}</div>
        <div>{firstName} {lastName}</div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{serviceDescription}</div>
      </>
    
     )


    })

    return (
      <div>
        <div>{service}</div>
        <div>{serviceType}</div>
        <div>Cost Range: ${minCost} - ${maxCost}</div>
        {mappedSwapper}
      </div>
    );

  }
};
console.log("nothing")
export default withServices(Profile);