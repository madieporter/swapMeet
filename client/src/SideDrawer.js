import React from "react";
import "./SideDrawer.css";

import { Link } from "react-router-dom";

const SideDrawer = (props) => {

    let drawerClasses = "sideDrawer";
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return  (
        <div className={drawerClasses}>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/auto">Auto</Link></ul>
            <ul><Link to="/crafts">Crafts</Link></ul>
            <ul><Link to="/education">Education</Link></ul>
            <ul><Link to="/events">Event Coordination</Link></ul>
            <ul><Link to="/residentialandcommercial">Residental and Commercial</Link></ul>
            <ul><Link to="/wellness">Wellness</Link></ul>
        </div>
    )
}

export default SideDrawer;