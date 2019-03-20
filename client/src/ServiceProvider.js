import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class ServiceProvider extends Component {
    constructor() {
        super()

        this.state = {
            services: []
        }
    }

    componentDidMount() {
        this.getServices()
    }

    getServices = () => {
        axios.get("/services").then(response => {
            this.setState({
                services: response.data
            })
        })
    }

    render() {
        return (
            <Provider value = {{
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