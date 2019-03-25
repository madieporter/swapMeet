import React, { Component } from 'react';
import { withServices } from "./ServiceProvider";
import './Login.css'
import {withRouter} from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            login: true,
            firstName: '',
            lastName: '',
            profileImage: '',
            username: '',
            password: '',
            phoneNumber: '',
            email: '',
            city: '',
            state: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = e => {
        e.preventDefault()
        if(this.state.login){
            const userInfo = {username: this.state.username, password: this.state.password}
            this.props.login(userInfo).then(() => this.props.history.push(`/userprofile/${this.state.username}`))
            
        }else{
            this.props.signup(this.state).then(() => this.props.history.push(`/userprofile/${this.state.username}`))
        }

    }
    
    changeForm = e => {
        e.preventDefault();
        this.setState(prevState => ({
            login: !prevState.login
        }))
    }

    render() {
        return (
            <>
                {this.state.login ? 
                    <div className='loginForm'>
                        <form className='form' onSubmit={this.handleSubmit}>
                            <label>Username:</label>
                            <input type="text"
                            placeholder="Username:"
                            name="username"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Password:</label>
                            <input type="text"
                            placeholder="Password:"
                            name="password"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <button className='submitButton'>Submit</button>
                        </form>
                        <br/>
                        <form className='toggleForm' onSubmit = {this.changeForm}>
                            <button className='toggleButton'>New user? Sign up</button>
                        </form>
                    </div>



                :


                    <div className='signUpForm'>
                        <form className='form' onSubmit={this.handleSubmit}>
                            <label>First Name:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Last Name:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Profile Image URL:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="Profile Image Url"
                            name="profileImage"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Phone Number:</label>
                            <input 
                            className='signUpInputs' 
                            type="number"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Email:</label>
                            <input 
                            className='signUpInputs' 
                            type="email"
                            placeholder="youremailhere@swapper.com"
                            name="email"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>City:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="City"
                            name="city"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>State:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="State"
                            name="state"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            {/* <label>Services:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.name}
                            onChange={this.handleChange} /> */}
                            <label>Username:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Password:</label>
                            <input 
                            className='signUpInputs' 
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <button className='submitButton'>Submit</button>
                        </form>
                        <br/>
                        <form className='toggleForm' onSubmit = {this.changeForm}>
                            <button className='toggleButton'>Already a user? Login</button>
                        </form>
                    </div>
                }
                {/* {this.props.token ?
                    <div>You are now logged in</div>
                :
                    null
                } */}
            </>
        );
    }
}

export default withRouter(withServices(Login));