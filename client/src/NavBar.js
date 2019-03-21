import React from "react";
import { Link } from "react-router-dom";

import menuBtn from "./menuBtn.png";


const NavBar = () => {

    return (
        <div>
            <header className="navBar ">
                <nav className="navigation">
                    <div></div>
                    <div className="navLogo"><a href="/"><img src={menuBtn}/></a></div>
                    <div className="navItems"> 
                        <Link to="/">Home</Link>
                        <Link to="/auto">Auto</Link>
                        <Link to="/crafts">Crafts</Link> 
                        <Link to="/education">Education</Link>
                        <Link to="/events">Event Coordination</Link>
                        <Link to="/residentialandcommercial">Residental and Commercial</Link>
                        <Link to="/wellness">Wellness</Link>
                    </div> 
                </nav>
            </header>
            
        </div>
    )
} 

export default NavBar;