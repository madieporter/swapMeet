import React from "react";
import DrawerToggleButton from "./DrawerToggleButton.js";

import swapmeetLogo from "./images/swapmeetLogo.png";
import login from "./images/login.png";

const NavBar = (props) => {

    return (
            <div>
                <nav className="navigation">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                    <img className="logo" src={swapmeetLogo}/>
                    <img className="navItems" src={login} />
                </nav>
            </div>
    )
} 

export default NavBar;