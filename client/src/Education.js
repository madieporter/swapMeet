import React from "react";
import { withServices } from './ServiceProvider';

class Education extends React.Component {
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
		const filteredEducation = this.props.services.filter(service => {
			for(let k in service) {
				if(service[k].toString().search("Education") === 0) {
					return true
				}
			}
		})
		if(filteredEducation.length > 0) {
			this.setState({
				filteredServices: filteredEducation
			}, () => { console.log(this.state.filteredServices) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredServices) })
		}
	}

	render() {
			return (
				<div className="educationBody">
					<div className="serviceTitle">education</div>
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

export default withServices(Education);




