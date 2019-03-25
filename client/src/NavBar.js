import React, { Component } from 'react';
import DrawerToggleButton from "./DrawerToggleButton.js";
import {withServices} from './ServiceProvider'
import { withRouter } from 'react-router-dom'

import swapmeetLogo from "./images/swapmeetLogo.png";
import login from "./images/login.png";


class NavBar extends Component {
  
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
            <div>
                <nav className="navigation">
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                    <img className="logo" src={swapmeetLogo} onClick={this.toHome} alt=""/>
                    <div className="loginOnHome">
                        <img className="navItems" src={login} alt=""/><br></br>
                        <div className="loginText">Login | Sign Up</div>
                    </div>
                    
                </nav>
            </div>
        );
    }
}

export default NavBar;