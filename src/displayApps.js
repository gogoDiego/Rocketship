import React from 'react'




import "./appDisplayStyle.css"














export default function DisplayApps (props){


    return(

    <div className='explorebody'>

        <div className="appExploreDiv">

            <div className='appsdiv'>

                <div className='app'>
                    <div className='appsquare'>
                        <img src={props.chain.logo} className="appLogo"/>
                    </div>
                    <p className='appTitle'> Osmosis</p>
                </div>

            </div>

            <div className='appsdiv'>

                <div className='app'>
                    <div className='appsquare'>
                        <img src={props.chain.logo} className="appLogo"/>
                    </div>
                    <p className='appTitle'> Osmosis</p>
                </div>

            </div>

        </div>

    </div>

    )
}