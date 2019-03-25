import React from "react";
import { withServices } from './ServiceProvider';

class Crafts extends React.Component {
	constructor() {
		super()
		this.state = {
				message: false,
				filteredUsers: [],
				users: JSON.parse(localStorage.getItem('users')) || []
		}
	}
	
	toProfile = (_id) => {
		this.props.history.push(`/userprofile/${_id}`)
	}

	componentDidMount() {
		const filteredCrafts = this.state.users.filter(user => {
			console.log(user)
			for(let k in user) {
				if(user[k].toString().toLowerCase().search("crafts") === 0) {
					return true
				}
			}
			return filteredCrafts
		})
		if(filteredCrafts.length > 0) {
			this.setState({
				filteredUsers: filteredCrafts
			}, () => { console.log(this.state.filteredUsers) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredUsers) })
		}
	}

	render() {
			return (
				<div className="craftsBody">
					<div className="serviceTitle">crafts</div>
					<div className="serviceContainer">
						{this.state.filteredServices ?
							this.state.filteredServices.map((result, i) => 
							<div  className="serviceCard" onClick={() => {this.toProfile(result._id)}} key={i}>
								<div className="serviceCard" onClick={() => {this.toProfile(result._id)}} key={i}></div>
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

export default withServices(Crafts);




