import React from "react";
import "./SideDrawer.css";

import { Link } from "react-router-dom";

import home from "./images/home.png";
import auto from "./images/auto.png";
import crafts from "./images/crafts.png";
import education from "./images/education.png";
import events from "./images/events.png";
import resAndComerc from "./images/resandcomerc.png";
import wellness from "./images/wellness.png";

const SideDrawer = (props) => {

    let drawerClasses = "sideDrawer";
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return  (
        <div className={drawerClasses}>
            <ul><Link to="/">home</Link></ul>
            <ul><Link to="/auto">auto</Link></ul>
            <ul><Link to="/crafts">crafts</Link></ul>
            <ul><Link to="/education">education</Link></ul>
            <ul><Link to="/events">event planning</Link></ul>
            <ul><Link to="/residentialandcommercial">residential & commercial</Link></ul>
            <ul><Link to="/wellness">wellness</Link></ul>
        </div>
    )
}

export default SideDrawer;