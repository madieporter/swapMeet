import React from "react";
import { withServices } from './ServiceProvider';

import auto from "./ServiceComponents.css"

class Auto extends React.Component {
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
		const filteredAuto = this.props.services.filter(service => {
			for(let k in service) {
				if(service[k].toString().search("auto") === 0) {
					return true
				}
			}
		})
		if(filteredAuto.length > 0) {
			this.setState({
				filteredServices: filteredAuto
			}, () => { console.log(this.state.filteredServices) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredServices) })
		}
	}

	render() {
			return (
				<div className="autoBody">
					<div className="serviceTitle">auto</div>
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

export default withServices(Auto);




