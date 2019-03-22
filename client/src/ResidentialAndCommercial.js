import React from "react";
import { withServices } from './ServiceProvider';

class ResidentialAndCommercial extends React.Component {
	constructor() {
		super()
		this.state = {
				message: false,
				filteredServices: []
		}
	}
	
	toProfile = (_id) => {
		this.props.history.push(`/profile/${_id}`)
	}

	componentDidMount() {
		this.props.getServices()
		console.log(this.props.services)
		const filteredRAC = this.props.services.filter(service => {
			for(let k in service) {
				if(service[k].toString().search("home") === 0) {
					return true
				}
			}
		})
		if(filteredRAC.length > 0) {
			this.setState({
				filteredServices: filteredRAC
			}, () => { console.log(this.state.filteredServices) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredServices) })
		}
	}

	render() {
			return (
				<div>
					{this.state.filteredServices ?
						this.state.filteredServices.map((result, i) => 
						<div onClick={() => {this.toProfile(result._id)}} key={i} style={{border: "5px black solid"}}>
							<div>{result.serviceType}</div>
							<div>{result.service}</div>
							<div>{result.swapper.firstName} {result.swapper.lastName}</div>
							<div>${result.minCost} - ${result.maxCost}</div>
							<div>{result.swapper.businessName}</div>
							<div>{result.swapper.city}, {result.swapper.state}</div>
						</div>
						)
					:
						<div>no results</div>
					}
				</div>
			)

	}
}

export default withServices(ResidentialAndCommercial);




