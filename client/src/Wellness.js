import React from "react";
import { withServices } from './ServiceProvider';

class Wellness extends React.Component {
	constructor() {
		super()
		this.state = {
				message: false,
				filteredUsers: [],
				users: JSON.parse(localStorage.getItem('users')) || []		}
	}
	
	toProfile = (_id) => {
		this.props.history.push(`/userprofile/${_id}`)
	}

	componentDidMount() {
		const filteredWellness = this.state.users.filter(user => {
			for(let k in user) {
				if(user[k].toString().toLowerCase().search("wellness") === 0) {
					return true
				}
			}
			return filteredWellness
		})
		if(filteredWellness.length > 0) {
			this.setState({
				filteredUsers: filteredWellness
			}, () => { console.log(this.state.filteredUsers) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredUsers) })
		}
	}

	render() {
			return (
				<div className="wellnessBody">
					<div className="serviceTitle">wellness</div>
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

export default withServices(Wellness);




