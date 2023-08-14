import React, { useEffect, useState } from "react";

import OverviewDash from "./OverviewDash.js";
import InfoDashboard from "./infoDashboard.js";
import AssetDashboard from "./AssetDashboard.js";
import IBCDash from "./IBCDashboard.js"
import StakeDashboard from "./StakeDashboard.js"
import VoteDashboard from "./voteDashboard.js"



import "./Dashboard.css"



export default function Dashboard (props){


    const [dashNav, setDashNav] = useState("Info")
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        setExpanded(false);
      }, [dashNav]);
    

    return(

        <div id="dashboarddiv">

            <div  className={expanded ? "expanded dashboard": "dashboard"}>

                <div id="dashheader">
                    <div id="dashtitle">
                        <img src={props.chain.logoTypeface} alt="typeface logo" className="ProjectDashboardLogo"/>
                    </div>

                    <ul id="dashnav">
                        <li
                        className={dashNav === "Overview" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("Overview")}
                        > Overview </li>
                        <li
                        className={dashNav === "Info" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("Info")}
                        > Info </li>
                        <li
                        className={dashNav === "Assets" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("Assets")}
                        > Assets </li>
                        <li
                        className={dashNav === "IBC" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("IBC")}
                        > IBC </li>

                        <li
                        className={dashNav === "Stake" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("Stake")}
                        > Stake </li>
                        <li
                        className={dashNav === "Vote" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("Vote")}
                        > Vote </li>
                        {/* <li
                        className={dashNav === "NFT's" ? "selectedDashNav" : "unselectedDashNav"}
                        onClick={() => setDashNav("NFT's")}
                        > NFT's </li> */}

                    </ul>
                </div>


                {dashNav === "Overview" && 
                <OverviewDash
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setTargetSearch={props.setTargetSearch}
                />
                }

                {dashNav === "Info" && 
                <InfoDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setTargetSearch={props.setTargetSearch}
                />
                }

                {dashNav === "Assets" && 
                <AssetDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}

                />
                }

                {dashNav === "IBC" && 
                <IBCDash
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                }

                {dashNav === "Stake" && 
                <StakeDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                }

                {dashNav === "Stake" && 
                <StakeDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                }

                {dashNav === "Vote" && 
                <VoteDashboard
                    props={props}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
                }
                

            </div>

        </div>

    )
}