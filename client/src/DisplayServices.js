import React from 'react';

const DisplayServices = (props) => {
  let { minCost, maxCost, service, serviceType } = props.result
  let { firstName, lastName, businessName, city, state } = props.result.swapper[0]
  console.log(props.result)
  return (
    <div>
      <div>{serviceType}</div>
      <div>{service}</div>
      <div>{firstName} {lastName}</div>
      <div>{minCost}-{maxCost}</div>
      <div>{businessName}</div>
      <div>{city}, {state}</div>
    </div>
  )
}

export default DisplayServices;

// sunny
//every prop in its own div (except f/l name, cost)
// profile comp shows everything (except id, v)

// img service type ternary