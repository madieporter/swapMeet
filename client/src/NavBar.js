import React, { Component } from 'react';
import DrawerToggleButton from "./DrawerToggleButton.js";
import {withServices} from './ServiceProvider'
import { withRouter } from 'react-router-dom'

import swapmeetLogo from "./images/swapmeetLogo.png";
import login from "./images/login.png";


class NavBar extends Component {
  
    toLogin = () => {
        this.props.history.push(`/login`)
    }
    
    toProfile = () => {
        this.props.history.push(`/userprofile/${this.props.user.username}`)

    }

    // logout = () => {
    //     localStorage.removeItem('user')
    //     localStorage.removeItem('token')
    //     console.log(this.props)
    //     // this.props.setState({
    //     //     user: {},
    //     //     token: ''
    //     // })
    //     this.props.history.push('/')
    // }

    toHome = () => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <nav className="navigation">
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                    <img className="logo" src={swapmeetLogo} onClick={this.toHome} alt=""/>
                    {this.props.token ?
                        <div className="loginOnHome">
                            <img  onClick={this.toProfile} className="navItems" src={login} alt=""/><br></br>
                            <div  onClick={this.props.logout} className="loginText">Logout</div>
                        </div>
                    :
                        
                        <div onClick={this.toLogin} className="loginOnHome">
                            <img className="navItems" src={login} alt=""/><br></br>
                            <div className="loginText">Login | Sign Up</div>
                        </div>
                    }
                    
                    
                </nav>
            </div>
        );
    }
}

export default withRouter(withServices(NavBar));