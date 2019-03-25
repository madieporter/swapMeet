import React from "react";
import "./SideDrawer.css";

import { Link } from "react-router-dom";

import home from "./images/home.png";


const SideDrawer = (props) => {

    let drawerClasses = "sideDrawer";
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return  (
        <div className={drawerClasses}>
            <ul><Link to="/"><img src={home} alt=""/></Link></ul>
            <ul><Link to="/auto">auto</Link></ul>
            <ul><Link to="/crafts">crafts</Link></ul>
            <ul><Link to="/education">education</Link></ul>
            <ul><Link to="/events">event coordination</Link></ul>
            <ul><Link to="/residentialandcommercial">residential & commercial</Link></ul>
            <ul><Link to="/wellness">wellness</Link></ul>
        </div>
    )
}

export default SideDrawer;