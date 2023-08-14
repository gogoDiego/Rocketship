import React, { useEffect, useState, useCallback } from "react";


import DownArrow from "./imagelogos/down.png"
import TradingViewChart from "./tradingViewChart.js"

import WebsiteIcon from "./imagelogos/icons8-website-50.png"
import TwitterIcon from "./imagelogos/icons8-twitter.svg"
import TelegramIcon from "./imagelogos/icons8-telegram.svg"
import GithubIcon from "./imagelogos/icons8-github.svg"


import "./Dashboard.css"
import "./overviewDashboard.css"



export default function OverviewDash (props){


    const [chartData, setChartData] = useState(null);
    const [chartType, setChartType] = useState("Price");
    const [chartTime, setChartTime] = useState("D");


    const fetchAssetPriceData = useCallback(async (coingeckoAPILink) => {
        const apiUrl = coingeckoAPILink;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const prices = data.prices.map((price) => ({
          time: new Date(price[0]).toISOString().slice(0, 10),
          value: price[1],
        }));
        return prices.slice(0, -1);
      }, []);
    
      
      const main = useCallback(async () => {
        const assetPriceData = await fetchAssetPriceData(props.props.chain.apiPriceLink);
        return assetPriceData;
      }, [fetchAssetPriceData]);


      useEffect(() => {
        async function fetchData() {
          const data = await main();
          setChartData(data);
        }
        fetchData();
      }, [props.props.chain, main]);
      

      
      


      const openResource = (resourceType) => {
        window.open(props.props.chain[resourceType], "_blank");
      };




    return(


    <div id="dashcontent">

    <div className="dashContentDiv">

        <div className="overviewDash">

        
            <div className="overviewSubtitle">
                <p className="overviewSub headliine-gradent"> {props.props.chain.subTitle} </p> 
                {/* <p className="overviewProjectEst"> · {props.props.chain.est}</p> */}
            </div>

            <div className="overviewTags">
                {props.props.chain.tags.slice(0, 3).map((tag, index) => (
                    <div 
                        className="overviewTag"
                        key={index}
                        onClick={()=> props.setTargetSearch(tag)}
                        >
                        <p>{tag}</p>
                    </div>
                ))}
            </div>


            <div className="overviewDescription">
                <p> {props.props.chain.description} </p>
            </div>

                <div className="overviewprojectResources">
                    <div>
                        <img src={WebsiteIcon} alt="website icon" className="resourcesIcon" onClick={()=> openResource("website")} />
                    </div>
                    <div>
                        <img src={TwitterIcon} alt="twitter icon" className="resourcesIcon" onClick={()=> openResource("twitter")} />
                    </div>
                    <div>
                        <img src={TelegramIcon} alt="telegram icon" className="resourcesIcon" onClick={()=> openResource("telegram")} />
                    </div>
                    <div>
                        <img src={GithubIcon} alt="github icon" className="resourcesIcon" onClick={()=> openResource("github")}   />
                    </div>
                </div>
            


        
            <div className="readmoreDiv" onClick={() => props.setExpanded(!props.expanded)}>
                
                <div className="readmoreDiv1">
                    <p className="readmore"> {props.expanded ? "Less": "More"} Info </p>
                    <img src={DownArrow} alt="down arrow icon" className={`downArrowIcon ${props.expanded ? "flipped" : ""}`}
                    />
                </div>




            </div>

        </div>
        

        <hr className="overviewDivider" />


        <div className="overviewToken">  

            <div className="overviewStatsdiv">

                {chartType === "Price" &&
                <div className="overviewStats">

                    <h1 className="overviewTicker"> {props.props.chain.ticker} </h1>

                    <div className="overviewStatRow">
                    <p className="StatSubtitle"> Price </p>
                        <p className="StatNum"> ${props.props.chain.price} </p>
                    </div>

                    <div className="overviewStatRow">
                        <p className="StatSubtitle"> MCap </p>
                        <p className="StatNum"> {props.props.chain.mCap} </p>
                    </div>
                    <div className="overviewStatRow">
                        <p className="StatSubtitle"> TVL </p>
                        <p className="StatNum"> {props.props.chain.tvl} </p>
                    </div>
                </div>
                }

                {chartType === "Vol" &&
                <div className="overviewStats">

                    <h1 className="overviewTicker"> {props.props.chain.ticker} </h1>

                    <div className="overviewStatRow">
                    <p className="StatSubtitle"> Daily Vol </p>
                        <p className="StatNum"> ${props.props.chain.price} </p>
                    </div>

                    <div className="overviewStatRow">
                        <p className="StatSubtitle"> Daily % Change  </p>
                        <p className="StatNum"> {props.props.chain.mCap} </p>
                    </div>
                    <div className="overviewStatRow">
                        <p className="StatSubtitle"> Daily $ Change </p>
                        <p className="StatNum"> {props.props.chain.tvl} </p>
                    </div>
                </div>
                }

                {chartType === "Liquidity" &&
                <div className="overviewStats">

                    <h1 className="overviewTicker"> {props.props.chain.ticker} </h1>

                    <div className="overviewStatRow">
                    <p className="StatSubtitle"> Liquidity </p>
                        <p className="StatNum"> ${props.props.chain.price} </p>
                    </div>

                    <div className="overviewStatRow">
                        <p className="StatSubtitle"> Daily % Change </p>
                        <p className="StatNum"> {props.props.chain.mCap} </p>
                    </div>
                    <div className="overviewStatRow">
                        <p className="StatSubtitle"> Daily $ Change </p>
                        <p className="StatNum"> {props.props.chain.tvl} </p>
                    </div>
                </div>
                }


                


                <div className="overviewChartDiv">

                    <div className="ChartOptions">

                        <div className="ChartType">
                            <div 
                                className={chartType === "Vol" ? "ChartTypeButton selectedChartSetting" : "ChartTypeButton"}
                                onClick={()=> setChartType("Vol")}
                            >
                                <p> Vol </p>
                            </div>
                            <div 
                                className={chartType === "Price" ? "ChartTypeButton selectedChartSetting" : "ChartTypeButton"}
                                onClick={()=> setChartType("Price")}
                            >
                                <p> Price </p>
                            </div>
                            <div
                                className={chartType === "Liquidity" ? "ChartTypeButton selectedChartSetting" : "ChartTypeButton"}
                                onClick={()=> setChartType("Liquidity")}    
                            >
                                <p> Liquidity </p>
                            </div>
                        </div>


                        <div className="ChartTime">
                            <div
                                className={chartTime === "D" ? "ChartTypeButton selectedChartSetting" : "ChartTypeButton"}
                                onClick={()=> setChartTime("D")}     
                            >
                                <p> D </p>
                            </div>
                            <div
                                className={chartTime === "W" ? "ChartTypeButton selectedChartSetting" : "ChartTypeButton"}
                                onClick={()=> setChartTime("W")} 
                            >
                                <p> W </p>
                            </div>
                            <div
                                className={chartTime === "M" ? "ChartTypeButton selectedChartSetting" : "ChartTypeButton"}
                                onClick={()=> setChartTime("M")}     
                            >
                                <p> M </p>
                            </div>
                        </div>

                    </div>

                    <TradingViewChart data={chartData} className={"dashboardChart"} />
                </div>

            </div>

        </div>

        

        
    </div>


    {props.expanded && (
                <>
                    {/* <hr className="TokenDivider" /> */}

                    <div className="StatsRowDiv">
                        <div className="StatsBlock">
                            <p className="blockStatText">Validators</p>
                            <h3 className="blockStatNumber">175</h3>
                        </div>
                        <div className="Stats2BlockWide">
                            <p className="blockStatText">Block Height</p>
                            <h3 className="blockStatNumber">10,323,211</h3>
                        </div>
                        <div className="StatsBlock">
                            <p className="blockStatText">Block Times</p>
                            <h3 className="blockStatNumber">7s</h3>
                        </div>
                        <div className="StatsBlock">
                            <p className="blockStatText">Block Explorer</p>
                            <h3 className="blockStatNumber">→</h3>
                        </div>
                    </div>
                </>
            )}




    </div>


    )
}