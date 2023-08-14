import React from "react";

import "./sidebar.css"



import osmologo from "./imagelogos/osmologo.png";
import CosmosATOMLogo from "./imagelogos/brandmark.c15d55f6.png"

import HomeIcon from "./imagelogos/icons8-home.svg"
import StrategyIcon from "./imagelogos/chess.png"

export default function Sidebar (props){

    return(
    <div className="sidebardiv">


        <div className="sidebar">

        <img
            src={HomeIcon}
            className="homeIcon"
            alt="home icon"
        />

        <img
            src={StrategyIcon}
            className="StrategyIcon"
            alt="Strategy icon"
        />

        <hr className="sidebarHr"/>

        <img
            src={osmologo}
            className="sidebarApp"
            alt="project app icon"
        />

        <img
            src={CosmosATOMLogo}
            className="sidebarApp"
            alt="project app icon"
        />

        </div>

    </div>
    )
}