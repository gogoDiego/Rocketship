import React, { useEffect, useState } from "react";

import YoutubeEmbed from "./EmbedYoutube";
import TwitterEmbed from "./twitterEmbed";
import MediumEmbed from "./mediumArticleEmbed";
import DownArrow from "./imagelogos/down.png"

import WebsiteIcon from "./imagelogos/icons8-website-50.png"
import TwitterIcon from "./imagelogos/icons8-twitter.svg"
import TelegramIcon from "./imagelogos/icons8-telegram.svg"
import GithubIcon from "./imagelogos/icons8-github.svg"


export default function InfoDashboard (props){




    const openResource = (resourceType) => {
        window.open(props.props.chain[resourceType], "_blank");
      };




    const [article,setArticle] = useState("Introduction")



    return(


    <div id="dashcontent">

    <div className="dashContentDiv">


        <div className="InfoReadingresources">
            


            <div className="tableandtext">

                <div className="infoTableContents">

                {/* {Object.keys(props.props.chain.textContent).map((title) => (
                    <p className={article === title ? "tableContentsBullet selectedArticle": "tableContentsBullet"} onClick={()=> setArticle(title)}>
                    {title}
                    </p>
                ))} */}

                <div className="tableContentsBullet1">
                    <p className="InfoTitle"> Introduction </p>
                    <div className="infotitleArrow">
                        {/* <img src={DownArrow} className="resourcesIcon " /> */}
                        <p className="InfoTitle"> + </p>

                    </div>
                </div>


                </div>

                <div className="infoprojectResources">
                <div>
                    <img src={WebsiteIcon} className="resourcesIcon" onClick={()=> openResource("website")} />
                </div>
                <div>
                    <img src={TwitterIcon} className="resourcesIcon" onClick={()=> openResource("twitter")} />
                </div>
                <div>
                    <img src={TelegramIcon} className="resourcesIcon" onClick={()=> openResource("telegram")} />
                </div>
                <div>
                    <img src={GithubIcon} className="resourcesIcon" onClick={()=> openResource("github")}   />
                </div>
                {/* <div>
                    <img src={WebsiteIcon} className="resourcesIcon" onClick={()=> openResource("website")} />
                </div>
                <div>
                    <img src={TwitterIcon} className="resourcesIcon" onClick={()=> openResource("twitter")} />
                </div>
                <div>
                    <img src={TelegramIcon} className="resourcesIcon" onClick={()=> openResource("telegram")} />
                </div>
                <div>
                    <img src={GithubIcon} className="resourcesIcon" onClick={()=> openResource("github")}   />
                </div> */}
                <div>
                    <img src={DownArrow} className="resourcesIcon flop" />
                </div>
            </div>


            </div>

            <p className="infoText">
            {props.props.chain.textContent[article]}
            </p>


        </div>










        <div className="infoResourcesSlide">

            <div className="ResourceSlideShow">


                <div className="Displayingslide">
                    <YoutubeEmbed/>
                    {/* <TwitterEmbed/> */}
                    {/* <MediumEmbed/> */}

                    <div className="slideFadedescription">
                        <p className="ResourceSlideDescription"> 
                            Video: Osmosis Explained 
                        </p>
                    </div>
                </div>

                <div className="verticalSelctionsSlider">                    
                    <img src={DownArrow} className="downArrowIcon upArrow"/>
                    <div className="resourceTile">
                    </div>
                    <div className="resourceTile">
                    </div>
                    <div className="resourceTile">
                    </div>
                    <div className="resourceTile">
                    </div>
                    <img src={DownArrow} className="downArrowIcon downArrow"/>
                </div>

            </div>


        </div>






            {/* {props.props.chain.textContent} */}




    </div>
    </div>


    )
}