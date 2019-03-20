import React , { Component } from "react";
import { withServices } from "./ServiceProvider";


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            filteredBeers: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        //SET UP FILTER HERE
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    placeholder="Search Swappers"
                    name="searchSwappers"
                    value={this.state.name}
                    onChange={this.handleChange}/><br></br>
                    <button>SEARCH</button>
                </form>
            </div>
        )
    }
}

export default withServices(Home);