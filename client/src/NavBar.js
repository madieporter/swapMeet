import React from "react";
import DrawerToggleButton from "./DrawerToggleButton.js";

import swapmeetLogo from "./images/swapmeetLogo.png";
import login from "./images/login.png";

const NavBar = (props) => {

    return (
            <div>
                <nav className="navigation">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                    <img className="logo" src={swapmeetLogo} alt=""/>
                    <div className="loginOnHome">
                        <img className="navItems" src={login} alt=""/><br></br>
                        <div className="loginText">Login | Sign Up</div>
                    </div>
                    
                </nav>
            </div>
    )
} 

export default NavBar;