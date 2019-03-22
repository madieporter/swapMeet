import React from "react";
import DrawerToggleButton from "./DrawerToggleButton.js";


const NavBar = (props) => {

    return (
        <div>
            <header className="navBar ">
                <nav className="navigation">
                    <div>
                        <DrawerToggleButton click={props.drawerClickHandler} />
                    </div>
                    <div className="navItems"> 
                       
                    </div> 
                </nav>
            </header>
            
        </div>
    )
} 

export default NavBar;