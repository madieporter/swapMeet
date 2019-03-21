import React, { Component } from 'react';
import { withServices } from "./ServiceProvider";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            login: true,
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.login){
            this.props.login(this.state)
        }else{
            this.props.signup(this.state).then (console.log('signup Successful'))
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
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                            placeholder="Username:"
                            name="username"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <input type="text"
                            placeholder="Password:"
                            name="password"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <button>Submit</button>
                        </form>
                        <form onSubmit = {this.changeForm}>
                            <button>New user? Sign up</button>
                        </form>
                    </>
                :
                    <>
                        <form onSubmit={this.handleSubmit}>
                            <label>Create a username</label>
                            <input type="text"
                            placeholder="Username:"
                            name="username"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <label>Create a password</label>
                            <input type="text"
                            placeholder="Password:"
                            name="password"
                            value={this.state.name}
                            onChange={this.handleChange} />
                            <button>Submit</button>
                        </form>
                        <form onSubmit = {this.changeForm}>
                            <button>Already a user? Login</button>
                        </form>
                    </>
                }
                {this.props.token ?
                    <div>You are now logged in</div>
                :
                    null
                }
            </div>
        );
    }
}

export default withServices(Login);