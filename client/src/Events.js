import React from "react";
import { withServices } from './ServiceProvider';

class Events extends React.Component {
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
		const filteredEvents = this.state.users.filter(user => {
			for(let k in user) {
				if(user[k].toString().toLowerCase().search("events") === 0) {
					return true
				}
			}
			return filteredEvents
		})
		if(filteredEvents.length > 0) {
			this.setState({
				filteredUsers: filteredEvents
			}, () => { console.log(this.state.filteredUsers) }) 
		} else {
			this.setState({
				message: true
			}, () => { console.log(this.state.filteredUsers) })
		}
	}

	render() {
			return (
				<div>
					{this.state.filteredUsers ?
						this.state.filteredUsers.map((result, i) => 
						<div onClick={() => {this.toProfile(result._id)}} key={i} style={{border: "5px black solid"}}>
							<div>{result.serviceType}</div>
							<div>{result.service}</div>
							<div>{result.firstName} {result.lastName}</div>
							<div>${result.cost}</div>
							<div>{result.businessName}</div>
							<div>{result.city}, {result.state}</div>
						</div>
						)
					:
						<div>no results</div>
					}
				</div>
			)

	}
}

export default withServices(Events);




