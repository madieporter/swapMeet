import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()
const tokenAxios = axios.create()

tokenAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class ServiceProvider extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
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
            console.log(response.data)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            this.setState({
                user,
                token
            })
            return response
        })
    }

    editUser = (editedUser) => {
        
        return tokenAxios.put("/api/edituser", editedUser).then(response => {
            return response;
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

    getUsers = () => {
        axios.get("/users").then(response => {
            this.setState({
                users: response.data
            })
            localStorage.setItem('users', JSON.stringify(response.data))
        })
    }
    

    render() {
        return (
            <Provider value = {{
                logout: this.logout,
                login: this.login,
                signup: this.signup,
                editUser: this.editUser,
                getUsers: this.getUsers,
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