import React, { Component } from 'react';
import { withServices } from "./ServiceProvider";
import Style from './Login.css'
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

    // this.props.history.push(`/userprofile/${this.state.username}`)

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.login){
            const userInfo = {username: this.state.username, password: this.state.password}
            this.props.login(userInfo).then(() => this.props.history.push(`/userprofile/${this.state.username}`))
            
        }else{
            this.props.signup(this.state).then ()
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
            <div>
                {this.state.login ? 
                    <>
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
                        <form onSubmit = {this.changeForm}>
                            <button className='toggleButton'>New user? Sign up</button>
                        </form>
                    </>



                :


                    <>
                        <form className='form' onSubmit={this.handleSubmit}>
                            <label>First Name:</label>
                            <input type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Last Name:</label>
                            <input type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Profile Image URL:</label>
                            <input type="text"
                            placeholder="Profile Image Url"
                            name="profileImage"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Phone Number:</label>
                            <input type="number"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Email:</label>
                            <input type="email"
                            placeholder="youremailhere@swapper.com"
                            name="email"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>City:</label>
                            <input type="text"
                            placeholder="City"
                            name="city"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>State:</label>
                            <input type="text"
                            placeholder="State"
                            name="state"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            {/* <label>Services:</label>
                            <input type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.name}
                            onChange={this.handleChange} /> */}
                            <label>Username:</label>
                            <input type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Password:</label>
                            <input type="text"
                            placeholder="Password"
                            name="password"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <button className='submitButton'>Submit</button>
                        </form>
                        <form onSubmit = {this.changeForm}>
                            <button className='toggleButton'>Already a user? Login</button>
                        </form>
                    </>
                }
                {/* {this.props.token ?
                    <div>You are now logged in</div>
                :
                    null
                } */}
            </div>
        );
    }
}

export default withRouter(withServices(Login));