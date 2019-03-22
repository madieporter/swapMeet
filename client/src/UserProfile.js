import React, { Component } from 'react';
import {withServices} from './ServiceProvider'
import EditButton from './images/edit.png'
import SaveButton from './images/save.png'
import Style from './UserProfile.css'


class UserProfile extends Component {
    constructor(){
        super()
        this.state = {
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
            profileImage: ''
        }
    }

    componentDidMount(){
        let {firstName, lastName, profileImage, email, phoneNumber, city, state, username, password,_id} = this.props.user
        this.setState({firstName, lastName, profileImage, email, phoneNumber, city, state, username, password,_id})
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
            profileImage: this.state.profileImage
        }
        
        this.props.editUser(editedUser)
        this.toggleEdit()
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        let { firstName, lastName, username, city, state, email, phoneNumber, profileImage, swapBucks} = this.props.user
        return (
            <div className='userProfileBackground'>
                {this.state.edit ?
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
                        <img onClick={this.handleSubmit} src={SaveButton} className='saveButton' alt=""/> 
                    </form>
                :
                    <>
                        <div>{username}</div>
                        <div>{swapBucks}</div>
                        <img src={profileImage} alt=""/>
                        <div>{firstName}</div>
                        <div>{lastName}</div>
                        <div>{city}</div>
                        <div>{state}</div>
                        <div>{email}</div>
                        <div>{phoneNumber}</div>
                        <img className='editButton' onClick={this.toggleEdit} src={EditButton} alt=""/>
                    </>
                }
            </div>
        );
    }
}

export default withServices(UserProfile);