import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => {

    return (
        <div>
            <button className="toggleBtn" onClick={props.click}>
                <div className="toggleBtnLine"></div>
                <div className="toggleBtnLine"></div>
                <div className="toggleBtnLine"></div>
            </button>
        </div>
    )
}



export default DrawerToggleButton;