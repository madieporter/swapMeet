import React from "react";
import { withServices } from './ServiceProvider';

class Events extends React.Component {
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
		const filteredEvents = this.props.services.filter(service => {
			for(let k in service) {
				if(service[k].toString().search("Events") === 0) {
					return true
				}
			}
		})
		if(filteredEvents.length > 0) {
			this.setState({
				filteredServices: filteredEvents
			}, () => { console.log(this.state.filteredServices) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredServices) })
		}
	}

	render() {
			return (
				<div className="eventsBody">
					<div className="serviceTitle">event coordination</div>
					<div className="serviceContainer">
						{this.state.filteredServices ?
							this.state.filteredServices.map((result, i) => 
							<div className="serviceCard" onClick={() => {this.toProfile(result._id)}} key={i}>
								<div className="serviceBisName">{result.swapper.businessName}</div>
								<div className="serviceSwapperName">{result.swapper.firstName} {result.swapper.lastName}</div>
								<div className="serviceService">{result.service}</div>
								<div className="serviceCost">${result.minCost} - ${result.maxCost}</div>
								<div className="serviceLocation">{result.swapper.city}, {result.swapper.state}</div>
							</div>
							)
						:
							<div>no results</div>
						}
					</div>
				</div>
			)

	}
}

export default withServices(Events);




