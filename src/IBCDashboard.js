import React, { useEffect, useState } from "react";


import "./IBCDashboard.css"

import DownArrowIcon from "./imagelogos/down.png"
import SwitchIcon from "./imagelogos/arrow-goes-left-right-icon.svg"
import SettingsGearIcon from "./imagelogos/setting-icon.svg"

export default function OverviewDash (props,setExpanded){


console.log(props)





    return(


    <div id="dashcontent">

        <div className="overviewDash">


            {/* <div className="glassCover">
                <p className="comingSoon"> Coming Soon </p>
                <div className="circle topLeftC"></div>
                <div className="circle topRightC"></div>
                <div className="circle bottomLeftC"></div>
                <div className="circle bottomRightC"></div>
            </div> */}

            <div className="bridgeDiv">

            <div className="IBCSubtitle">
                <p className="IBCSub"> Bridge Assets </p> 
                <img src={SettingsGearIcon} className="IBCSetting"/>
            </div>

                <div className="IBCFromDiv">

                    <div className="IBCChainSelector">

                        <div className="IBCChainFromDiv fromchain">
                            <img src={DownArrowIcon} className="IBCdownarrowicon"/>
                            <p className="selectChain"> Select Chain</p>
                        </div>
                        <div className="IBCSwitchChains">
                            <img src={SwitchIcon} className="SwitchChainIcon"/>
                        </div>
                        <div className="IBCChainFromDiv destinationchain">
                            <img src={DownArrowIcon} className="IBCdownarrowicon"/>
                            <p className="selectChain"> Select Chain</p>
                        </div>

                    </div>

                    <div className="IBCAssetAmountFromDiv">

                        <div className="IBCAssetDiv">
                            <img src={DownArrowIcon} className="IBCdownarrowicon"/>
                            {/* <img src={props.props.chain.logo} className="IBCAsseticon"/> */}
                            <p className="selectChain"> Select Token</p>
                        </div>
                        <div className="IBCAmountDiv">
                            <p className="selectChain"> Amount </p>
                        </div>
                    </div>
                </div>

                <div className="StartBridging">
                    <p> Begin Bridge Confirmation </p>
                </div>
            
            </div>

        </div>

        <hr className="overviewDivider"/>

        <div className="overviewToken">  



        </div>



    </div>


    )
}