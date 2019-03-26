import React, { Component } from 'react';
import {withServices} from './ServiceProvider'
import EditButton from './images/edit.png'
import SaveButton from './images/save.png'
import cashMonay from "./images/cashMonay.png";
import './UserProfile.css'


class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: JSON.parse(localStorage.getItem('users')) || [],
            edit: false,
            _id: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            city: '',
            state: '',
            username: '',
            password: '',
            profileImage: '',
            cost: '',
            service: '',
            serviceType: '',
            serviceDescription: '',
            businessName: ''
        }
    }

    componentDidMount(){
        if (this.props.token && this.props.match.params.username === this.props.user.username){
            let { cost, service, serviceType, businessName, city, email, firstName, lastName, phoneNumber, username, serviceDescription, state, profileImage  } = this.props.user
            this.setState({firstName, lastName, profileImage, email, phoneNumber, city, state, username, cost, service, serviceType, businessName, serviceDescription})
        }else if(this.props.match.params.username){
            const currentUser = this.state.users.find(user => user._id === this.props.match.params.username)
            let { cost, service, serviceType, businessName, city, email, firstName, lastName, phoneNumber, username, serviceDescription, state, profileImage  } = currentUser
            this.setState({firstName, lastName, profileImage, email, phoneNumber, city, state, username, cost, service, serviceType, businessName, serviceDescription})
        }
        
    }

    componentWillReceiveProps(){
        let { cost, service, serviceType, businessName, city, email, firstName, lastName, phoneNumber, username, serviceDescription, state, profileImage  } = this.props.user
        this.setState({firstName, lastName, profileImage, email, phoneNumber, city, state, username, cost, service, serviceType, businessName, serviceDescription})
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleSubmit = e => {
        const editedUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            city: this.state.city,
            state: this.state.state,
            username: this.state.username,
            password: this.state.password,
            profileImage: this.state.profileImage,
            cost: this.state.cost,
            service: this.state.service,
            serviceType: this.state.serviceType,
            businessName: this.state.businessName,
            serviceDescription: this.state.serviceDescription
        }
        
        this.props.editUser(editedUser)
        this.toggleEdit()
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        let { firstName, lastName, username, city, state, email, phoneNumber, profileImage, swapBucks, edit, cost, service, serviceType, serviceDescription, businessName} = this.state
        return (
            <div className="profileContainer">
                <div className='userProfileBackground'>
                {this.props.token && this.props.match.params.username === this.props.user.username ?
                    <>
                        {edit ?
                            <form onSubmit={this.handleSubmit} className='editUserForm'>
                            <input 
                                    type="text" 
                                    value={this.state.firstName} 
                                    placeholder='First Name'
                                    name='firstName'  
                                    onChange={this.handleChange} />
                                <input 
                                    type="text" 
                                    value={this.state.lastName} 
                                    placeholder='Last Name'
                                    name='lastName'  
                                    onChange={this.handleChange} />
                                <input 
                                    type="text" 
                                    value={this.state.profileImage} 
                                    placeholder='Profile Image' 
                                    name='profileImage'  
                                    onChange={this.handleChange} />
                                <input 
                                    type="number" 
                                    value={this.state.phoneNumber} 
                                    placeholder='Phone Number' 
                                    name='phoneNumber' 
                                    onChange={this.handleChange} />
                                <input 
                                    type="text" 
                                    value={this.state.email} 
                                    placeholder='Email' 
                                    name='email' 
                                    onChange={this.handleChange} />
                                <input 
                                    type="text" 
                                    value={this.state.city} 
                                    placeholder='City' 
                                    name='city' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.state} 
                                    placeholder='State' 
                                    name='state' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.username}
                                    placeholder='Username' 
                                    name='username' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.password}
                                    placeholder='Password' 
                                    name='password' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.cost}
                                    placeholder='Cost' 
                                    name='cost' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.service}
                                    placeholder='Service' 
                                    name='service' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.serviceType}
                                    placeholder='Service Type' 
                                    name='serviceType' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.businessName}
                                    placeholder='Business Name' 
                                    name='businessName' 
                                    onChange={this.handleChange} />
                                    <input 
                                    type="text" 
                                    value={this.state.serviceDescription}
                                    placeholder='Service Description' 
                                    name='serviceDescription' 
                                    onChange={this.handleChange} />
                                <img onClick={this.handleSubmit} src={SaveButton} className='saveButton' alt=""/> 
                            </form>
                        :
                            <div className="profileContainer">
                                <div className="profileStarter">
                                    <img  className='profileImage' src={profileImage} alt=""/>
                                    <div className="profileSwapperName">SWAPPER NAME: {username}</div>
                                    <div  className="profileBucks">
                                        <img className="cashMonay" src={cashMonay} alt=""/>
                                        <div>Swap Bucks: ${swapBucks}</div>
                                    </div>
                                </div>
                                <div className="profileInfo">
                                    <div className="profileBisName">{businessName}</div>
                                    <div className="profileName">{firstName} {lastName}</div>
                                    <div className="profileService">{service}</div>
                                    <div className="profileCost">Service Cost: ${cost}</div>
                                    <div className="profileServiceDescription">{serviceDescription}</div><br></br>
                                    <div className="profileContact">
                                        <div className="profileContactTitle">Contact:</div>
                                        <div className="profileLocation">Location: {city}, {state}</div>
                                        <div>Phone Number: {phoneNumber}</div>
                                        <div>{email}</div>
                                    </div>
                                    <button className="profileHireBtn">Hire Me!</button>
                                </div>
                                <img className='editButton' onClick={this.toggleEdit} src={EditButton} alt=""/>
                            </div>
                        }
                    </>
                :
                    <>
                        <div className="profileContainer">
                            <div className="profileStarter">
                                <img  className='profileImage' src={profileImage} alt=""/>
                                <div className="profileSwapperName">SWAPPER NAME: {username}</div>
                            </div>
                            <div className="profileInfo">
                                <div className="profileBisName">{businessName}</div>
                                <div className="profileName">{firstName} {lastName}</div>
                                <div className="profileService">{service}</div>
                                <div className="profileCost">Service Cost: ${cost}</div>
                                <div className="profileServiceDescription">{serviceDescription}</div><br></br>
                                <div className="profileContact">
                                    <div className="profileContactTitle">Contact:</div>
                                    <div className="profileLocation">Location: {city}, {state}</div>
                                    <div>Phone Number: {phoneNumber}</div>
                                    <div>{email}</div>
                                </div>
                                <button className="profileHireBtn">Hire Me!</button>
                            </div>
                        </div>
                    </>
                }
            </div>
            </div>
        );
    }
}

export default withServices(UserProfile);