import React, { Component } from 'react';
import DrawerToggleButton from "./DrawerToggleButton.js";
import {withServices} from './ServiceProvider'
import { withRouter } from 'react-router-dom'

import swapmeetLogo from "./images/swapmeetLogo.png";
import userIcon from "./images/login.png";


class NavBar extends Component {
    constructor(props){
        super(props)
    }
    toLogin = () => {
        if(this.props.token){
            this.props.history.push(`/userprofile/${this.props.user.username}`)
        }else{
            this.props.history.push(`/login`)
        }
    }

    toHome = () => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <nav className="navigation">
                <DrawerToggleButton click={this.props.drawerClickHandler} />
                <img className="logo" onClick={this.toHome} src={swapmeetLogo} alt=""/>
                <img className="navItems" onClick={ this.toLogin} src={userIcon} alt=""/>
            </nav>
        );
    }
}


export default withRouter(withServices(NavBar));