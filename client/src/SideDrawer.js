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
            <ul><Link to="/">home page</Link></ul>
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