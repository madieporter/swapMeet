import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class ServiceProvider extends Component {
    constructor() {
        super()

        this.state = {
            services: [],
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || ''
        }
    }

    signup = (userInfo) => {
        return axios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem('user', JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return axios.post('/auth/login', credentials).then(response => {
            const { token, user } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            this.setState({
                user,
                token
            })
            return response
        })
    }

    logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.setState({
            user: {},
            token: ''
        })
    }

    getServices = () => {
        axios.get("/services").then(response => {
            console.log(response.data)
            this.setState({
                services: response.data
            })
        })
    }

    render() {
        return (
            <Provider value = {{
                logout: this.logout,
                login: this.login,
                signup: this.signup,
                getServices: this.getServices,
                ...this.state
            }}>
                {this.props.children}
            </Provider>

        )
    }
}

export default ServiceProvider;

export function withServices (C) {
    return props => <Consumer>
                        {value => <C {...value} {...props} />}
                    </Consumer>
}