import React from 'react';
import { withServices } from './ServiceProvider';

class Profile extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentService: {
        maxCost: 0
      }
    }
  }

  componentDidMount() {
    // this.props.getServices()
    // console.log(this.props)
    const currentService = this.props.services.find(service => service._id === this.props.match.params._id)
    this.setState({
      currentService
    })
  }

  // componentDidMount() {
  //   this.props.getServices().then(() => {
  //     // console.log(this.props)
  //     const currentService = this.props.services.find(service => service._id === this.props.match.params._id)
  //     this.setState({
  //       currentService
  //     })

  //   })
  // }
  render() {
    console.log(this.state.currentService)

    // console.log(this.state)
    // console.log(this.state.currentService.maxCost)
    // let { maxCost, minCost, service, serviceType } = this.state.currentService
    return (
      <div>
       {/* <div>{service}</div>
       <div>{serviceType}</div> */}
       {/* <div>{minCost} - {maxCost}</div> */}
      </div>
    );

  }
};

export default withServices(Profile);