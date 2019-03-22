import React , { Component } from "react";
import { withServices } from "./ServiceProvider";
import DisplayServices from "./DisplayServices";
import Profile from './Profile'

import "./App.css";


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            message: false,
            filteredServices: []
        }
    }

    componentDidMount() {
        this.props.getServices()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let input = this.state.input.toUpperCase()
        const filteredServices = this.props.services.filter(service => {
            console.log(service)
            for(let k in service) {
                if(service[k].toString().toUpperCase().search(input) === 0) {
                    return true
                }
            }
            const swappers = service.swapper
            for(let k in swappers){
                if (swappers[k].toString().toUpperCase().search(input) === 0) {
                    return true
                }
            }
        })
        if(filteredServices.length > 0) {
            this.setState({ filteredServices, message: false })
        } else {
            this.setState({ filteredServices, message: true })
        }
        return filteredServices
    }

    
    

    render() {
        return (
            <div className="formImg">
                <form className='here' onSubmit={this.handleSubmit}>
                    <input className="homeSearchBar"
                    type="text"
                    placeholder="SEARCH SWAPPERS"
                    name="input"
                    value={this.state.name}
                    onChange={this.handleChange}/><br></br>
                    <button className="homeSearchButton">SEARCH</button>
                </form>
                { this.state.message ? 
                    <div>Sorry, nothing matches your search.</div> 
                :
                    this.state.filteredServices.map((result, i) => <DisplayServices key={i} result={result} />)
                }
            </div>
        )
    }
}

export default withServices(Home);